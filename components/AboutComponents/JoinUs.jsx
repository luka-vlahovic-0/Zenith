import Link from "next/link";
import React from "react";

export default function JoinUs() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-12 bg-gradient-to-br from-[#211d3b] to-[#34299d] text-center px-4">
      <h2 className="text-[#BB85FF] text-3xl sm:text-4xl md:text-5xl mb-16">
        Join Us in Shaping the Future of Crypto Staking
      </h2>
      <p className="text-[#f0e5ff] text-lg sm:text-xl md:text-2xl max-w-4xl mb-16">
        At <span className="text-[#BB85FF]">zenith.fi,</span> we are committed
        to not only delivering innovative and secure staking solutions but also
        fostering a community of passionate individuals who share our vision of{" "}
        <span className="text-[#BB85FF]">
          decentralization, sustainability, and ethics.
        </span>{" "}
        As we look toward the future, we remain dedicated to evolving with the
        blockchain space and providing our users with the tools and support they
        need to thrive.
      </p>
      <p className="text-[#f0e5ff] text-lg sm:text-xl md:text-2xl max-w-4xl mb-10">
        Together, we can redefine what it means to stake crypto securely,
        ethically, and sustainably.
      </p>
      <Link href="/stake">
        <button className="text-2xl w-72 h-12 mt-1 mb-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500">
          Start Staking Now
        </button>
      </Link>
    </div>
  );
}
