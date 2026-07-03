import Reveal from "@/components/ui/Reveal";

const stroke = { strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    title: "Native restaking",
    color: "#38e8ff",
    desc: (
      <>
        Your ETH earns staking yield and restaking yield at the same time via{" "}
        <a
          href="https://www.eigenlayer.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zen-cyan underline decoration-zen-cyan/40 underline-offset-4 hover:decoration-zen-cyan"
        >
          EigenLayer
        </a>
        . More freedom, better rewards.
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
    title: "Decentralization",
    color: "#8b7cf6",
    desc: "Operation Solo Staker launches nodes across diverse geographies, making Ethereum stronger with every validator.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" {...stroke} />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" {...stroke} />
      </>
    ),
  },
  {
    title: "Your keys, your coins",
    color: "#2dd4bf",
    desc: "The only protocol where stakers control the keys — slashing counterparty risk from node operators and the protocol itself.",
    icon: (
      <>
        <circle cx="8" cy="15" r="4.5" {...stroke} />
        <path d="m11.5 11.5 8-8M16 7l3 3M13.5 9.5l2 2" {...stroke} />
      </>
    ),
  },
  {
    title: "Thriving ecosystem",
    color: "#f472b6",
    desc: "zETH is built for DeFi. A growing web of partner protocols keeps unlocking new utility for your restaked ETH.",
    icon: (
      <>
        <circle cx="12" cy="12" r="2.5" {...stroke} />
        <circle cx="5" cy="6" r="1.8" {...stroke} />
        <circle cx="19" cy="6" r="1.8" {...stroke} />
        <circle cx="5" cy="18" r="1.8" {...stroke} />
        <circle cx="19" cy="18" r="1.8" {...stroke} />
        <path d="M6.5 7.2 10 10.3m7.5-3.1L14 10.3m-7.5 6.5L10 13.7m7.5 3.1L14 13.7" {...stroke} />
      </>
    ),
  },
];

export default function WhyStakeZenith() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-6 md:px-8">
      <Reveal className="text-center">
        <span className="eyebrow">Why zenith.fi</span>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Built different, <span className="text-aurora">on purpose</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
          Maximize staking and restaking rewards while keeping full
          composability across DeFi.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 110}>
            <div className="glass glass-hover group h-full p-8">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 transition-all duration-500 group-hover:scale-110"
                style={{ background: `${f.color}14` }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={f.color} aria-hidden="true">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
