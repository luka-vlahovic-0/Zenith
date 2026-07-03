import Reveal from "@/components/ui/Reveal";

const NODES = [
  { x: 200, y: 95 },
  { x: 118, y: 160 },
  { x: 282, y: 150 },
  { x: 160, y: 250 },
  { x: 255, y: 235 },
  { x: 200, y: 180 },
];

const LINKS = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [0, 2],
  [1, 3],
  [2, 4],
];

function NetworkGlobe() {
  return (
    <svg
      viewBox="0 0 400 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-lg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="globe-grad" x1="0" y1="0" x2="400" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38e8ff" />
          <stop offset="100%" stopColor="#8b7cf6" />
        </linearGradient>
        <radialGradient id="globe-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* glow */}
      <circle cx="200" cy="180" r="170" fill="url(#globe-glow)" />

      {/* globe wireframe */}
      <g stroke="url(#globe-grad)" strokeOpacity="0.35" strokeWidth="1.2">
        <circle cx="200" cy="180" r="140" />
        <ellipse cx="200" cy="180" rx="140" ry="52" />
        <ellipse cx="200" cy="180" rx="140" ry="100" />
        <ellipse cx="200" cy="180" rx="52" ry="140" />
        <ellipse cx="200" cy="180" rx="100" ry="140" />
        <line x1="60" y1="180" x2="340" y2="180" />
      </g>

      {/* validator links — drawn in, then flowing */}
      <g>
        {LINKS.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          const mx = (A.x + B.x) / 2;
          const my = (A.y + B.y) / 2 - 22;
          return (
            <path
              key={i}
              className="draw-path"
              style={{ "--path-length": 260, "--draw-delay": `${0.25 + i * 0.18}s` }}
              d={`M${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`}
              stroke="url(#globe-grad)"
              strokeWidth="1.4"
              strokeOpacity="0.8"
            />
          );
        })}
      </g>

      {/* validator nodes */}
      {NODES.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="10"
            fill="#38e8ff"
            fillOpacity="0.12"
            className="animate-pulse-glow"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          <circle cx={n.x} cy={n.y} r="4" fill={i === 5 ? "#f472b6" : "#38e8ff"} />
        </g>
      ))}
    </svg>
  );
}

export default function Header() {
  return (
    <section className="relative px-6 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">Operation Solo Staker</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl">
              Run a node.
              <br />
              <span className="text-aurora">Strengthen Ethereum.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0">
              Enabling <span className="text-zen-cyan">anyone</span> to run
              validators, further decentralizing the Ethereum network — one
              solo staker at a time, across the whole globe.
            </p>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <NetworkGlobe />
        </Reveal>
      </div>
    </section>
  );
}
