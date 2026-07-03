import CoinIcon from "@/components/ui/CoinIcon";
import Logo from "@/components/ui/Logo";

/**
 * Pure-CSS animated solar system of crypto coins orbiting the zenith mark.
 * Each coin sits on a rotating ring and counter-rotates to stay upright.
 */
const RINGS = [
  {
    inset: "27%",
    duration: 22,
    reverse: false,
    coins: [
      { coin: "eth", size: 38, delay: 0 },
      { coin: "usdc", size: 30, delay: -11 },
    ],
  },
  {
    inset: "13%",
    duration: 34,
    reverse: true,
    coins: [
      { coin: "btc", size: 36, delay: 0 },
      { coin: "zeth", size: 34, delay: -12 },
      { coin: "sol", size: 28, delay: -24 },
    ],
  },
  {
    inset: "0%",
    duration: 48,
    reverse: false,
    coins: [
      { coin: "dai", size: 30, delay: -6 },
      { coin: "eth", size: 26, delay: -22 },
      { coin: "usdc", size: 24, delay: -38 },
    ],
  },
];

function OrbitingCoin({ ring, coin }) {
  const dir = ring.reverse ? "orbit-rev" : "orbit";
  const counter = ring.reverse ? "orbit" : "orbit-rev";
  return (
    <div
      className="absolute rounded-full"
      style={{
        inset: ring.inset,
        animation: `${dir} ${ring.duration}s linear infinite`,
        animationDelay: `${coin.delay}s`,
      }}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div
          style={{
            animation: `${counter} ${ring.duration}s linear infinite`,
            animationDelay: `${coin.delay}s`,
          }}
        >
          <CoinIcon
            coin={coin.coin}
            size={coin.size}
            className="drop-shadow-[0_0_12px_rgba(139,124,246,0.45)]"
          />
        </div>
      </div>
    </div>
  );
}

export default function CoinOrbit({ className = "" }) {
  return (
    <div className={`relative aspect-square w-full select-none ${className}`} aria-hidden="true">
      {/* rings */}
      {RINGS.map((ring, i) => (
        <div
          key={`ring-${i}`}
          className="absolute rounded-full border border-white/[0.08]"
          style={{
            inset: ring.inset,
            boxShadow: "inset 0 0 40px rgba(139,124,246,0.06)",
          }}
        />
      ))}

      {/* orbiting coins */}
      {RINGS.map((ring, i) =>
        ring.coins.map((coin, j) => (
          <OrbitingCoin key={`coin-${i}-${j}`} ring={ring} coin={coin} />
        ))
      )}

      {/* core */}
      <div className="absolute inset-[38%] flex items-center justify-center">
        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-aurora opacity-30 blur-2xl" />
        <div className="glass relative flex h-full w-full items-center justify-center rounded-full !border-white/[0.14]">
          <Logo size={56} />
        </div>
      </div>
    </div>
  );
}
