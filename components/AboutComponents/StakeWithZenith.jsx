import Reveal from "@/components/ui/Reveal";

const stroke = { strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const REASONS = [
  {
    color: "#38e8ff",
    title: "Native restaking",
    desc: (
      <>
        Your ETH earns staking and restaking yield simultaneously via{" "}
        <a
          href="https://www.eigenlayer.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zen-cyan underline decoration-zen-cyan/40 underline-offset-4 hover:decoration-zen-cyan"
        >
          EigenLayer
        </a>
        .
      </>
    ),
    icon: (
      <>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" {...stroke} />
        <path d="m3 12 9 5 9-5" {...stroke} />
        <path d="m3 16 9 5 9-5" {...stroke} />
      </>
    ),
  },
  {
    color: "#8b7cf6",
    title: "Decentralization",
    desc: "Operation Solo Staker launches nodes across diverse geographies, further decentralizing Ethereum.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" {...stroke} />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" {...stroke} />
      </>
    ),
  },
  {
    color: "#2dd4bf",
    title: "Your keys, your coins",
    desc: "The only protocol where stakers control the keys — reducing counterparty risk across the board.",
    icon: (
      <>
        <circle cx="8" cy="15" r="4.5" {...stroke} />
        <path d="m11.5 11.5 8-8M16 7l3 3M13.5 9.5l2 2" {...stroke} />
      </>
    ),
  },
  {
    color: "#f472b6",
    title: "Thriving ecosystem",
    desc: "zETH is built for DeFi — a growing web of partner protocols keeps expanding its utility.",
    icon: (
      <>
        <path d="m12 3 2.4 4.9 5.6.8-4 3.9.9 5.4L12 15.5 7.1 18l.9-5.4-4-3.9 5.6-.8L12 3Z" {...stroke} />
      </>
    ),
  },
];

export default function StakeWithZenith() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
      <Reveal className="text-center">
        <span className="eyebrow">Stake with zenith.fi</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Rewards without <span className="text-aurora">compromise</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
          Maximize staking and restaking rewards while keeping full
          composability for DeFi applications.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={i * 110}>
            <div className="glass glass-hover group h-full p-7">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${r.color}14`, color: r.color }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  {r.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
