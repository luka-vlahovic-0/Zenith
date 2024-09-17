"use client";

import CashBackCard from "./CashBackCard";
import shoppingCardImg from "../../public/assets/shoppingCart.png";
import vagaImg from "../../public/assets/vaga.png";
import visaImg from "../../public/assets/visa.png";
import keyImg from "../../public/assets/key.png";
import Image from "next/image";
import kartica from "../../public/assets/kartica.png";
import row1 from "../../public/assets/row1.jpg";
import row2 from "../../public/assets/row2.jpg";
import row3 from "../../public/assets/row3.jpg";
import row5 from "../../public/assets/row5.jpg";
import perks from "../../public/assets/perks.png";
import audits from "../../public/assets/audits.png";
import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function CashBack() {
  const isMediumOrAbove = useMediaQuery("(min-width: 768px)"); 

  return (
    <>
      <div className="flex flex-col items-start justify-center mt-16 sm:mt-20 lg:mt-28 w-full max-w-5xl mx-auto px-4 sm:px-0">
        <h3 className="text-[#c293ff] text-2xl sm:text-3xl lg:text-4xl mb-4 text-center">
          Earn Cash Back on all purchases with your zenith.fi Cash credit card!
        </h3>
        <p className="text-[#dad5df] text-base sm:text-lg lg:text-xl mb-2 text-center">
          Cash acts as a spending account that allows you to borrow against and
          spend your zenith.fi balance in the real world. Buy a coffee at your
          local shop or send USDC to a friend.
        </p>
      </div>

      <div className="flex justify-center items-center mt-10 mb-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <CashBackCard
            image={shoppingCardImg}
            header="Spend your crypto IRL"
            description="No need to go through the hassle of banks or expensive transfer fees to use your crypto for real world purchases."
          />
          <CashBackCard
            image={vagaImg}
            header="Crypto as collateral"
            description="Borrow against your crypto to make purchases with your card, and soon, pay your card balance with native yields."
          />
          <CashBackCard
            image={visaImg}
            header="Credit card flexibility"
            description="Unlike pre-loaded cards, Cash is a true credit card. Buy coffee, rent cars, or book hotels, wherever VISA is accepted."
          />
          <CashBackCard
            image={keyImg}
            header="Non-Custodial"
            description="Keep full control of your crypto with on-chain features. Your crypto remains in your custody."
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-16 sm:mt-32 lg:mt-40 mb-16 sm:mb-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div>
            <h3 className="text-[#c293ff] text-xl sm:text-[29px] mb-4">
              Borrow against zETH, Liquid vault LP tokens, and more
              yield-bearing assets
            </h3>
            <p className="text-[#dad5df] text-base sm:text-xl mb-2">
              Instead of spending with USDC directly, you can decide to
              automatically borrow against your yield-bearing assets during
              payment. Your position pays itself off using the yield of your
              collateral, but you can pay it off at any time!
            </p>
          </div>
          <Image src={kartica} alt="Kartica" className="w-full h-auto" />
        </div>
      </div>


      {isMediumOrAbove ? (
      <div className="flex justify-center items-center mt-16 sm:mt-32 lg:mt-40 mb-16 sm:mb-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="">
            <Image src={row1} alt="Spending Information" />
            <Image src={row2} alt="Spending Information" />
            <Image src={row3} alt="Spending Information" />
            <Image src={row5} alt="Spending Information" />
          </div>
          <div className="mt-10">
            <h3 className="text-[#c293ff] text-xl sm:text-[29px] mb-4">
              Cash Back on every purchase.
            </h3>
            <p className="text-[#dad5df] text-base sm:text-xl mb-2">
              Earn Cash Back when you spend on your card every month. Save it up
              or redeem at any time!
            </p>
          </div>
        </div>
      </div>) : (
        <div className="flex justify-center items-center mt-16 sm:mt-32 lg:mt-40 mb-16 sm:mb-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="mt-10">
            <h3 className="text-[#c293ff] text-xl sm:text-[29px] mb-4">
              Cash Back on every purchase.
            </h3>
            <p className="text-[#dad5df] text-base sm:text-xl mb-2">
              Earn Cash Back when you spend on your card every month. Save it up
              or redeem at any time!
            </p>
          </div>
          <div className="">
            <Image src={row1} alt="Spending Information" />
            <Image src={row2} alt="Spending Information" />
            <Image src={row3} alt="Spending Information" />
            <Image src={row5} alt="Spending Information" />
          </div>
        </div>
      </div>
      )}

      <div className="flex justify-center items-center mt-16 sm:mt-32 lg:mt-40 mb-16 sm:mb-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="mt-10">
            <h3 className="text-[#c293ff] text-xl sm:text-[29px] mb-8">
              Perks like no other
            </h3>
            <p className="text-[#dad5df] text-base sm:text-xl mb-8">
              Cash is the only credit card that rewards you for participating in
              DeFi, thanks to the unique partnerships provided by the zenith.fi
              ecosystem.
            </p>
            <p className="text-[#dad5df] text-base sm:text-xl mb-2">
              Exclusive Cash Back provided to card holders.
            </p>
          </div>
          <Image src={perks} alt="Perks" className="w-full h-auto" />
        </div>
      </div>

      {isMediumOrAbove ? (
        <div className="flex justify-center items-center mt-16 sm:mt-32 lg:mt-40 mb-16 sm:mb-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <Image src={audits} alt="Audits" className="w-full h-auto" />
            <div className="mt-10">
              <h3 className="text-[#c293ff] text-xl sm:text-[29px] mb-8">
                Secure, fast, and gasless.
              </h3>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00F17D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-[#dad5df] text-base sm:text-xl mb-6 ml-2">
                  Audited by the best in crypto.
                </p>
              </div>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00F17D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-[#dad5df] text-base sm:text-xl mb-6 ml-2">
                  Smart contract-based wallet technology.
                </p>
              </div>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00F17D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-[#dad5df] text-base sm:text-xl mb-6 ml-2">
                  Don&apos;t pay for gas on any transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-16 sm:mt-32 lg:mt-40 mb-16 sm:mb-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <div className="mt-10">
              <h3 className="text-[#c293ff] text-xl sm:text-[29px] mb-8">
                Secure, fast, and gasless.
              </h3>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00F17D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-[#dad5df] text-base sm:text-xl mb-6 ml-2">
                  Audited by the best in crypto.
                </p>
              </div>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00F17D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-[#dad5df] text-base sm:text-xl mb-6 ml-2">
                  Smart contract-based wallet technology.
                </p>
              </div>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#00F17D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="text-[#dad5df] text-base sm:text-xl mb-6 ml-2">
                  Don&apos;t pay for gas on any transactions with your wallet.
                </p>
              </div>
            </div>
            <Image src={audits} alt="Audits" className="w-full h-auto" />
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center mx-auto mt-16 max-w-5xl px-4 sm:px-0">
        <h3 className="text-[#c293ff] text-3xl sm:text-5xl mb-6 sm:mb-8 mt-10">
          Join the Future of Finance Today
        </h3>
        <p className="text-[#dad5df] text-lg sm:text-2xl mb-4 sm:mb-6">
          Unlock endless possibilities with zenith.fi&apos;s Cash credit card.
          Whether you&apos;re making real-world purchases, borrowing against
          your crypto, or enjoying gasless transactions, Cash empowers you to do
          more with your assets. Stay in control of your funds, enjoy seamless
          DeFi integrations, and earn exclusive rewards.
        </p>
        <p className="text-[#dad5df] text-lg sm:text-2xl mb-6 sm:mb-8">
          Don&apos;t miss out! — experience the ultimate financial freedom with
          zenith.fi Cash. Sign up today and take your first step towards a more
          secure and rewarding future.
        </p>
        <Image src={kartica} className="w-50 h-50 mt-4 mb-10" alt="Kartica" />
      </div>
    </>
  );
}
