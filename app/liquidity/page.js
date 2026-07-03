import Liquidity from "@/components/LiquidityComponents/Liquidity";

export const metadata = {
  title: "zenith.fi | Liquid Vaults",
  description:
    "Deposit into zenith.fi liquid vaults and let automated strategies find the best yields across DeFi. Earn more, without more effort.",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function LiquidityPage() {
  return <Liquidity />;
}
