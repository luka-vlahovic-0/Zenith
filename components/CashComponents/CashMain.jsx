import Reveal from "@/components/ui/Reveal";
import CreditCard from "@/components/ui/CreditCard";

function CircuitLines() {
  const stroke = { strokeWidth: 1.5, strokeLinecap: "round", fill: "none" };
  return (
    <svg
      viewBox="0 0 500 400"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="circuit-grad" x1="0" y1="0" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38e8ff" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <g stroke="url(#circuit-grad)">
        <path
          className="draw-path draw-now"
          style={{ "--path-length": 700, "--draw-delay": "0.3s" }}
          d="M20 40 H140 L180 80 V150 L220 190"
          {...stroke}
        />
        <path
          className="draw-path draw-now"
          style={{ "--path-length": 700, "--draw-delay": "0.7s" }}
          d="M480 60 H380 L340 100 V170 L300 210"
          {...stroke}
        />
        <path
          className="draw-path draw-now"
          style={{ "--path-length": 700, "--draw-delay": "1.1s" }}
          d="M30 360 H150 L200 310 V260"
          {...stroke}
        />
        <path
          className="draw-path draw-now"
          style={{ "--path-length": 700, "--draw-delay": "1.5s" }}
          d="M470 350 H360 L310 300 V260"
          {...stroke}
        />
      </g>
      {[
        [20, 40],
        [480, 60],
        [30, 360],
        [470, 350],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#38e8ff" className="animate-pulse-glow" />
      ))}
    </svg>
  );
}

export default function CashMain() {
  return (
    <section className="relative px-6 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">zenith Cash</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl">
              Your crypto,
              <br />
              <span className="text-aurora">spendable anywhere</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0">
              Cash is a truly crypto-native credit card. Buy a coffee at your
              local shop or book your next hotel stay — all with crypto,
              hassle-free. Earn cash back and rewards on every purchase.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Non-custodial", "Gasless", "VISA network", "2% cash back"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-ink-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="relative mx-auto w-full max-w-md">
          <CircuitLines />
          <div className="relative px-6 py-10">
            <CreditCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
