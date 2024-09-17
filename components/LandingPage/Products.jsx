import Cash from "./Cash";
import Liquid from "./Liquid";
import Stake from "./Stake";

export default function Products() {
  return (
    <div className="flex flex-col items-center mt-24 px-4">
      <div className="flex flex-col items-start justify-start mb-10 text-center lg:text-left lg:w-full lg:max-w-4xl lg:pr-16">
        <h1 className="text-white text-3xl md:text-4xl mb-3 ml-2 font-semibold">
          Our Products
        </h1>
        <p className="text-[#e0caff] text-base md:text-lg mb-4 ml-2">
          Earn more when you re-stake with zenith.fi
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="w-full max-w-4xl"> 
          <Stake />
        </div>
        <div className="w-full max-w-4xl">
          <Liquid />
        </div>
        <div className="w-full max-w-4xl">
          <Cash />
        </div>
      </div>
    </div>
  );
}
