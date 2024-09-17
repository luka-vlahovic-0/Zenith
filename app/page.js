import Hero from "@/components/LandingPage/Hero.jsx";
import Products from "@/components/LandingPage/Products.jsx";
import RunNode from "@/components/LandingPage/RunNode.jsx";
import WhyStakeZenith from "@/components/LandingPage/WhyStakeZenith.jsx";

export default function Hello() {
  return (
    <div>
      
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/mainbackground.png')`,
          height: "133%",        
          backgroundPosition: "center -175px",
        }}
      >
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <div className="relative z-10 bg-[#271259]">
        <Products />
        <WhyStakeZenith />
        <RunNode />
      </div>
    </div>
  );
}


