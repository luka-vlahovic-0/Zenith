"use client";

import { useMemo, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CoinIcon from "@/components/ui/CoinIcon";
import Reveal from "@/components/ui/Reveal";
import StakingRewards from "./StakingRewards";
import TxModal from "./TxModal";
import useDemoStaking, { FAUCET_AMOUNT, GAS_FEE, genTxHash } from "@/hooks/useDemoStaking";

const ETH_PRICE = 3187; // demo price feed

const short = (addr) => `${addr.slice(0, 6)}…${addr.slice(-4)}`;
const shortHash = (h) => `${h.slice(0, 8)}…${h.slice(-6)}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const HISTORY_LABELS = {
  stake: { label: "Staked", sign: "-", token: "ETH", color: "text-zen-cyan" },
  unstake: { label: "Unstaked", sign: "+", token: "ETH", color: "text-zen-violet" },
  claim: { label: "Claimed rewards", sign: "+", token: "zETH", color: "text-zen-teal" },
  faucet: { label: "Faucet drip", sign: "+", token: "ETH", color: "text-zen-gold" },
};

export default function StakeCard() {
  const [mode, setMode] = useState("stake");
  const [amount, setAmount] = useState("");
  const [tx, setTx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const txRunning = useRef(false);
  const demo = useDemoStaking();

  const isStake = mode === "stake";
  const balance = isStake ? demo.eth : demo.zeth;
  const txActive = tx !== null && tx.status !== "success";

  const parsed = useMemo(() => {
    const n = parseFloat(amount);
    return Number.isFinite(n) ? n : 0;
  }, [amount]);

  // staking pays gas on top; unstaking nets gas from proceeds
  const insufficient = isStake
    ? parsed + GAS_FEE > demo.eth + 1e-9
    : parsed > demo.zeth + 1e-9;

  const handleInput = (e) => {
    const v = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(v.split(".").slice(0, 2).join("."));
  };

  const handleMax = () => {
    const max = isStake ? Math.max(0, demo.eth - GAS_FEE) : demo.zeth;
    if (max > 0) setAmount(max.toFixed(4));
  };

  const switchMode = (m) => {
    setMode(m);
    setAmount("");
  };

  const notify = (msg) =>
    toast.success(msg, { position: "bottom-right", theme: "dark", autoClose: 4000 });

  /** Simulated transaction lifecycle: wallet → submitted → confirmations → apply */
  const runTx = async (kind, txAmount, apply, successMsg) => {
    if (txRunning.current) return;
    txRunning.current = true;

    const hash = genTxHash();
    setTx({ kind, amount: txAmount, hash, status: "wallet", confirmations: 0 });
    setModalOpen(true);

    await sleep(1200);
    setTx((p) => ({ ...p, status: "submitted" }));
    await sleep(900);
    setTx((p) => ({ ...p, status: "confirming", confirmations: 1 }));
    await sleep(850);
    setTx((p) => ({ ...p, confirmations: 2 }));
    await sleep(850);
    setTx((p) => ({ ...p, confirmations: 3 }));
    await sleep(450);

    apply(hash);
    setTx((p) => ({ ...p, status: "success" }));
    notify(successMsg);
    txRunning.current = false;
  };

  const handleSubmit = () => {
    if (parsed <= 0 || insufficient || txActive || !demo.ready) return;
    const value = parsed;
    if (isStake) {
      runTx(
        "stake",
        value,
        (hash) => demo.stake(value, hash),
        `Staked ${value.toLocaleString()} ETH → received ${value.toLocaleString()} zETH ✨`
      );
    } else {
      runTx(
        "unstake",
        value,
        (hash) => demo.unstake(value, hash),
        `Unstaked ${value.toLocaleString()} zETH → received ${value.toLocaleString()} ETH`
      );
    }
    setAmount("");
  };

  const handleClaim = () => {
    if (demo.rewards <= 0 || txActive) return;
    runTx(
      "claim",
      demo.rewards,
      (hash) => demo.claim(hash),
      "Rewards claimed and compounded into zETH 🎉"
    );
  };

  const handleFaucet = () => {
    if (!demo.ready) return;
    demo.faucet(genTxHash());
    notify(`Faucet sent you ${FAUCET_AMOUNT} test ETH 💧`);
  };

  const usd = (n) =>
    (n * ETH_PRICE).toLocaleString("en-US", { style: "currency", currency: "USD" });

  const buttonLabel = txActive
    ? "Transaction pending…"
    : parsed <= 0
    ? "Enter an amount"
    : insufficient
    ? `Insufficient ${isStake ? "ETH" : "zETH"} balance`
    : isStake
    ? "Stake"
    : "Unstake";

  return (
    <section className="relative px-4 pt-32 md:pt-36">
      {/* header */}
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Stake</span>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          ETH in. <span className="text-aurora">zETH out.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
          Stake ETH and receive natively restaked zETH — earning staking
          rewards, restaking yield, and points from the very first block.
        </p>
      </Reveal>

      {/* animated conversion path */}
      <Reveal delay={150} className="mx-auto mt-10 max-w-md">
        <svg viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
          <defs>
            <linearGradient id="stake-flow" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#627eea" />
              <stop offset="100%" stopColor="#38e8ff" />
            </linearGradient>
          </defs>
          <path
            className="flow-path"
            d="M60 40 C 130 40, 130 12, 200 12 C 270 12, 270 40, 340 40"
            stroke="url(#stake-flow)"
            strokeWidth="2"
            fill="none"
          />
          <path
            className="flow-path"
            style={{ animationDelay: "-0.7s" }}
            d="M60 40 C 130 40, 130 68, 200 68 C 270 68, 270 40, 340 40"
            stroke="url(#stake-flow)"
            strokeWidth="2"
            fill="none"
          />
          <foreignObject x="28" y="24" width="32" height="32">
            <CoinIcon coin="eth" size={32} />
          </foreignObject>
          <foreignObject x="340" y="24" width="32" height="32">
            <CoinIcon coin="zeth" size={32} />
          </foreignObject>
        </svg>
      </Reveal>

      {/* stake card */}
      <Reveal delay={250} className="mx-auto mt-8 max-w-lg">
        <div className="glass relative p-6 md:p-8">
          {/* demo mode bar */}
          <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-zen-gold/25 bg-zen-gold/[0.06] px-4 py-2.5">
            <p className="text-xs text-ink-muted">
              <span className="font-semibold text-zen-gold">Demo mode</span> · local test
              tokens ·{" "}
              <span className="text-ink">
                {demo.account ? short(demo.account) : "guest account"}
              </span>
            </p>
            <button
              onClick={handleFaucet}
              disabled={!demo.ready}
              className="shrink-0 rounded-full border border-zen-gold/40 bg-zen-gold/10 px-3 py-1 text-xs font-semibold text-zen-gold transition-all duration-300 hover:bg-zen-gold/25 disabled:opacity-40"
            >
              💧 Faucet
            </button>
          </div>

          {/* stake / unstake tabs */}
          <div className="mb-5 grid grid-cols-2 gap-1 rounded-xl border border-white/[0.08] bg-void/50 p-1">
            {["stake", "unstake"].map((m) => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className={`rounded-lg py-2 font-display text-sm font-semibold capitalize transition-all duration-300 ${
                  mode === m
                    ? "bg-white/[0.08] text-zen-cyan shadow-card"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* input */}
          <div className="rounded-2xl border border-white/[0.08] bg-void/50 p-5 transition-colors duration-300 focus-within:border-zen-cyan/50">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-ink-faint">
              <span>You {isStake ? "stake" : "unstake"}</span>
              <span>
                Balance {balance.toFixed(4)}
                {balance > 0 && (
                  <button
                    onClick={handleMax}
                    className="ml-2 rounded-md bg-zen-cyan/10 px-2 py-0.5 font-semibold text-zen-cyan transition-colors hover:bg-zen-cyan/25"
                  >
                    MAX
                  </button>
                )}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <input
                type="text"
                inputMode="decimal"
                placeholder="0.0"
                value={amount}
                onChange={handleInput}
                className="w-full bg-transparent font-display text-3xl font-semibold text-ink outline-none placeholder:text-ink-faint"
              />
              <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4">
                <CoinIcon coin={isStake ? "eth" : "zeth"} size={24} />
                <span className="font-display font-semibold text-ink">
                  {isStake ? "ETH" : "zETH"}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-ink-faint">≈ {usd(parsed)}</p>
          </div>

          {/* arrow */}
          <div className="relative z-10 -my-4 flex justify-center">
            <div className="glass flex h-10 w-10 items-center justify-center !rounded-xl border-white/[0.14]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 4v16m-6-6 6 6 6-6" stroke="#38e8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* output */}
          <div className="rounded-2xl border border-white/[0.08] bg-void/50 p-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-ink-faint">
              <span>You receive</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="w-full truncate font-display text-3xl font-semibold text-ink">
                {parsed > 0 ? parsed.toLocaleString("en-US", { maximumFractionDigits: 6 }) : "0.0"}
              </p>
              <div
                className={`flex shrink-0 items-center gap-2 rounded-full border py-1.5 pl-2 pr-4 ${
                  isStake
                    ? "border-zen-cyan/30 bg-zen-cyan/10"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <CoinIcon coin={isStake ? "zeth" : "eth"} size={24} />
                <span className={`font-display font-semibold ${isStake ? "text-zen-cyan" : "text-ink"}`}>
                  {isStake ? "zETH" : "ETH"}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-ink-faint">≈ {usd(parsed)}</p>
          </div>

          {/* details */}
          <div className="mt-6 space-y-2.5 text-sm">
            <div className="flex justify-between">
              <span className="text-ink-muted">Exchange rate</span>
              <span className="text-ink">1 ETH = 1 zETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-muted">Reward rate</span>
              <span className="text-zen-teal">2.97% APR + points</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-muted">Est. gas fee</span>
              <span className="text-ink">
                {GAS_FEE} ETH · {usd(GAS_FEE)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-muted">Network</span>
              <span className="text-zen-gold">zenith demo (local)</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={txActive || parsed <= 0 || insufficient || !demo.ready}
            className="btn-aurora mt-7 w-full text-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {txActive && (
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            )}
            {buttonLabel}
          </button>
        </div>
      </Reveal>

      {/* your position */}
      {demo.ready && (demo.zeth > 0 || demo.rewards > 0) && (
        <Reveal className="mx-auto mt-6 max-w-lg">
          <div className="glass p-6">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ink-muted">
              Your position
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/[0.06] bg-void/40 px-4 py-4">
                <p className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
                  <CoinIcon coin="zeth" size={22} />
                  {demo.zeth.toLocaleString("en-US", { maximumFractionDigits: 4 })}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  zETH staked
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-void/40 px-4 py-4">
                <p className="font-display text-2xl font-bold text-zen-teal">
                  +{demo.rewards.toFixed(9)}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  Rewards accrued
                </p>
              </div>
            </div>

            <button
              onClick={handleClaim}
              disabled={demo.rewards <= 0 || txActive}
              className="btn-ghost mt-4 w-full !py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Claim & compound rewards
            </button>
          </div>
        </Reveal>
      )}

      {/* history */}
      {demo.ready && demo.history.length > 0 && (
        <Reveal className="mx-auto mt-6 max-w-lg">
          <div className="glass p-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ink-muted">
                Recent transactions
              </p>
              <button
                onClick={demo.clearHistory}
                className="text-xs font-semibold text-ink-faint transition-colors hover:text-zen-pink"
              >
                Clear all
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {demo.history.slice(0, 6).map((h) => {
                const meta = HISTORY_LABELS[h.type];
                const id = h.hash ?? h.time;
                return (
                  <div
                    key={id}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-void/40 px-4 py-2.5 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="text-ink">{meta.label}</p>
                      {h.hash && (
                        <p className="font-mono text-[11px] text-ink-faint">{shortHash(h.hash)}</p>
                      )}
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <div className="text-right">
                        <p className={`font-semibold ${meta.color}`}>
                          {meta.sign}
                          {h.amount.toLocaleString("en-US", { maximumFractionDigits: 6 })}{" "}
                          {meta.token}
                        </p>
                        <p className="text-[11px] text-ink-faint">
                          {new Date(h.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      <button
                        onClick={() => demo.removeHistoryItem(id)}
                        aria-label="Remove transaction"
                        className="rounded-md p-1 text-ink-faint transition-all duration-200 hover:bg-white/[0.06] hover:text-zen-pink md:opacity-0 md:group-hover:opacity-100"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      )}

      <StakingRewards />
      {modalOpen && <TxModal tx={tx} onClose={() => setModalOpen(false)} />}
      <ToastContainer />
    </section>
  );
}
