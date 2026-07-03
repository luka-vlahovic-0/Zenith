"use client";

import { toast } from "react-toastify";
import CoinIcon from "@/components/ui/CoinIcon";

export default function VaultCard({
  title,
  description,
  tvl,
  apy,
  tag,
  featured = false,
  rewards = [], // [{ coin, label }]
}) {
  return (
    <div
      className={`glass glass-hover group relative overflow-hidden p-7 md:p-8 ${
        featured ? "!border-zen-violet/40" : ""
      }`}
    >
      {featured && (
        <>
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
            style={{ background: "radial-gradient(circle, #8b7cf6, transparent 70%)" }}
          />
          <span className="absolute right-5 top-5 rounded-full border border-zen-violet/40 bg-zen-violet/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-zen-violet">
            Featured
          </span>
        </>
      )}

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          {tag && (
            <span className="font-display text-xs font-medium uppercase tracking-[0.25em] text-zen-cyan">
              {tag}
            </span>
          )}
          <h3 className="mt-2 font-display text-2xl font-bold text-ink">{title}</h3>
          <p className="mt-3 leading-relaxed text-ink-muted">{description}</p>

          {rewards.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2.5">
              {rewards.map((r) => (
                <span
                  key={r.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1.5 pr-3 text-xs text-ink-muted"
                >
                  <CoinIcon coin={r.coin} size={18} />
                  {r.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-8 lg:gap-10">
          <div className="flex gap-8">
            <div className="text-center lg:text-right">
              <p className="font-display text-3xl font-bold text-ink">{tvl}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-faint">TVL</p>
            </div>
            {apy && (
              <div className="text-center lg:text-right">
                <p className="font-display text-3xl font-bold text-aurora">{apy}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-faint">APY</p>
              </div>
            )}
          </div>

          <button
            onClick={() =>
              toast.info("Vault deposits are coming soon — zenith.fi is in demo mode 🌊", {
                position: "bottom-right",
                theme: "dark",
              })
            }
            className="btn-aurora shrink-0 !px-6 !py-2.5 text-sm"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}
