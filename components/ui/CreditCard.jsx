import Logo from "@/components/ui/Logo";

/**
 * Pure-CSS zenith Cash credit card with an animated shine sweep.
 */
export default function CreditCard({ className = "", float = true }) {
  return (
    <div
      className={`relative aspect-[8/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 shadow-card ${
        float ? "animate-float-slow" : ""
      } ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #0d1130 0%, #171a45 45%, #241a52 70%, #12305a 100%)",
      }}
      aria-label="zenith.fi Cash credit card"
    >
      {/* aurora sheen */}
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(56,232,255,0.6), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(244,114,182,0.5), transparent 70%)" }}
      />

      {/* shine sweep */}
      <div
        className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{ animation: "card-shine 5s ease-in-out infinite" }}
      />

      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Logo size={28} />
            <span className="font-display text-lg font-semibold text-white">
              zenith<span className="text-zen-cyan">.fi</span>
            </span>
          </div>
          <span className="font-display text-xs uppercase tracking-[0.3em] text-white/60">
            Cash
          </span>
        </div>

        {/* chip */}
        <div className="h-8 w-11 rounded-md border border-yellow-200/40 bg-gradient-to-br from-yellow-200/80 to-yellow-500/70">
          <div className="mx-auto mt-[9px] h-px w-7 bg-yellow-900/40" />
          <div className="mx-auto mt-[5px] h-px w-7 bg-yellow-900/40" />
        </div>

        <div>
          <p className="font-display text-lg tracking-[0.28em] text-white/90 md:text-xl">
            5391&nbsp;&nbsp;2114&nbsp;&nbsp;8890&nbsp;&nbsp;1618
          </p>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/50">Card holder</p>
              <p className="font-display text-sm text-white/90">ZETH MAXIMALIST</p>
            </div>
            <div className="flex items-center">
              <span className="-mr-2 inline-block h-7 w-7 rounded-full bg-[#eb001b]/90" />
              <span className="inline-block h-7 w-7 rounded-full bg-[#f79e1b]/90 mix-blend-screen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
