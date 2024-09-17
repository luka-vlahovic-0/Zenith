import AboutHeader from "@/components/AboutComponents/AboutHeader";
import JoinUs from "@/components/AboutComponents/JoinUs";
import Mission from "@/components/AboutComponents/Mission";
import Security from "@/components/AboutComponents/Security";
import StakeWithZenith from "@/components/AboutComponents/StakeWithZenith";

export default function page() {
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
