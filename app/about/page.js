import AboutHeader from "@/components/AboutComponents/AboutHeader";
import JoinUs from "@/components/AboutComponents/JoinUs";
import Mission from "@/components/AboutComponents/Mission";
import Security from "@/components/AboutComponents/Security";
import StakeWithZenith from "@/components/AboutComponents/StakeWithZenith";

export const metadata = {
  title: "Zenith.fi | Staking Made Simple",
  description:
    "Discover Zenith.fi, a dedicated platform empowering users in the crypto space. Our mission is to simplify staking, liquidity, and node management while providing expert insights and support. Join us in shaping the future of DeFi!",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function page() {
  return (
    <>
      <div className="mt-12">
        <AboutHeader />
        <Security />
        <Mission />
        <StakeWithZenith />
        <JoinUs />
      </div>
    </>
  );
}
