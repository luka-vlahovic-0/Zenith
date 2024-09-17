import Image from "next/image";
import zenithLiquidEmpty from "../../public/assets/zeth-liquid.png";
import performanceImg from "../../public/assets/zenith-performance.png";
import Link from "next/link";

export default function Liquid() {
  return (
    <div
      id="LIQUID"
      className="bg-[#0e0a31] rounded-xl px-4 sm:px-6 lg:px-8 py-8 max-w-xl lg:max-w-7xl mx-auto h-full"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src={zenithLiquidEmpty}
          alt="Zenith Liquid"
          className="mt-4 mb-2 w-20 h-20 sm:w-24 sm:h-24"
        />
        <h1 className="text-white text-2xl sm:text-3xl">Liquid</h1>
        <p className="text-[#e0caff] text-base sm:text-lg">
          Automate your earnings with ease
        </p>
      </div>
      <div className="flex flex-col items-center justify-center my-6 sm:my-8">
        <span className="text-white text-lg sm:text-2xl text-center">
          Liquid vaults find yields so you don’t have to.
        </span>
        <span className="text-white text-lg sm:text-2xl text-center">
          Earn more, without more effort.
        </span>
        <span className="text-[#dad5df] text-sm sm:text-lg my-4 text-center">
          Deposit eETH, ETH, USDC, or other assets for ultimate convenience.
          Vaults find yields across DeFi.
        </span>
        <Image
          src={performanceImg}
          alt="Zenith Performance"
          className="h-[200px] sm:h-[365px] w-full sm:w-[542px] mt-5"
        />
        <Link href="/liquidity">
          <button className="mt-8 sm:mt-10 text-xl sm:text-2xl w-64 sm:w-72 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
            Deposit Now
          </button>
        </Link>
      </div>
    </div>
  );
}
