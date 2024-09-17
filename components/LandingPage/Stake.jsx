import Image from "next/image";
import zenithEmptyImg from "../../public/assets/zeth-empty.png";
import ethImg from "../../public/assets/eth-icon.png";
import zethColoredImg from "../../public/assets/zeth-icon-colored.png";
import Link from "next/link";

export default function Stake() {
  return (
    <div
      id="STAKE"
      className="bg-[#0e0a31] rounded-xl px-4 py-8 max-w-xl lg:max-w-7xl mx-auto h-full"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src={zenithEmptyImg}
          alt="Zenith Empty"
          className="mt-4 mb-2 w-20 h-20 sm:w-24 sm:h-24"
        />
        <h1 className="text-white text-2xl sm:text-3xl">Stake</h1>
        <p className="text-[#e0caff] text-base sm:text-lg text-center">
          Stake your ETH for additional yields
        </p>
      </div>
      <div className="flex flex-col items-center justify-center my-6 sm:my-8">
        <span className="text-white text-lg sm:text-xl text-center">
          Start by staking ETH, and receive
        </span>
        <span className="text-white text-lg sm:text-xl text-center">
          Natively re-staked zETH for superior rewards.
        </span>
        <div className="flex flex-col md:flex-row items-center justify-center mx-4 my-6 sm:my-8 space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={ethImg}
              alt="ETH"
              className="my-2 sm:my-3 w-14 h-14 sm:w-14 sm:h-14 mb-4"
            />
            <h3 className="text-[#f0e6ff] text-base sm:text-lg">Stake ETH</h3>
            <p className="text-[#bb9be8] text-center text-sm">
              Deposit your ETH or stETH
            </p>
          </div>
          <div className="h-1.5 w-4 lg:h-3 lg:w-8">
            <svg
              width="32"
              height="12"
              viewBox="0 0 75 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <path
                id="Vector 56"
                d="M2 10.5C0.89543 10.5 0 11.3954 0 12.5C0 13.6046 0.895431 14.5 2 14.5L2 10.5ZM75 12.5L55 0.95299L55 24.047L75 12.5ZM2 14.5L57 14.5L57 10.5L2 10.5L2 14.5Z"
                fill="#8381FF"
                fillOpacity="0.6"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={zethColoredImg}
              alt="ETH"
              className="my-2 sm:my-3 w-14 h-14 sm:w-14 sm:h-14 mb-4"
            />
            <h3 className="text-[#f0e6ff] text-base sm:text-lg text-center">
              Get natively re-staked zETH
            </h3>
            <span className="text-[#bb9be8] text-center text-sm">
              Earn staking rewards plus loyalty points
            </span>
          </div>
          <div className="h-1.5 w-4 lg:h-3 lg:w-8">
            <svg
              width="32"
              height="12"
              viewBox="0 0 75 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <path
                id="Vector 56"
                d="M2 10.5C0.89543 10.5 0 11.3954 0 12.5C0 13.6046 0.895431 14.5 2 14.5L2 10.5ZM75 12.5L55 0.95299L55 24.047L75 12.5ZM2 14.5L57 14.5L57 10.5L2 10.5L2 14.5Z"
                fill="#8381FF"
                fillOpacity="0.6"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="relative ml-16 flex items-center justify-center h-14 w-14 lg:h-20 lg:w-20 xl:h-[100px] xl:w-[100px]">
              <div className="absolute top-0 h-full w-full">
                <Image
                  alt="zeth icon"
                  className="w-14 h-14 mt-4"
                  src={zethColoredImg}
                />
              </div>
              <div className="absolute top-0 h-full w-full -translate-x-4">
                <Image
                  alt="zeth icon"
                  className="w-14 h-14 mt-4"
                  src={zethColoredImg}
                />
              </div>
              <div className="absolute top-0 h-full w-full -translate-x-8">
                <Image
                  alt="zeth icon"
                  className="w-14 h-14 mt-4"
                  src={zethColoredImg}
                />
              </div>
            </div>
            <h3 className="text-[#f0e6ff] text-base sm:text-lg text-center md:-mt-4 mt-12">
              Maximize Returns
            </h3>
            <span className="text-[#bb9be8] text-center text-sm">
              Use zETH in DeFi to maximize returns
            </span>
          </div>
        </div>
        <Link href="/stake">
          <button className="mt-8 text-xl sm:text-2xl w-64 sm:w-72 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4  rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
            Stake Now
          </button>
        </Link>
      </div>
    </div>
  );
}
