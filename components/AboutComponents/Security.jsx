import Reveal from "@/components/ui/Reveal";

function ShieldGraphic() {
  return (
    <svg
      viewBox="0 0 240 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-[260px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shield-grad" x1="0" y1="0" x2="240" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38e8ff" />
          <stop offset="100%" stopColor="#8b7cf6" />
        </linearGradient>
      </defs>
      {/* outer pulse rings */}
      <circle cx="120" cy="126" r="105" stroke="#8b7cf6" strokeOpacity="0.15" className="animate-pulse-glow" />
      <circle cx="120" cy="126" r="85" stroke="#38e8ff" strokeOpacity="0.15" className="animate-pulse-glow" style={{ animationDelay: "-2s" }} />
      {/* shield */}
      <path
        className="draw-path"
        style={{ "--path-length": 700 }}
        d="M120 30 50 62v56c0 46 30 78 70 92 40-14 70-46 70-92V62l-70-32Z"
        stroke="url(#shield-grad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="rgba(139,124,246,0.06)"
      />
      <path
        className="draw-path"
        style={{ "--path-length": 120, "--draw-delay": "1.6s" }}
        d="m92 126 20 20 38-42"
        stroke="#2dd4bf"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Security() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
      <div className="glass grid items-center gap-10 overflow-hidden p-8 md:p-12 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <span className="eyebrow">Security first</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Security is our top priority
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Industry-leading encryption and multi-layer security keep your
            funds protected. The platform is non-custodial — you remain in full
            control of your private keys — and our smart contracts are
            continuously audited to maintain the highest level of trust and
            transparency.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {["Continuous audits", "Non-custodial", "Multi-layer security", "Open source"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-zen-teal/30 bg-zen-teal/10 px-4 py-1.5 text-sm text-zen-teal"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="w-full lg:w-[300px]">
          <ShieldGraphic />
        </Reveal>
      </div>
    </section>
  );
}
