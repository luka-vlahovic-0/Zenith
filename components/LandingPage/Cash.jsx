import Image from "next/image";
import zenithCashImg from "../../public/assets/zenith-cash.png";
import zenithCardImg from "../../public/assets/zenith-credit.png";
import Link from "next/link";

export default function Cash() {
  return (
    <div
      id="CASH"
      className="bg-[#0e0a31] rounded-xl px-4 sm:px-6 lg:px-8 py-8 max-w-xl lg:max-w-7xl w-full mx-auto h-full"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src={zenithCashImg}
          alt="Zenith Cash"
          className="mt-4 mb-2 w-20 h-20 sm:w-24 sm:h-24"
        />
        <h1 className="text-white text-2xl sm:text-3xl">Cash</h1>
        <p className="text-[#e0caff] text-base sm:text-lg text-center">
          The credit card and wallet app for your crypto
        </p>
      </div>
      <div className="flex flex-col items-center justify-center my-6 sm:my-8">
        <span className="text-white text-lg sm:text-2xl text-center">
          Using crypto in real life isn’t easy.
        </span>
        <span className="text-white text-lg sm:text-2xl text-center">
          Get the credit card that lets you pay in crypto!
        </span>
        <Image
          src={zenithCardImg}
          alt="Zenith Credit Card"
          className="h-[150px] sm:h-[200px] w-[280px] sm:w-[370px] mt-5"
        />
        <Link href="/cash">
          <button className="mt-8 sm:mt-10 text-xl sm:text-2xl w-64 sm:w-72 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
            Get Cash Now
          </button>
        </Link>
      </div>
    </div>
  );
}
