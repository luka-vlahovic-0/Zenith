import eigenImg from "../../public/assets/eigenlLayer.png";
import decentralisationImg from "../../public/assets/decentralisation.png";
import keysNcoinsImg from "../../public/assets/yKeysYcoins.png";
import thrivingImg from "../../public/assets/thriving.png";
import Image from "next/image";

export default function StakeWithZenith() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 sm:mt-24 lg:mt-32 px-4 md:px-8 mb-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[#c3a6ff] text-2xl sm:text-3xl lg:text-5xl mb-2">
          Stake With zenith.fi
        </h1>
        <span className="text-[#e0caff] text-base sm:text-lg">
          Maximize your staking and re-staking rewards while maintaining
        </span>
        <span className="text-[#e0caff] text-base sm:text-lg">
          composability for DeFi applications.
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-10 max-w-[1300px]">

        <div className="flex flex-col sm:flex-row bg-gradient-to-br from-[#211d3b] to-[#34299d] rounded-2xl border border-[#2a1a79] justify-center gap-4 p-6 max-w-[100%] md:max-w-[400px] xl:max-w-[500px] 3xl:max-w-[614px]">
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <Image
              alt="Native restaking"
              className="h-16 w-16"
              src={eigenImg}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 text-center sm:text-left">
            <span className="text-[#f0e6ff] text-lg sm:text-xl font-normal leading-[30px] sm:leading-[40px]">
              Native restaking
            </span>
            <span className="text-[#e0caff] text-sm sm:text-lg font-light leading-6">
              Enables freedom and better rewards, since your ETH is already
              earning staking yields &amp; restaking yields via{" "}
              <a target="_blank" href="https://www.eigenlayer.xyz">
                Eigenlayer.
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-gradient-to-br from-[#211d3b] to-[#34299d] rounded-2xl border border-[#2a1a79] justify-center gap-4 p-6 max-w-[100%] md:max-w-[400px] xl:max-w-[500px] 3xl:max-w-[614px]">
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <Image
              alt="Decentralization"
              className="h-16 w-16"
              src={decentralisationImg}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 text-center sm:text-left">
            <span className="text-[#f0e6ff] text-lg sm:text-xl font-normal leading-[30px] sm:leading-[40px]">
              Decentralization
            </span>
            <span className="text-[#e0caff] text-sm sm:text-lg font-light leading-6">
              zenith.fi runs Operation Solo Staker, which further decentralizes
              Ethereum by launching nodes across diverse geographies.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-gradient-to-br from-[#211d3b] to-[#34299d] rounded-2xl border border-[#2a1a79] justify-center gap-4 p-6 max-w-[100%] md:max-w-[400px] xl:max-w-[500px] 3xl:max-w-[614px]">
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <Image
              alt="Your Keys, Your Coins"
              className="h-16 w-16"
              src={keysNcoinsImg}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 text-center sm:text-left">
            <span className="text-[#f0e6ff] text-lg sm:text-xl font-normal leading-[30px] sm:leading-[40px]">
              Your Keys, Your Coins
            </span>
            <span className="text-[#e0caff] text-sm sm:text-lg font-light leading-6">
              zenith.fi is the only protocol where stakers control the keys.
              This reduces the counterparty risk of node operators and the
              protocol.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-gradient-to-br from-[#211d3b] to-[#34299d] rounded-2xl border border-[#2a1a79] justify-center gap-4 p-6 max-w-[100%] md:max-w-[400px] xl:max-w-[500px] 3xl:max-w-[614px]">
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <Image
              alt="Thriving ecosystem"
              className="h-16 w-16"
              src={thrivingImg}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 text-center sm:text-left">
            <span className="text-[#f0e6ff] text-lg sm:text-xl font-normal leading-[30px] sm:leading-[40px]">
              Thriving ecosystem
            </span>
            <span className="text-[#e0caff] text-sm sm:text-lg font-light leading-6">
              zETH is intended to be used in DeFi. zenith.fi is partnering with
              a wide array of DeFi protocols to increase utility of zETH.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
