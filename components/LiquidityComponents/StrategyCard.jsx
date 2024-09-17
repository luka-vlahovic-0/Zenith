import Image from "next/image";

const StrategyCard = ({
  title,
  description,
  tvl,
  apy,
  multiplier,
  coinIcon1,
  coinIcon2,
  vaultIcon,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-full md:max-w-7xl w-full p-6 mb-4 border border-[#836aff] rounded-xl bg-[#19163b]">
      <div className="flex items-start mb-4 md:mb-0">
        <div className="max-w-full md:max-w-2xl">
          <h2 className="text-2xl mb-2 text-[#f0e5ff] font-bold">{title}</h2>
          <p className="text-[#dad5df]">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:flex-nowrap items-center  bg-[#251841] border-2 border-[#836aff] rounded-lg p-4 mx-0 md:mx-4">
        <div className="flex flex-col items-center mx-2 min-w-[80px] mb-4 md:mb-0">
          <span className="text-[#f0e5ff] text-lg">{tvl}</span>
          <span className="text-[#dad5df] text-sm">TVL</span>
        </div>
        <div className="flex flex-col items-center mx-2 min-w-[80px] mb-4 md:mb-0">
          <span className="text-[#f0e5ff] text-lg">{apy}</span>
          <span className="text-[#dad5df] text-sm">APY</span>
        </div>
        <div className="flex items-center bg-gradient-to-r from-[#1c1c2b] to-[#2a2140] rounded-lg p-2">
          <div className="flex flex-col items-center mx-2">
            <Image src={coinIcon1} alt="coin1 icon" className="h-8 w-8 md:w-8" />
            <span className="text-[#f0e5ff] text-sm">{multiplier}</span>
          </div>
          <div className="flex flex-col items-center mx-2">
            <Image src={coinIcon2} alt="coin2 icon" className="h-8 w-8" />
            <span className="text-[#f0e5ff] text-sm">Varies</span>
          </div>
        </div>
      </div>

      <button className="w-full md:w-36 lg:w-48 h-12 mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
        Deposit
      </button>
    </div>
  );
};

export default StrategyCard;
