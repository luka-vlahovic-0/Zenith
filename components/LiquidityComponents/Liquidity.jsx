import Reveal from "@/components/ui/Reveal";
import VaultCard from "./VaultCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LiquidWaves() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 opacity-60" aria-hidden="true">
      <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="wave-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38e8ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#38e8ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38e8ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8b7cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b7cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b7cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-3" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0" />
            <stop offset="50%" stopColor="#f472b6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="draw-path draw-now"
          style={{ "--path-length": 1600, "--draw-delay": "0.1s" }}
          d="M0 160 C 180 100, 360 220, 540 160 C 720 100, 900 220, 1080 160 C 1260 100, 1350 190, 1440 160"
          stroke="url(#wave-1)"
          strokeWidth="2"
        />
        <path
          className="draw-path draw-now"
          style={{ "--path-length": 1600, "--draw-delay": "0.45s" }}
          d="M0 200 C 180 140, 360 260, 540 200 C 720 140, 900 260, 1080 200 C 1260 140, 1350 230, 1440 200"
          stroke="url(#wave-2)"
          strokeWidth="2"
        />
        <path
          className="draw-path draw-now"
          style={{ "--path-length": 1600, "--draw-delay": "0.8s" }}
          d="M0 240 C 180 180, 360 300, 540 240 C 720 180, 900 300, 1080 240 C 1260 180, 1350 270, 1440 240"
          stroke="url(#wave-3)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default function Liquidity() {
  return (
    <section className="relative px-4 pt-32 md:px-8 md:pt-36">
      <LiquidWaves />

      {/* header */}
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Liquid vaults</span>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Yield that <span className="text-aurora">flows to you</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
          Deposit assets and let strategy vaults optimize across the very best
          protocols in DeFi. Automated, rebalanced, relentless.
        </p>
      </Reveal>

      <div className="mx-auto mt-24 max-w-6xl">
        {/* featured */}
        <Reveal>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-zen-violet">
            Featured
          </h2>
          <div className="mt-2 h-px w-48 bg-gradient-to-r from-zen-violet to-transparent" />
        </Reveal>

        <div className="mt-8 space-y-6">
          <Reveal delay={100}>
            <VaultCard
              featured
              tag="Stables"
              title="Elixir Stable Vault"
              description="The best way to participate in the Elixir ecosystem. Earn Elixir Potions, Veda points, and zenith.fi loyalty points on your stablecoins."
              tvl="$7.3M"
              rewards={[
                { coin: "usdc", label: "5x Potions" },
                { coin: "zeth", label: "3x zenith points" },
                { coin: "dai", label: "3x Veda" },
              ]}
            />
          </Reveal>
          <Reveal delay={200}>
            <VaultCard
              featured
              tag="Stables"
              title="Usual Stable Vault"
              description="The best way to participate in the Usual ecosystem. Earn Usual Pills, Veda, and zenith.fi points. Strategy managed by MEV Capital."
              tvl="$8.0M"
              rewards={[
                { coin: "usdc", label: "3x Pills" },
                { coin: "zeth", label: "3x zenith points" },
                { coin: "dai", label: "3x Veda" },
              ]}
            />
          </Reveal>
        </div>

        {/* strategy vaults */}
        <Reveal className="mt-20">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-zen-cyan">
            Strategy vaults
          </h2>
          <div className="mt-2 h-px w-48 bg-gradient-to-r from-zen-cyan to-transparent" />
        </Reveal>

        <div className="mt-8 space-y-6 pb-10">
          <Reveal delay={100}>
            <VaultCard
              tag="ETH strategy"
              title="Liquid ETH Yield"
              description="Maximize ETH yield through combined fixed and variable positions in Pendle PT, Uniswap V3, and more across DeFi — while earning zenith.fi loyalty points on the full vault TVL."
              tvl="$273.6M"
              apy="6.3%"
              rewards={[
                { coin: "zeth", label: "3x zenith points" },
                { coin: "eth", label: "EigenLayer varies" },
              ]}
            />
          </Reveal>
          <Reveal delay={200}>
            <VaultCard
              tag="USD strategy"
              title="Market-Neutral USD"
              description="Market-neutral exposure on USDC, DAI, USDT, and USDe across Aave, Compound, Uniswap V3, and more — steady yield without directional risk."
              tvl="$78.2M"
              apy="4.3%"
              rewards={[
                { coin: "zeth", label: "2.5x zenith points" },
                { coin: "eth", label: "EigenLayer varies" },
              ]}
            />
          </Reveal>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
