import Link from "next/link";
import CoinIcon from "@/components/ui/CoinIcon";

export default function Stake() {
  return (
    <div className="glass glass-hover group flex h-full flex-col p-6 sm:p-8">
      <span className="font-display text-xs font-medium uppercase tracking-[0.25em] text-zen-cyan">
        Stake
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold text-ink">
        Stake ETH, get zETH
      </h3>
      <p className="mt-3 leading-relaxed text-ink-muted">
        Deposit ETH and receive natively restaked zETH. Earn staking rewards,
        restaking yield via EigenLayer, and loyalty points — all at once.
      </p>

      {/* animated ETH -> zETH flow */}
      <div className="mt-8 flex flex-1 items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-2">
            <CoinIcon coin="eth" size={52} />
            <span className="text-xs text-ink-muted">ETH</span>
          </div>

          <svg width="72" height="24" viewBox="0 0 72 24" fill="none" aria-hidden="true">
            <path
              className="flow-path"
              d="M2 12 H62"
              stroke="#38e8ff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M60 5 L70 12 L60 19" stroke="#38e8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          <div className="flex flex-col items-center gap-2">
            <CoinIcon
              coin="zeth"
              size={52}
              className="drop-shadow-[0_0_16px_rgba(56,232,255,0.5)]"
            />
            <span className="text-xs text-zen-cyan">zETH</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6">
        <div>
          <p className="font-display text-2xl font-bold text-ink">2.97%</p>
          <p className="text-xs uppercase tracking-widest text-ink-faint">APR + points</p>
        </div>
        <Link
          href="/stake"
          className="btn-ghost !px-5 !py-2 text-sm group-hover:border-zen-cyan/60 group-hover:text-zen-cyan"
        >
          Stake now →
        </Link>
      </div>
    </div>
  );
}
