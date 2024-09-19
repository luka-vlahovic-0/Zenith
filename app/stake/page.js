import StakeCard from "@/components/StakeComponents/StakeCard";

export const metadata = {
  title: "Zenith.fi | Staking Made Simple",
  description:
    "Maximize your crypto potential with Zenith.fi's seamless staking platform. Easily stake popular cryptocurrencies, earn passive income, and benefit from real-time analytics. Join now to enhance your staking experience and watch your assets grow!",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function Stake() {
  return (
    <>
      <StakeCard />
    </>
  );
}
