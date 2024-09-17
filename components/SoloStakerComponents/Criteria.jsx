import Image from "next/image";
import babyImg from "../../public/assets/baby.png";
import wifiImg from "../../public/assets/wifi.png";
import eyeImg from "../../public/assets/eye.png";
import handshake from "../../public/assets/handshake.png";

export default function Criteria() {
  return (
    <>
      <div className="mb-20">
        <div className="flex flex-col items-start justify-start mx-auto w-full max-w-7xl mb-4 pl-4 md:pl-0">
          <p className="text-[#c293ff] text-xl mb-2">
            To be a solo node operator
          </p>
          <h1 className="text-white text-4xl mb-3">Criteria</h1>
          <p className="text-[#e0caff] text-lg mb-6">
            These criteria will be relaxed as the program scales
          </p>
        </div>

        <div className="flex flex-row justify-center items-center flex-wrap">
          {[
            {
              img: babyImg,
              title: "Experience",
              description:
                "Must have experience staking and be technically competent.",
            },
            {
              img: wifiImg,
              title: "Bandwidth",
              description:
                "Must have a solid internet connection with at least 250Mbps download and 100Mbps upload bandwidth with no cap on traffic.",
            },
            {
              img: eyeImg,
              title: "Doxxed",
              description:
                "Must be comfortable being doxxed to ether.fi if not providing a 2 ETH bond.",
            },
            {
              img: handshake,
              title: "Agree to Terms",
              description:
                "Must be willing to sign agreement of program terms.",
            },
          ].map((criteria, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-[#685f7f] justify-start items-start bg-[#35296c] rounded-xl p-4 m-4 w-full sm:w-[300px] h-[270px] md:h-[350px] mb-2 sm:mb-4"
            >
              <Image
                src={criteria.img}
                alt={criteria.title}
                className="h-20 w-20 border-2 p-3 rounded-xl mb-6"
                style={{ borderColor: "rgba(186, 151, 239, 0.3)" }} 
              />
              <h1 className="text-white text-xl md:text-3xl mb-6">
                {criteria.title}
              </h1>
              <p className="text-[#f0e6ff] text-base md:text-lg">
                {criteria.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
