import Image from "next/image";
import gitHubImg from "../../public/assets/github.png";
import linkedInImg from "../../public/assets/linkedin.png";

export default function Footer() {
  return (
    <div className="flex flex-row justify-center items-center h-20 bg-[#120926]">
      <p className="text-white font-semibold mr-5 text-xs p-2 sm:text-sm md:text-base">
        © 2024. Made by Luka Vlahovic, All rights reserved.
      </p>
      <div className="flex space-x-4 p-2 mr-2">
        <a
          href="https://github.com/luka-vlahovic-0/Zenith"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={gitHubImg} alt="GitHub Logo" className="h-[27px] w-14 md:w-16 md:h-10 mt-[3px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/luka-vlahovic-657162281/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedInImg} alt="LinkedIn Logo" className="h-8 w-10 md:w-12 md:h-12" />
        </a>
      </div>
    </div>
  );
}
