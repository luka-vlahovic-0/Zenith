import Image from "next/image";
import worldMapImg from "../../public/assets/map.png";

export default function Header() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-32 md:mt-12 lg:ml-36 mx-4 lg:mx-0">
        <div className="flex flex-col justify-start items-start max-w-full lg:max-w-2xl mb-6 lg:mb-0">
          <p className="text-[#c293ff] text-xl lg:text-2xl mb-2">OPERATION</p>
          <h1 className="text-white text-4xl lg:text-5xl mb-4">Solo Staker</h1>
          <p className="text-white text-lg lg:text-xl">
            Enabling <span className="text-[#c293ff]">ANYONE</span> to run nodes, further decentralizing
            the Ethereum network. Have a look at the growing network of solo
            stakers on the map.
          </p>
        </div>
        <Image src={worldMapImg} alt="map" className="w-full lg:w-[800px] h-auto lg:h-[500px]" />
      </div>
    </>
  );
}
