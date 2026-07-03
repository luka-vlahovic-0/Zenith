import Hero from "@/components/LandingPage/Hero.jsx";
import Products from "@/components/LandingPage/Products.jsx";
import RunNode from "@/components/LandingPage/RunNode.jsx";
import WhyStakeZenith from "@/components/LandingPage/WhyStakeZenith.jsx";

export const metadata = {
  title: "zenith.fi | Stake. Earn. Reach the Zenith.",
  description:
    "Join zenith.fi for effortless crypto staking. Stake ETH, receive liquid restaked zETH, earn across DeFi, and spend with the Cash card. Reach the highest point of DeFi.",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <WhyStakeZenith />
      <RunNode />
    </>
  );
}
