import AboutHeader from "@/components/AboutComponents/AboutHeader";
import JoinUs from "@/components/AboutComponents/JoinUs";
import Mission from "@/components/AboutComponents/Mission";
import Security from "@/components/AboutComponents/Security";
import StakeWithZenith from "@/components/AboutComponents/StakeWithZenith";

export const metadata = {
  title: "zenith.fi | About Us",
  description:
    "Discover zenith.fi — a protocol built on decentralization, sustainability, and ethics. Our mission is to simplify staking, liquidity, and node operation for everyone.",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <Security />
      <Mission />
      <StakeWithZenith />
      <JoinUs />
    </>
  );
}
