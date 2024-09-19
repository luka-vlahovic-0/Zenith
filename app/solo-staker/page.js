import ChoosePath from "@/components/SoloStakerComponents/ChoosePath";
import Criteria from "@/components/SoloStakerComponents/Criteria";
import GetStarted from "@/components/SoloStakerComponents/GetStarted";
import SoloOperator from "@/components/SoloStakerComponents/SoloOperator";
import Header from "@/components/SoloStakerComponents/SoloStakeHeader";

export const metadata = {
  title: "Zenith.fi | Staking Made Simple",
  description:
    "Empower your crypto journey by running your own node with Zenith.fi. Run your own node on Zenith.fi to enhance network security and earn rewards.",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function page() {
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
