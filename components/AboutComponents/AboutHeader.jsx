import Image from "next/image";
import decentralizationImg from "../../public/assets/decentralization1.png";
import sustainableImg from "../../public/assets/sustainable.png";
import ethicsImg from "../../public/assets/ethics.png";

export default function AboutHeader() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 lg:px-16">
        <div className="text-3xl sm:text-4xl md:text-5xl text-white mb-8 mt-20 text-center">
          We stand behind <br />
          <span className="text-[#BB85FF]">3 Guiding Principles</span>
        </div>
        <p className="text-[#f0e5ff] text-lg sm:text-xl md:text-2xl text-center mb-20 max-w-3xl px-4">
          Our principles guide our actions, and we want the Ethereum community
          to hold us accountable for living up to them.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mb-10 space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col min-w-[330px] max-w-sm h-auto sm:h-[270px] items-start justify-start border-2 border-[#2a1a79] bg-gradient-to-br from-[#211d3b] to-[#34299d] p-4 rounded-2xl break-words">
            <Image
              src={decentralizationImg}
              alt="Decentralization"
              className="h-12 w-12 mb-4"
            />
            <h3 className="text-white text-lg sm:text-xl">
              Decentralization is a primary objective
            </h3>
            <p className="text-[#d3c1ee] text-sm sm:text-[18px] mt-2">
              We will never compromise on the non-custodial and decentralized
              nature of the protocol. Stakers must maintain control of their
              ETH.
            </p>
          </div>

          <div className="flex flex-col min-w-[330px] max-w-sm h-auto sm:h-[270px] items-start justify-start border-2 border-[#2a1a79] bg-gradient-to-br from-[#211d3b] to-[#34299d] p-4 rounded-2xl break-words">
            <Image
              src={sustainableImg}
              alt="Decentralization"
              className="h-12 w-12 mb-4"
            />
            <h3 className="text-white text-lg sm:text-xl">
              The zenith.fi protocol has a sustainable revenue model
            </h3>
            <p className="text-[#d3c1ee] text-sm sm:text-[18px] mt-2">
              We're in this for the long haul, we think and plan on the scale of
              decades. No short term thinking, no short term gains.
            </p>
          </div>

          <div className="flex flex-col min-w-[330px] max-w-sm h-auto sm:h-[270px] items-start justify-start border-2 border-[#2a1a79] bg-gradient-to-br from-[#211d3b] to-[#34299d] p-4 rounded-2xl break-words">
            <Image
              src={ethicsImg}
              alt="Decentralization"
              className="h-12 w-12 mb-4"
            />
            <h3 className="text-white text-lg sm:text-xl">
              Ethics are important.
            </h3>
            <p className="text-[#d3c1ee] text-sm sm:text-[18px] mt-2">
              We will do the right thing for the Ethereum community, always. If
              and when we mess up, we will admit to it and course correct,
              quickly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
