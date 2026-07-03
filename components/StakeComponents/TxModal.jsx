"use client";

import { useEffect, useState } from "react";

const TOTAL_CONFIRMATIONS = 3;

const shortHash = (h) => `${h.slice(0, 10)}…${h.slice(-8)}`;

const KIND_LABELS = {
  stake: (tx) => `Stake ${tx.amount.toLocaleString("en-US", { maximumFractionDigits: 6 })} ETH`,
  unstake: (tx) => `Unstake ${tx.amount.toLocaleString("en-US", { maximumFractionDigits: 6 })} zETH`,
  claim: () => "Claim staking rewards",
};

const STEP_ORDER = ["wallet", "submitted", "confirming", "success"];

function Spinner({ className = "h-5 w-5" }) {
  return (
    <svg className={`${className} animate-spin text-zen-cyan`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.2" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CheckDot() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zen-teal/15">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PendingDot() {
  return <span className="h-5 w-5 rounded-full border-2 border-white/15" />;
}

function Step({ state, title, children }) {
  return (
    <div className={`flex gap-3.5 ${state === "pending" ? "opacity-40" : ""}`}>
      <div className="flex flex-col items-center">
        {state === "active" ? <Spinner /> : state === "done" ? <CheckDot /> : <PendingDot />}
      </div>
      <div className="min-w-0 flex-1 pb-5">
        <p className={`text-sm font-semibold ${state === "active" ? "text-ink" : state === "done" ? "text-ink-muted" : "text-ink-faint"}`}>
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function TxModal({ tx, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    setCopied(false);
  }, [tx?.hash]);

  if (!tx) return null;

  const stage = STEP_ORDER.indexOf(tx.status);
  const stepState = (i) => (stage > i ? "done" : stage === i ? "active" : "pending");
  const isSuccess = tx.status === "success";
  const hashVisible = stage >= 1;

  const copyHash = async () => {
    try {
      await navigator.clipboard.writeText(tx.hash);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* panel — solid background */}
      <div className="relative w-full max-w-sm rounded-2xl border border-white/[0.12] bg-[#0b0e1e] p-6 shadow-card">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-ink-faint">
              {isSuccess ? "Transaction confirmed" : "Transaction in progress"}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold text-ink">
              {KIND_LABELS[tx.kind]?.(tx)}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-ink-faint transition-colors hover:bg-white/[0.06] hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {isSuccess ? (
          <div className="mt-6 flex flex-col items-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-zen-teal/10">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  className="draw-path draw-now"
                  style={{ "--path-length": 30, "--draw-delay": "0.1s" }}
                  d="m5 12.5 4.5 4.5L19 7.5"
                  stroke="#2dd4bf"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-4 text-sm text-ink-muted">
              Confirmed in block{" "}
              <span className="font-semibold text-ink">
                #{(21_407_612 + (tx.hash.charCodeAt(3) % 97)).toLocaleString()}
              </span>{" "}
              after {TOTAL_CONFIRMATIONS} confirmations.
            </p>
          </div>
        ) : (
          <div className="mt-6">
            <Step state={stepState(0)} title="Confirm in your wallet">
              {stage === 0 && (
                <p className="mt-1 text-xs text-ink-faint">Waiting for signature…</p>
              )}
            </Step>
            <Step state={stepState(1)} title="Transaction submitted">
              {stage === 1 && (
                <p className="mt-1 text-xs text-ink-faint">Broadcasting to the network…</p>
              )}
            </Step>
            <Step state={stepState(2)} title="Waiting for confirmations">
              {stage === 2 && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-ink-faint">
                    <span>Block confirmations</span>
                    <span className="font-semibold text-zen-cyan">
                      {tx.confirmations}/{TOTAL_CONFIRMATIONS}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className="h-full rounded-full bg-aurora transition-all duration-700"
                      style={{ width: `${(tx.confirmations / TOTAL_CONFIRMATIONS) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </Step>
          </div>
        )}

        {/* tx hash */}
        {hashVisible && (
          <button
            onClick={copyHash}
            className="mt-4 flex w-full items-center justify-between rounded-xl border border-white/[0.08] bg-void/60 px-4 py-3 text-left transition-colors hover:border-white/[0.16]"
          >
            <span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                Transaction hash
              </span>
              <span className="mt-0.5 block font-mono text-xs text-ink">{shortHash(tx.hash)}</span>
            </span>
            <span className="text-xs font-semibold text-zen-cyan">
              {copied ? "Copied ✓" : "Copy"}
            </span>
          </button>
        )}

        {isSuccess ? (
          <button onClick={onClose} className="btn-aurora mt-5 w-full !py-2.5 text-base">
            Done
          </button>
        ) : (
          <p className="mt-5 text-center text-xs text-ink-faint">
            You can safely close this window — the transaction keeps running.
          </p>
        )}
      </div>
    </div>
  );
}
