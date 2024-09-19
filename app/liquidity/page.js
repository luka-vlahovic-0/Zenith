import Liquidity from '@/components/LiquidityComponents/Liquidity'

export const metadata = {
  title: "Zenith.fi | Staking Made Simple",
  description:
    "Add liquidity on Zenith.fi and earn rewards while supporting the crypto ecosystem. Join now to enhance trading efficiency and maximize your crypto assets!",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function page() {
  return (
    <>
        <Liquidity />
    </>
  )
}
