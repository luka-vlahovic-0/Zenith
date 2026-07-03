import Reveal from "@/components/ui/Reveal";

const stroke = { strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const PRINCIPLES = [
  {
    color: "#38e8ff",
    title: "Decentralization is a primary objective",
    desc: "We will never compromise the non-custodial, decentralized nature of the protocol. Stakers must maintain control of their ETH.",
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
  {
    color: "#8b7cf6",
    title: "A sustainable revenue model",
    desc: "We're in this for the long haul — we think and plan on the scale of decades. No short-term thinking, no short-term gains.",
    icon: (
      <>
        <path d="M3 21V9m6 12V3m6 18v-8m6 8V7" {...stroke} />
      </>
    ),
  },
  {
    color: "#f472b6",
    title: "Ethics are important",
    desc: "We will do the right thing for the Ethereum community, always. If and when we mess up, we admit it and course-correct — quickly.",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4Z" {...stroke} />
        <path d="M12 8v5M12 16.5v.01" {...stroke} />
      </>
    ),
  },
];

/* The sun's arc across the sky, peaking at its zenith — the highest point. */
function ZenithArc() {
  return (
    <svg
      viewBox="0 0 480 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-md md:max-w-lg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="arc-grad" x1="40" y1="0" x2="440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38e8ff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#8b7cf6" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="horizon-grad" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b7cf6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="zen-sun-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#38e8ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#38e8ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* horizon */}
      <line x1="0" y1="200" x2="480" y2="200" stroke="url(#horizon-grad)" strokeWidth="1.5" />

      {/* the sun's path, drawn from sunrise to sunset */}
      <path
        className="draw-path"
        style={{ "--path-length": 620, "--draw-delay": "0.3s" }}
        d="M40 200 Q 240 20 440 200"
        stroke="url(#arc-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 0"
      />

      {/* ghost suns marking the climb */}
      <circle cx="120" cy="133" r="5" fill="#8b7cf6" fillOpacity="0.3" />
      <circle cx="360" cy="133" r="5" fill="#8b7cf6" fillOpacity="0.3" />

      {/* the zenith — highest point of the arc */}
      <g>
        <circle cx="240" cy="110" r="34" fill="url(#zen-sun-glow)" className="animate-pulse-glow" />
        <circle cx="240" cy="110" r="9" fill="#38e8ff" />
        <g stroke="#38e8ff" strokeWidth="2" strokeLinecap="round" className="animate-pulse-glow">
          <path d="M240 88v-8M240 140v-8M262 110h8M210 110h8" />
          <path d="M256 94l6-6M218 126l6-6M256 126l6 6M218 94l6 6" strokeOpacity="0.6" />
        </g>
      </g>

      {/* label */}
      <text
        x="240"
        y="60"
        textAnchor="middle"
        fill="#94a0c6"
        fontSize="11"
        letterSpacing="4"
        fontFamily="'Space Grotesk', sans-serif"
      >
        THE ZENITH
      </text>
    </svg>
  );
}

export default function AboutHeader() {
  return (
    <section className="relative px-6 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="eyebrow">About zenith.fi</span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-6xl">
            Guided by <span className="text-aurora">three principles</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
            Our principles guide our actions — and we want the Ethereum
            community to hold us accountable for living up to them.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <ZenithArc />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 130}>
              <div className="glass glass-hover group h-full p-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${p.color}14`, color: p.color }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    {p.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
