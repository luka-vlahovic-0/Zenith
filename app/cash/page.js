import CashMain from "@/components/CashComponents/CashMain";
import CashBack from "@/components/CashComponents/CashBack";

export const metadata = {
  title: "zenith.fi | Cash — The Crypto Credit Card",
  description:
    "Spend your crypto in real life with the zenith.fi Cash credit card. Borrow against zETH, pay gaslessly, and earn cash back on every purchase.",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function CashPage() {
  return (
    <>
      <CashMain />
      <CashBack />
    </>
  );
}
