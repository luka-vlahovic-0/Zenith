"use client";

import Image from "next/image";
import omnisciaImg from "../../public/assets/omniscia.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center py-40 mb-28 mt-0 md:mt-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="px-6 text-center mb-4 text-4xl md:text-[40px] font-medium text-white md:px-0 md:text-56">
            Stake, Earn, Spend.
          </h1>
          <span className="text-[#e0caff] text-[30px] px-2 font-thin max-w-[800px] text-center">
            <span className="text-[#c293ff]">Stake ETH, get zETH</span> - the
            liquid restaking token that rewards you more across DeFi.
          </span>
        </div>
        <div className="mt-10">
          <Link href="/stake">
            <button className="text-2xl w-72 h-12 mt-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
              Stake
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-[930px] mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-row items-center text-white justify-center p-4 custom-bg rounded-lg min-w-[250px]">
            <span className="text-[#bb85ff] mr-6 text-lg">
              Total Value Locked
            </span>
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl">$2.61B</span>
              <span> 1.19M ETH</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center p-4 custom-bg rounded-lg min-w-[250px]">
            <span className="text-[#bb85ff] mr-6 text-lg">Audited by</span>{" "}
            <Image
              src={omnisciaImg}
              alt="omniscia"
              className="h-30 w-24 md:h-16 md:w-52"
            />
          </div>

          <div className="flex flex-col items-center justify-center p-4 custom-bg rounded-lg col-span-1 md:col-span-2">
            <span className="text-[#bb85ff] text-xl">Rewards </span>{" "}
            <div className="grid w-full grid-cols-3 gap-4 lg:grid-cols-7 text-white">
              <div className="flex flex-col-reverse items-center justify-center py-2">
                <p className="text-center text-[15px] font-normal text-text-5">
                  APR
                </p>
                <p className="text-2xl">2.97%</p>
              </div>
              <span className="flex items-center justify-center text-2xl text-text-5">
                +
              </span>
              <div className="flex flex-col-reverse items-center justify-center py-2">
                <p className="text-center text-[15px] font-normal text-text-5">
                  Liquid Vault APY
                </p>
                <p className="text-2xl">8.74%</p>
              </div>
              <span className="hidden items-center justify-center text-2xl text-text-5 lg:flex">
                +
              </span>
              <div className="flex flex-col-reverse items-center justify-center py-2">
                <p className="text-center text-[15px] font-normal text-text-4">
                  Eigenlayer Points
                </p>
                <p className="text-2xl">6.28B</p>
              </div>
              <span className="flex items-center justify-center text-2xl text-text-5">
                +
              </span>
              <div className="flex flex-col-reverse items-center justify-center py-2">
                <p className="text-center text-[15px] font-normal text-text-4">
                  Season 3 Loyalty Points
                </p>
                <p className="text-2xl">3.17T</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-bg {
          background-color: rgba(
            25,
            22,
            59,
            0.93
          ); /* #19163b with 53% opacity */
        }
      `}</style>
    </>
  );
}
