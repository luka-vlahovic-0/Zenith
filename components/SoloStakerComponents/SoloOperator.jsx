import Reveal from "@/components/ui/Reveal";

const BENEFITS = [
  {
    n: "01",
    color: "#38e8ff",
    title: "Decentralization",
    desc: "Validator keys are distributed to diverse operators using DVT, reducing risk and pushing Ethereum toward true decentralization.",
  },
  {
    n: "02",
    color: "#8b7cf6",
    title: "No ETH deposit",
    desc: "On Path 2, Distributed Validator Technology eliminates the ETH bond entirely — zenith.fi provides the stake.",
  },
  {
    n: "03",
    color: "#f472b6",
    title: "Earn rewards",
    desc: "Operators earn rewards for supporting and validating the network — a win for you, stakers, and the whole ecosystem.",
  },
];

export default function SoloOperator() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
      <Reveal className="text-center">
        <span className="eyebrow">Why run a node</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Why be a <span className="text-aurora">solo operator?</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.n} delay={i * 130}>
            <div className="glass glass-hover group relative h-full overflow-hidden p-8">
              <span
                className="pointer-events-none absolute -right-3 -top-6 font-display text-[96px] font-bold opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14]"
                style={{ color: b.color }}
              >
                {b.n}
              </span>
              <span
                className="font-display text-sm font-bold tracking-[0.3em]"
                style={{ color: b.color }}
              >
                {b.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{b.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
