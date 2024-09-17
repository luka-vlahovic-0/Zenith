"use client";

import Image from "next/image";
import ethCoinImg from "../../public/assets/ethCoin.png";
import StakingRewards from "./StakingRewards";
import zethColoredImg from "../../public/assets/zeth-icon-colored.png";
import ethCoin1Img from "../../public/assets/ethCoin.png";

export default function StakeCard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-full md:max-w-4xl">
          <Image
            src={ethCoin1Img}
            alt="icon"
            className="h-40 w-40  mr-0 md:mr-2 mb-4 md:mb-0"
          />
          <h1 className="text-[#f0e5ff] text-4xl md:text-5xl mr-0 md:mr-8 mb-4 md:mb-0">
            Stake
          </h1>
          <div className="w-px h-32 bg-[#b9b9b9] hidden md:block mr-8"></div>

          <p className="text-[#dad5df] text-lg md:text-xl text-center md:text-left">
            Stake your crypto on zenith.fi and earn passive income with ease.
            Enjoy competitive rewards, secure staking, and seamless integration
            in our user-friendly platform.
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-12 items-center mx-[20px] justify-center rounded-xl md:mx-auto max-w-3xl mt-20 bg-[#0e0a31] p-4 lg:p-8 px-4 lg:px-8">
        <div className="flex flex-row items-center mb-16 mt-8 justify-center py-2 px-4 sm:px-6 md:px-[50px] lg:px-[125px] rounded-xl border border-[#8441dd] hover:border-[#c293ff]">
          <p className="text-[#c293ff] text-xl lg:text-2xl whitespace-nowrap">
            Stake on
          </p>
          <Image
            src={ethCoinImg}
            alt="eth coin"
            className="h-8 w-8 lg:h-10 lg:w-10 mx-2 lg:mx-4"
          />
          <p className="text-xl lg:text-2xl text-[#efedf2] whitespace-nowrap">
            Ethereum
          </p>
        </div>

        <div className="w-full max-w-lg mx-auto mb-4">
          <p className="text-[#e0caff] text-2xl lg:text-3xl mb-2">Stake</p>
          <div className="rounded-xl border border-[#8441dd] hover:border-[#c293ff] bg-[#0e0a31] py-4 lg:py-5 px-4 lg:px-6">
  <div className="flex flex-row items-center w-full justify-between">
   
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      placeholder="0"
      className="bg-transparent text-white text-2xl lg:text-3xl w-[40%] lg:w-[50%] outline-none"
      onInput={(e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
      }}
    />
    
    
    <button className="text-[#8e77ff] text-sm lg:text-md bg-[#3b2a71] px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg mx-2 lg:mx-4 hover:bg-[#6e52fc] whitespace-nowrap">
      MAX
    </button>
    
    
    <div className="flex items-center">
      <Image
        src={ethCoinImg}
        alt="ETH icon"
        className="h-6 w-6 lg:h-8 lg:w-8"
      />
      <span className="text-white text-lg lg:text-2xl ml-2">
        ETH
      </span>
    </div>
  </div>

 
  <div className="flex justify-between mt-4 text-gray-400 text-sm lg:text-base">
    <p>$0.00</p>
    <p>Balance 0.0000</p>
  </div>
</div>

        </div>

        <div className="w-full max-w-lg mx-auto mb-4">
          <p className="text-[#e0caff] text-2xl lg:text-3xl mb-2">Receive</p>
          <div className="rounded-xl border border-[#8441dd] hover:border-[#c293ff] bg-[#0e0a31] py-4 lg:py-5 px-4 lg:px-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-row items-center w-full lg:w-auto">
                <input
                  disabled
                  type="text"
                  placeholder="0"
                  className="bg-transparent text-white text-2xl lg:text-3xl w-full lg:w-auto outline-none cursor-not-allowed"
                />
                <div className="flex items-center ml-4">
                  <Image
                    src={zethColoredImg}
                    alt="ETH icon"
                    className="h-6 w-6 lg:h-8 lg:w-8"
                  />
                  <span className="text-white text-xl lg:text-2xl ml-2 mr-4 lg:mr-8">
                    zETH
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-gray-400 text-sm lg:text-base">
              <p>$0.00</p>
              <p>Balance 0.0000</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-[250px] text-[#c293ff] text-sm lg:text-base">
          <p>Exchange Rate</p>
          <p>1 ETH = 1 zETH</p>
        </div>
        <div
          className="h-[2px] lg:h-[3px] w-full lg:w-[460px] mb-8 mx-auto"
          style={{
            background:
              "linear-gradient(91deg, rgba(159, 98, 242, 0.45) -4%, rgba(95, 237, 235, 0) 120.34%)",
          }}
        ></div>

        <button className="text-xl lg:text-2xl mb-8 w-full lg:w-72 h-12 mt-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
          Stake
        </button>
      </div>

      <StakingRewards />
    </>
  );
}
