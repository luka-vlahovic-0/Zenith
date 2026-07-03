"use client";

import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";

/**
 * Local test-token ledger backed by localStorage.
 * Balances are keyed per wallet address (or "guest" when no wallet is
 * connected), so the whole staking flow works without any chain.
 */
const STORAGE_KEY = "zenith-demo-ledger-v1";
export const DEMO_APR = 0.0297;
export const FAUCET_AMOUNT = 10;
export const GAS_FEE = 0.0004; // flat demo gas fee, paid in ETH
const SECONDS_PER_YEAR = 365 * 24 * 3600;

export function genTxHash() {
  const bytes = new Uint8Array(32);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 32; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return "0x" + Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function loadAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function freshLedger() {
  return {
    eth: FAUCET_AMOUNT,
    zeth: 0,
    rewards: 0,
    lastTick: Date.now(),
    history: [],
  };
}

function accrue(ledger) {
  const now = Date.now();
  const dt = Math.max(0, (now - ledger.lastTick) / 1000);
  ledger.rewards += (ledger.zeth * DEMO_APR * dt) / SECONDS_PER_YEAR;
  ledger.lastTick = now;
}

function persist(key, ledger) {
  const all = loadAll();
  all[key] = ledger;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    /* storage full/blocked — demo keeps working in memory */
  }
}

export default function useDemoStaking() {
  const { address, isConnected } = useAccount();
  const key = (address || "guest").toLowerCase();
  const [ledger, setLedger] = useState(null);

  // load (or create) the ledger for this account
  useEffect(() => {
    const all = loadAll();
    const l = all[key] || freshLedger();
    accrue(l);
    persist(key, l);
    setLedger({ ...l });
  }, [key]);

  // accrue rewards live, once per second
  useEffect(() => {
    const id = setInterval(() => {
      setLedger((prev) => {
        if (!prev) return prev;
        const next = { ...prev };
        accrue(next);
        persist(key, next);
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [key]);

  const mutate = useCallback(
    (fn) => {
      setLedger((prev) => {
        if (!prev) return prev;
        const next = { ...prev, history: [...prev.history] };
        accrue(next);
        fn(next);
        next.history = next.history.slice(0, 20);
        persist(key, next);
        return next;
      });
    },
    [key]
  );

  const stake = useCallback(
    (amount, hash) =>
      mutate((l) => {
        l.eth -= amount + GAS_FEE;
        l.zeth += amount;
        l.history.unshift({ type: "stake", amount, hash, time: Date.now() });
      }),
    [mutate]
  );

  const unstake = useCallback(
    (amount, hash) =>
      mutate((l) => {
        l.zeth -= amount;
        l.eth += Math.max(0, amount - GAS_FEE);
        l.history.unshift({ type: "unstake", amount, hash, time: Date.now() });
      }),
    [mutate]
  );

  const claim = useCallback(
    (hash) =>
      mutate((l) => {
        if (l.rewards <= 0) return;
        l.history.unshift({ type: "claim", amount: l.rewards, hash, time: Date.now() });
        l.zeth += l.rewards;
        l.rewards = 0;
      }),
    [mutate]
  );

  const faucet = useCallback(
    (hash) =>
      mutate((l) => {
        l.eth += FAUCET_AMOUNT;
        l.history.unshift({ type: "faucet", amount: FAUCET_AMOUNT, hash, time: Date.now() });
      }),
    [mutate]
  );

  const removeHistoryItem = useCallback(
    (id) =>
      mutate((l) => {
        l.history = l.history.filter((h) => (h.hash ?? h.time) !== id);
      }),
    [mutate]
  );

  const clearHistory = useCallback(
    () =>
      mutate((l) => {
        l.history = [];
      }),
    [mutate]
  );

  return {
    ready: ledger !== null,
    account: isConnected ? address : null,
    eth: ledger?.eth ?? 0,
    zeth: ledger?.zeth ?? 0,
    rewards: ledger?.rewards ?? 0,
    history: ledger?.history ?? [],
    stake,
    unstake,
    claim,
    faucet,
    removeHistoryItem,
    clearHistory,
  };
}
