import Image from "next/image";
import liquidTokenImg from "../../public/assets/zeth-liquid.png";
import VaultCard from "./VaultCard";
import vaultIcon1 from "../../public/assets/vault1.png";
import coinIcon2 from "../../public/assets/loyaltyToken.png";
import coinIcon3 from "../../public/assets/veda-icon.png";
import mevImg from "../../public/assets/mev-icon.png";
import pillsImg from "../../public/assets/pills.png";
import StrategyCard from "./StrategyCard";
import eigenImg from "../../public/assets/eigenToken.png";
import liquidPurpleImg from "../../public/assets/circlePurple1.png";

export default function Liquidity() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-full md:max-w-4xl">
          <Image
            src={liquidPurpleImg}
            alt="icon"
            className="h-36 w-40 md:h-48 md:w-56 mr-0 md:mr-2 mb-4 md:mb-0"
          />
          <h1 className="text-[#f0e5ff] text-4xl md:text-5xl mr-0 md:mr-8 mb-4 md:mb-0">
            Liquidity
          </h1>
          <div className="w-px h-32 bg-[#b9b9b9] hidden md:block mr-8"></div> 
          <p className="text-[#dad5df] text-lg md:text-xl text-center md:text-left">
            Automate your earnings with ease with strategy vaults. Deposit
            assets and let the vault optimize for yields across the very best
            protocols in DeFi.
          </p>
        </div>
      </div>

      <div className="w-full px-4 mt-16">
        <div className="flex flex-col items-start w-full mb-8 ml-0 md:ml-[190px]">
          <h2 className="text-2xl text-[#f0e5ff] mb-2">FEATURED</h2>
          <div
            className="h-[2px] lg:h-[3px] w-full lg:w-[460px]"
            style={{
              background:
                "linear-gradient(91deg, rgba(159, 98, 242, 0.45) -4%, rgba(95, 237, 235, 0) 120.34%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 mb-4">
          <VaultCard
            title="Elixir Stable Vault"
            description="The best way to participate in the Elixir ecosystem. Earn Elixir Potions, Veda, and zenith.fi points."
            tvl="$7.3M"
            multiplier1="5x"
            multiplier2="3x"
            multiplier3="3x"
            vaultIcon={vaultIcon1}
            coinIcon1={vaultIcon1}
            coinIcon2={coinIcon2}
            coinIcon3={coinIcon3}
          />
          <VaultCard
            title="Usual Stable Vault"
            description="The best way to participate in the Usual ecosystem. Earn Usual Pills, Veda, and zenith.fi points. Strategy by MEV Capital."
            tvl="$8M"
            multiplier1="3x"
            multiplier2="3x"
            multiplier3="3x"
            vaultIcon={mevImg}
            coinIcon1={pillsImg}
            coinIcon2={coinIcon2}
            coinIcon3={coinIcon3}
          />
        </div>

        <div className="flex flex-col items-start w-full mb-8 mt-24 ml-0 md:ml-[190px]">
          <h2 className="text-2xl text-[#f0e5ff] mb-2">STRATEGY VAULTS</h2>
          <div
            className="h-[2px] lg:h-[3px] w-full lg:w-[460px]"
            style={{
              background:
                "linear-gradient(91deg, rgba(159, 98, 242, 0.45) -4%, rgba(95, 237, 235, 0) 120.34%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 mb-12">
          <StrategyCard
            apy="6.3%"
            tvl="$273.6M"
            coinIcon1={coinIcon2}
            coinIcon2={eigenImg}
            description="Maximize ETH yield through a combo fixed and variable yield positions in Pendle PT, Uniswap V3 and more across DeFi. Plus, earn zenith.fi loyalty points at the full vault TVL!"
            multiplier="3x"
            title="Liquid ETH Yield"
          />
          <StrategyCard
            apy="4.3%"
            tvl="78.2M"
            coinIcon1={coinIcon2}
            coinIcon2={eigenImg}
            description="Earn yield with this market-neutral exposure vault on stablecoins USDC, DAI, USDT, and USDe across DeFi protocols Aave, Compound, Uniswap V3 and more."
            multiplier="2.5x"
            title="Market-Neutral USD"
          />
        </div>
      </div>
    </>
  );
}
