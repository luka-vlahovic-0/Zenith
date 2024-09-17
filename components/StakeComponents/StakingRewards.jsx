import Image from "next/image";
import ethCoinImg from "../../public/assets/zeth-icon-colored.png"; 
import loyaltyImg from "../../public/assets/loyaltyToken.png";
import eigenToken from "../../public/assets/eigenToken.png";

export default function StakingRewards() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0e0a31] rounded-xl p-6 mb-4 max-w-3xl mx-[20px] md:mx-auto">
      
      <div className="flex flex-row items-center justify-center mb-4">
        <Image src={ethCoinImg} alt="icon" className="h-5 w-5 mr-2" /> 
        <p className="text-white text-lg">zETH STAKING REWARDS</p>
        <Image src={ethCoinImg} alt="icon" className="h-5 w-5 ml-2" /> 
      </div>

      
      <div className="flex justify-between w-full text-center text-white mb-6">
        <div>
          <p className="text-sm text-gray-400">APR</p>
          <p className="text-xl">2.96%</p>
        </div>
        <div className="border-l border-gray-600 mx-4"></div> 
        <div>
          <p className="text-sm text-gray-400">TVL</p>
          <p className="text-xl">$5.28B</p>
        </div>
        <div className="border-l border-gray-600 mx-4"></div> 
        <div>
          <p className="text-sm text-gray-400">Restaking APR</p>
          <p className="text-xl">TBD</p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full bg-gradient-to-r from-[#4b28b7] to-[#874bfc] rounded-lg p-4">
        <div className="flex flex-col items-center">
          <Image src={loyaltyImg} alt="token icon" className="h-6 w-6 mb-2" />
          <p className="text-2xl text-white">3.31T</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={eigenToken} alt="token icon" className="h-6 w-6 mb-2" />
          <p className="text-2xl text-white">6.39B</p>
        </div>
      </div>
    </div>
  );
}
