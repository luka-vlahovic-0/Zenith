import Image from "next/image";
import hardDriveImg from "../../public/assets/hard-drive.png";
import helpingHandImg from "../../public/assets/helping-hand.png";
import Link from "next/link";

export default function RunNode() {
  return (
    <div className="flex flex-col justify-start items-start py-16 px-6 md:px-16 lg:px-32 xl:px-40 bg-[#0e0b31]">
      <div className="flex flex-col items-start justify-start">
        <p className="text-[#c293ff] text-lg md:text-xl lg:text-2xl">
          Become a validator
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-[46px] font-bold mt-2">
          Want to run a <span className="text-[#c293ff]">zenith.fi</span> node?
        </h1>
        <p className="text-[#e0caff] text-lg md:text-xl lg:text-[26px] mt-4">
          We want the Ethereum network to be truly decentralised.
        </p>
        <p className="text-[#e0caff] text-lg md:text-xl lg:text-[26px] mt-2">
          Here are two ways <span className="text-[#c293ff]">ANYONE</span> can
          run a node.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
        <div className="flex flex-row border-2 border-[#c293ff] rounded-lg bg-[#35296c] p-4 md:p-6">
          <Image
            src={hardDriveImg}
            alt="Hard Drive Image"
            className="h-16 w-16 border-2 mb-44 border-[#681ca2] rounded-xl my-auto"
          />
          <div className="flex flex-col justify-start items-start ml-4">
            <p className="text-white text-xl md:text-2xl mb-4">Path 1</p>
            <p className="text-[#f0e6ff] text-sm md:text-base mb-4">
              Permissionless users with existing hardware who stake a 2 ETH bond
              to run a validator.
            </p>
            <p className="text-[#f0e6ff] text-sm md:text-base">
              Permissionless, with DVT for users who are willing to put up a 2
              ETH bond requirement and have staking hardware already to secure
              and validate the Ethereum network.
            </p>
          </div>
        </div>

        <div className="flex flex-row border-2 border-[#c293ff] rounded-lg bg-[#35296c] p-4 md:p-6">
          <Image
            src={helpingHandImg}
            alt="Helping Hand Image"
            className="h-16 w-16 border-2 mb-60 md:mb-44 border-[#681ca2] rounded-xl my-auto"
          />
          <div className="flex flex-col justify-start items-start ml-4">
            <p className="text-white text-xl md:text-2xl mb-4">Path 2</p>
            <p className="text-[#f0e6ff] text-sm md:text-base mb-4">
              Permissioned users who provide their own hardware and use DVT
              without having to provide a 2 ETH bond.
            </p>
            <p className="text-[#f0e6ff] text-sm md:text-base">
              <span className="text-[#c293ff]">Operation Solo Staker.</span> By
              committing to operate a node for 2 years, zenith.fi will onboard
              select users into a permissioned environment allowing users to
              Solo Stake using DVT without the requirement of a 2 ETH bond.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-10">
        <Link href="/solo-staker">
          <button className="text-lg md:text-xl w-full md:w-64 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
            Become A Solo Staker
          </button>
        </Link>
      </div>
    </div>
  );
}
