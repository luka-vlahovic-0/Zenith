import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import CoinOrbit from "./CoinOrbit";

const STATS = [
  { label: "Total Value Locked", end: 2.61, decimals: 2, prefix: "$", suffix: "B" },
  { label: "ETH Staked", end: 1.19, decimals: 2, suffix: "M" },
  { label: "Staking APR", end: 2.97, decimals: 2, suffix: "%" },
  { label: "Liquid Vault APY", end: 8.74, decimals: 2, suffix: "%" },
];

function SummitRidge() {
  return (
    <svg
      viewBox="0 0 1440 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ridge-grad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38e8ff" stopOpacity="0" />
          <stop offset="30%" stopColor="#38e8ff" />
          <stop offset="55%" stopColor="#8b7cf6" />
          <stop offset="80%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="draw-path"
        style={{ "--path-length": 2200 }}
        d="M0 150 L180 110 L320 140 L520 60 L640 120 L790 30 L920 105 L1080 70 L1240 130 L1440 95"
        stroke="url(#ridge-grad)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* zenith star on the highest peak */}
      <circle cx="790" cy="30" r="4" fill="#38e8ff" className="animate-pulse-glow" />
      <circle cx="790" cy="30" r="10" stroke="#38e8ff" strokeOpacity="0.35" className="animate-pulse-glow" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-8 lg:grid-cols-2">
        {/* copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">Liquid restaking protocol</span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
              Stake. Earn.
              <br />
              <span className="text-aurora">Reach the zenith.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0">
              Stake ETH and receive <span className="text-zen-cyan">zETH</span> — the
              liquid restaking token that keeps earning across all of DeFi while
              you sleep, spend, and explore.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/stake" className="btn-aurora w-full text-lg sm:w-auto">
                Start Staking
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/liquidity" className="btn-ghost w-full text-lg sm:w-auto">
                Explore Vaults
              </Link>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-faint lg:justify-start">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" stroke="#2dd4bf" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="m8.5 12 2.5 2.5 4.5-5" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Audited by Omniscia · Non-custodial · Your keys, your coins
            </p>
          </Reveal>
        </div>

        {/* coin orbit animation */}
        <Reveal delay={250} className="mx-auto w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[520px]">
          <CoinOrbit />
        </Reveal>
      </div>

      {/* stats */}
      <div className="mx-auto mt-20 max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="glass glass-hover px-6 py-6 text-center">
                <p className="font-display text-3xl font-bold text-ink md:text-4xl">
                  <CountUp {...s} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* summit ridge svg draw */}
      <Reveal className="mt-16">
        <SummitRidge />
      </Reveal>
    </section>
  );
}
