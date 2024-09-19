import CashBack from '@/components/CashComponents/CashBack'
import CashMain from '@/components/CashComponents/CashMain'
import React from 'react'

export const metadata = {
  title: "Zenith.fi | Staking Made Simple",
  description:
    "Easily buy crypto with fiat cash on Zenith.fi. Enjoy a seamless purchasing experience and start your cryptocurrency journey today!",
  icons: {
    icon: "/assets/ethlogo.png",
  },
};

export default function page() {
  return (
    <>
      <CashMain />
      <CashBack />
    </>
  )
}
