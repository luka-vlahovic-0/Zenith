import ChoosePath from "@/components/SoloStakerComponents/ChoosePath";
import Criteria from "@/components/SoloStakerComponents/Criteria";
import GetStarted from "@/components/SoloStakerComponents/GetStarted";
import SoloOperator from "@/components/SoloStakerComponents/SoloOperator";
import Header from "@/components/SoloStakerComponents/SoloStakeHeader";

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
