import Link from "next/link";

function YieldChart() {
  return (
    <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full min-w-0" aria-hidden="true">
      <defs>
        <linearGradient id="liquid-area" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="liquid-line" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38e8ff" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>

      {/* grid */}
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}

      {/* area */}
      <path
        d="M0 95 C30 90 45 70 70 74 C95 78 110 52 140 48 C170 44 185 58 210 40 C230 26 250 22 280 12 L280 120 L0 120 Z"
        fill="url(#liquid-area)"
      />
      {/* line */}
      <path
        className="draw-path"
        style={{ "--path-length": 340 }}
        d="M0 95 C30 90 45 70 70 74 C95 78 110 52 140 48 C170 44 185 58 210 40 C230 26 250 22 280 12"
        stroke="url(#liquid-line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="280" cy="12" r="4" fill="#f472b6" className="animate-pulse-glow" />
    </svg>
  );
}

export default function Liquid() {
  return (
    <div className="glass glass-hover group flex h-full flex-col p-6 sm:p-8">
      <span className="font-display text-xs font-medium uppercase tracking-[0.25em] text-zen-violet">
        Liquid
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold text-ink">
        Vaults that hunt yield for you
      </h3>
      <p className="mt-3 leading-relaxed text-ink-muted">
        Deposit zETH, ETH, or USDC and let strategy vaults optimize across the
        best protocols in DeFi. Earn more, without more effort.
      </p>

      <div className="mt-8 flex flex-1 items-end">
        <YieldChart />
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6">
        <div>
          <p className="font-display text-2xl font-bold text-ink">8.74%</p>
          <p className="text-xs uppercase tracking-widest text-ink-faint">Vault APY</p>
        </div>
        <Link
          href="/liquidity"
          className="btn-ghost !px-5 !py-2 text-sm group-hover:border-zen-violet/60 group-hover:text-zen-violet"
        >
          Deposit →
        </Link>
      </div>
    </div>
  );
}
