import Image from "next/image";
import securityImg from "../../public/assets/security.png";

export default function Security() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 px-4">
      <div className="flex flex-col justify-center items-start max-w-5xl">
        <div className="text-3xl sm:text-4xl md:text-5xl text-[#c3a6ff] mb-4 sm:mb-6 md:mb-8 mt-10 md:mt-20">
          Security is our top priority
        </div>
        <p className="text-[#f0e5ff] text-base sm:text-lg md:text-xl mb-10 md:mb-20 max-w-3xl">
          We implement industry-leading encryption protocols and multi-layer
          security measures to ensure that your funds are always protected. Our
          platform is non-custodial, meaning you remain in full control of your
          private keys, minimizing the risks associated with third-party
          control. We also continuously audit our smart contracts to maintain
          the highest level of trust and transparency.
        </p>
      </div>
      <Image
        src={securityImg}
        alt="security"
        className="h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 mt-10 md:mt-0 ml-0 md:ml-12"
      />
    </div>
  );
}
