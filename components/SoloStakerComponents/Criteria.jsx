import Reveal from "@/components/ui/Reveal";

const stroke = { strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const CRITERIA = [
  {
    color: "#38e8ff",
    title: "Experience",
    description: "Have staking experience and be technically competent running infrastructure.",
    icon: (
      <>
        <path d="m12 3 2.4 4.9 5.6.8-4 3.9.9 5.4L12 15.5 7.1 18l.9-5.4-4-3.9 5.6-.8L12 3Z" {...stroke} />
      </>
    ),
  },
  {
    color: "#2dd4bf",
    title: "Bandwidth",
    description: "A solid connection: at least 250 Mbps down / 100 Mbps up, with no traffic cap.",
    icon: (
      <>
        <path d="M2.5 9.5a14 14 0 0 1 19 0M5.5 13a9.5 9.5 0 0 1 13 0M8.5 16.5a5 5 0 0 1 7 0" {...stroke} />
        <circle cx="12" cy="19.5" r="1.3" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    color: "#8b7cf6",
    title: "Verified identity",
    description: "Be comfortable verifying your identity with zenith.fi if not providing a 2 ETH bond.",
    icon: (
      <>
        <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" {...stroke} />
        <circle cx="12" cy="12" r="3" {...stroke} />
      </>
    ),
  },
  {
    color: "#f472b6",
    title: "Agree to terms",
    description: "Be willing to sign the program terms and commit to operating your node.",
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" {...stroke} />
        <path d="M14 3v5h5M9 14l2 2 4-4" {...stroke} />
      </>
    ),
  },
];

export default function Criteria() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
      <Reveal>
        <span className="eyebrow">To be a solo node operator</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Criteria
        </h2>
        <p className="mt-3 text-lg text-ink-muted">
          These criteria will relax as the program scales.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CRITERIA.map((c, i) => (
          <Reveal key={c.title} delay={i * 110}>
            <div className="glass glass-hover group h-full p-7">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${c.color}14`, color: c.color }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  {c.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
