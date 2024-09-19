import Image from "next/image";
import cashImg from "../../public/assets/zenith-cash.png";

export default function CashMain() {
  return (
    <div className="flex flex-col items-center justify-center mt-28 md:mt-7 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-full md:max-w-4xl">
        <Image
          src={cashImg}
          alt="icon"
          className="h-40 w-40 md:h-48 md:w-56 mr-0 md:mr-2 mb-4 md:mb-0"
        />
        <h1 className="text-[#f0e5ff] text-4xl md:text-5xl mr-0 md:mr-8 mb-4 md:mb-0">
          Cash
        </h1>
        <div className="w-px h-32 bg-[#b9b9b9] hidden md:block mr-8"></div> 

        <p className="text-[#dad5df] text-lg md:text-xl text-center md:text-left">
          Cash is a truly crypto-native credit card. Buy a coffee at your local
          shop or book your next hotel stay. All with crypto, hassle-free. Earn
          Cash Back and additional rewards with every purchase on your zenith.fi
          Cash credit card.
        </p>
      </div>
    </div>
  );
}
