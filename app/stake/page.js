import StakeCard from "@/components/StakeComponents/StakeCard";

export const metadata = {
  title: "zenith.fi | Stake ETH, Get zETH",
  description:
    "Stake ETH on zenith.fi and receive natively restaked zETH. Earn staking rewards, restaking yield, and loyalty points — all from a single deposit.",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function Stake() {
  return <StakeCard />;
}
