import Reveal from "@/components/ui/Reveal";

const stroke = { strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const PATHS = [
  {
    tag: "Path 1",
    color: "#38e8ff",
    title: "Permissionless + 2 ETH bond",
    description:
      "For users with existing staking hardware willing to put up a 2 ETH bond. Fully permissionless, with DVT, securing and validating Ethereum from day one.",
    zenith: "Provides 30 ETH, software, and technical support.",
    you: "Provide the hardware and internet connection, plus a 2 ETH bond.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="6" rx="2" {...stroke} />
        <rect x="3" y="13" width="18" height="6" rx="2" {...stroke} />
        <path d="M7 8h.01M7 16h.01M11 8h4M11 16h4" {...stroke} />
      </>
    ),
  },
  {
    tag: "Path 2",
    color: "#f472b6",
    title: "Permissioned, zero bond",
    description:
      "Operation Solo Staker: commit to operating a node for 2 years and get onboarded into a permissioned environment — solo stake with DVT, no 2 ETH bond required.",
    zenith: "Provides the ETH, software, and technical support.",
    you: "Provide the internet connection and hardware. No bond required.",
    icon: (
      <>
        <path d="M8 13c-2.8 0-5 2-5 4.5V19h10v-1.5C13 15 10.8 13 8 13Z" {...stroke} />
        <circle cx="8" cy="8" r="3" {...stroke} />
        <path d="m15 8 2 2 4-4" {...stroke} />
      </>
    ),
  },
];

export default function ChoosePath() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
      <Reveal className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Choose your <span className="text-aurora">path</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PATHS.map((p, i) => (
          <Reveal key={p.tag} delay={i * 150}>
            <div className="glass glass-hover group flex h-full flex-col p-8">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${p.color}14` }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={p.color} aria-hidden="true">
                    {p.icon}
                  </svg>
                </div>
                <span
                  className="font-display text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: p.color }}
                >
                  {p.tag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{p.description}</p>

              <div className="mt-6 grid grid-cols-2 divide-x divide-white/[0.08] rounded-xl border border-white/[0.08] bg-void/40">
                <div className="p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-zen-cyan">
                    zenith.fi
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">{p.zenith}</p>
                </div>
                <div className="p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink">
                    You
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">{p.you}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
