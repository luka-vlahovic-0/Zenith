import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import CoinIcon from "@/components/ui/CoinIcon";

const STATS = [
  { label: "Staking APR", end: 2.96, decimals: 2, suffix: "%" },
  { label: "Protocol TVL", end: 5.28, decimals: 2, prefix: "$", suffix: "B" },
  { label: "Loyalty Points", end: 3.31, decimals: 2, suffix: "T" },
  { label: "EigenLayer Points", end: 6.39, decimals: 2, suffix: "B" },
];

export default function StakingRewards() {
  return (
    <Reveal delay={150} className="mx-auto mt-10 max-w-lg pb-10">
      <div className="glass p-6">
        <div className="flex items-center justify-center gap-2">
          <CoinIcon coin="zeth" size={20} />
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ink-muted">
            zETH staking rewards
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/[0.06] bg-void/40 px-4 py-4 text-center"
            >
              <p className="font-display text-2xl font-bold text-aurora">
                <CountUp {...s} />
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-ink-faint">
          Restaking APR: TBD — points accrue automatically while you hold zETH.
        </p>
      </div>
    </Reveal>
  );
}
