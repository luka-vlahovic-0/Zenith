import Image from "next/image";
import hardDriveImg from "../../public/assets/hard-drive.png";
import helpingHandImg from "../../public/assets/helping-hand.png";

export default function ChoosePath() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl mb-2 mt-20">Choose your path:</h1>
      </div>

      <div className="flex items-center justify-center mb-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 mb-10 md:grid-cols-2 mt-8 max-w-7xl">
          {[
            {
              img: hardDriveImg,
              title: "Path 1",
              description:
                "Permissionless users with existing hardware who stake a 2 ETH bond to run a validator.",
              details:
                "Permissionless, with DVT for users who are willing to put up a 2 ETH bond requirement and have staking hardware already to secure and validate the Ethereum network.",
              zenithText: "Provides 30 ETH, software and technical support.",
              youDesc:
                "Provide the hardware and internet connection. 2 ETH bond requirement.",
            },
            {
              img: helpingHandImg,
              title: "Path 2",
              description:
                "Permissioned users who provide their own hardware and use DVT without having to provide a 2 ETH bond.",
              details:
                "Operation Solo Staker. By committing to operate a node for 2 years, zenith.fi will onboard select users into a permissioned environment allowing users to Solo Stake using DVT without the requirement of a 2 ETH bond.",
              zenithText: "Provides the ETH, software and technical support.",
              youDesc:
                "Provide the internet connection and hardware, with no bond required.",
            },
          ].map((path, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-[#c293ff] rounded-lg bg-[#35296c] p-4 md:p-6"
            >
              <Image
                src={path.img}
                alt={`${path.title} Image`}
                className="h-16 w-16 border-2 p-1 border-[#681ca2] rounded-xl"
              />
              <div className="flex flex-col mt-4">
                <p className="text-white text-xl md:text-2xl mb-4">
                  {path.title}
                </p>
                <p className="text-[#f0e6ff] text-sm md:text-base mb-4">
                  {path.description}
                </p>
                <p className="text-[#f0e6ff] text-sm md:text-base">
                  {path.details}
                </p>
                <div className="flex flex-col justify-start items-start bg-[#262250] mt-6 rounded-xl">
                  <div className="flex flex-row justify-between items-start px-4 py-2">
                    <div className="flex flex-col mr-4">
                      {" "}
                      <p className="text-white font-bold mb-2">zenith.fi</p>
                      <p className="text-[#f0e6ff] text-sm">
                        {path.zenithText}
                      </p>
                    </div>
                    <div className="flex flex-col ml-4">
                      {" "}
                      <p className="text-white font-bold mb-2">you</p>
                      <p className="text-[#f0e6ff] text-sm">{path.youDesc}</p>
                    </div>
                  </div>
                  <div
                    className="w-full h-[0.7px]"
                    style={{
                      background:
                        "linear-gradient(91deg,#6d33bc -4%,#11344d 120.34%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
