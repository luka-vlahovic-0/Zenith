import ChoosePath from "@/components/SoloStakerComponents/ChoosePath";
import Criteria from "@/components/SoloStakerComponents/Criteria";
import GetStarted from "@/components/SoloStakerComponents/GetStarted";
import SoloOperator from "@/components/SoloStakerComponents/SoloOperator";
import Header from "@/components/SoloStakerComponents/SoloStakeHeader";

export const metadata = {
  title: "zenith.fi | Operation Solo Staker",
  description:
    "Run your own Ethereum node with zenith.fi. Strengthen network decentralization, earn rewards, and join a global network of solo stakers.",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function SoloStakerPage() {
  return (
    <>
      <Header />
      <SoloOperator />
      <ChoosePath />
      <Criteria />
      <GetStarted />
    </>
  );
}
