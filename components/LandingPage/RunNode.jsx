import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const stroke = { strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const PATHS = [
  {
    tag: "Path 1 · Permissionless",
    title: "Bring your hardware + 2 ETH bond",
    color: "#38e8ff",
    desc: "Already have staking hardware? Put up a 2 ETH bond and run a validator with DVT — fully permissionless, securing Ethereum from day one.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="6" rx="2" {...stroke} />
        <rect x="3" y="13" width="18" height="6" rx="2" {...stroke} />
        <path d="M7 8h.01M7 16h.01M11 8h4M11 16h4" {...stroke} />
      </>
    ),
  },
  {
    tag: "Path 2 · Operation Solo Staker",
    title: "No bond — we provide the ETH",
    color: "#f472b6",
    desc: "Commit to operating a node for 2 years and zenith.fi onboards you into a permissioned environment: solo stake with DVT, zero ETH bond required.",
    icon: (
      <>
        <path d="M8 13c-2.8 0-5 2-5 4.5V19h10v-1.5C13 15 10.8 13 8 13Z" {...stroke} />
        <circle cx="8" cy="8" r="3" {...stroke} />
        <path d="m15 8 2 2 4-4" {...stroke} />
      </>
    ),
  },
];

export default function RunNode() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-6 pb-8 md:px-8">
      <div className="glass relative overflow-hidden p-8 md:p-14">
        {/* backdrop glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #8b7cf6, transparent 70%)" }}
        />

        <Reveal>
          <span className="eyebrow">Become a validator</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Want to run a <span className="text-aurora">zenith.fi</span> node?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            We want Ethereum to be truly decentralized — so we built two ways
            for <span className="text-zen-cyan">anyone</span> to run a node.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PATHS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 150}>
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-void/40 p-8 transition-all duration-500 hover:border-white/[0.18] hover:bg-void/60">
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
                    className="font-display text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: p.color }}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Link href="/solo-staker" className="btn-aurora text-lg">
            Become a Solo Staker
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
