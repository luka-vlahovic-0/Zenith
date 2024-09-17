"use client";

import Image from "next/image";
import handshakeImg from "../../public/assets/handshake1.png";
import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function Mission() {
  const isMediumOrAbove = useMediaQuery("(min-width: 768px)"); 

  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto mt-10 md:mt-20 px-4 lg:px-16">
      {isMediumOrAbove ? (
        <>
          <Image
            src={handshakeImg}
            alt="handshake"
            className="h-48 w-60 sm:h-64 sm:w-80 md:h-96 md:w-96 mt-10 md:mt-0 md:mr-12"
          />
          <div className="flex flex-col justify-center items-start max-w-3xl md:ml-12 mt-6 md:mt-0">
            <div className="text-3xl sm:text-4xl md:text-5xl text-[#c3a6ff] mb-4 sm:mb-6 md:mb-8">
              Mission
            </div>
            <p className="text-[#f0e5ff] text-base sm:text-lg md:text-xl mb-10 md:mb-20">
              Our mission is to empower users to maximize their staking rewards
              while contributing to the decentralization and security of the
              blockchain ecosystem. We are committed to building a platform that
              is not only sustainable but also aligns with the core values of
              decentralization, trustlessness, and open finance. Join us in
              reshaping the future of staking with a platform built on security,
              integrity, and innovation.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-start max-w-3xl md:ml-12 mt-6 md:mt-0">
            <div className="text-3xl sm:text-4xl md:text-5xl text-[#c3a6ff] mb-4 sm:mb-6 md:mb-8">
              Mission
            </div>
            <p className="text-[#f0e5ff] text-base sm:text-lg md:text-xl mb-10 md:mb-20">
              Our mission is to empower users to maximize their staking rewards
              while contributing to the decentralization and security of the
              blockchain ecosystem. We are committed to building a platform that
              is not only sustainable but also aligns with the core values of
              decentralization, trustlessness, and open finance. Join us in
              reshaping the future of staking with a platform built on security,
              integrity, and innovation.
            </p>
          </div>
          <Image
            src={handshakeImg}
            alt="handshake"
            className="h-48 w-60 sm:h-64 sm:w-80 md:h-96 md:w-96 mt-10 md:mt-0 md:mr-12"
          />
        </>
      )}
    </div>
  );
}
