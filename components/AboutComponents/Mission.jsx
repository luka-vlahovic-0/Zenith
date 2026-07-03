import Reveal from "@/components/ui/Reveal";

function AscentGraphic() {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-[320px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ascent-grad" x1="0" y1="240" x2="320" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38e8ff" />
          <stop offset="60%" stopColor="#8b7cf6" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      {/* ascending path to the zenith */}
      <path
        className="draw-path"
        style={{ "--path-length": 500 }}
        d="M20 210 L90 160 L70 120 L150 90 L135 60 L230 55 L290 25"
        stroke="url(#ascent-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* waypoints */}
      {[
        [20, 210],
        [90, 160],
        [70, 120],
        [150, 90],
        [135, 60],
        [230, 55],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#8b7cf6" />
      ))}
      {/* zenith star */}
      <g className="animate-pulse-glow">
        <circle cx="290" cy="25" r="5" fill="#38e8ff" />
        <path d="M290 10v6M290 34v6M275 25h6M299 25h6" stroke="#38e8ff" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function Mission() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <AscentGraphic />
        </Reveal>
        <Reveal delay={150} className="order-1 lg:order-2">
          <span className="eyebrow">Our mission</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Climb higher, <span className="text-aurora">together</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Our mission is to empower users to maximize their staking rewards
            while contributing to the decentralization and security of the
            blockchain ecosystem. We are building a platform that is
            sustainable and aligned with the core values of decentralization,
            trustlessness, and open finance — reshaping the future of staking
            on security, integrity, and innovation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
