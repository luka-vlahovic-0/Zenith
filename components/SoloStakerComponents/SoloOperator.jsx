import Image from "next/image";
import number1 from "../../public/assets/number1.png";
import number2 from "../../public/assets/number2.png";
import number3 from "../../public/assets/number3.png";

export default function SoloOperator() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#c293ff] text-xl mb-4">To be a solo operator</p>
          <h1 className="text-white text-3xl lg:text-4xl mb-12">Why Be a Solo Operator?</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl gap-8 mb-12 px-4">
          <div className="flex flex-col items-center justify-center text-center max-w-xs">
            <Image src={number1} alt="number1" className="h-16 w-12 lg:h-20 lg:w-16 mb-2" />
            <h3 className="text-white text-xl lg:text-2xl mb-2">Decentralization</h3>
            <p className="text-[#e0caff]">
              Distributes validator keys to diverse operators using DVT, reducing risks and promoting decentralization.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center max-w-xs">
            <Image src={number2} alt="number2" className="h-16 w-12 lg:h-20 lg:w-16 mb-2" />
            <h3 className="text-white text-xl lg:text-2xl mb-2">No ETH deposit</h3>
            <p className="text-[#e0caff]">
              For path 2, with the implementation of Distributed Validator Technology (DVT), the need for an ETH bond is eliminated.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center max-w-xs">
            <Image src={number3} alt="number3" className="h-16 w-12 lg:h-20 lg:w-16 mb-2" />
            <h3 className="text-white text-xl lg:text-2xl mb-2">Earn rewards</h3>
            <p className="text-[#e0caff]">
              Participants earn rewards by supporting and validating the Ethereum network, benefiting stakers and the Ethereum ecosystem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
