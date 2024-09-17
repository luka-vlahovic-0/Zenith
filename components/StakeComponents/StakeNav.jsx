"use client";

import { useState } from "react";
import Image from "next/image";
import ethLogo from "../../public/assets/ethlogo.png";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";

export default function StakeNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return pathname === path ? "text-[#c293ff]" : "text-white";
  };

  return (
    <nav className="h-20 flex justify-between mt-4 items-center px-6 md:px-32 py-4 bg-transparent">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={ethLogo}
            alt="Zenith.fi Logo"
            className="h-10 w-10 md:h-20 md:w-20"
          />
          <span className="text-white text-lg md:text-3xl font-semibold">
            zenith.fi
          </span>
        </div>
      </Link>

      <div className="hidden lg:flex space-x-8 mt-2 mr-16 text-xl">
        <Link
          href="/stake"
          className={`${getLinkClass(
            "/stake"
          )} text-xl font-semibold hover:text-gray-300`}
        >
          Stake
        </Link>
        <Link
          href="/liquidity"
          className={`${getLinkClass(
            "/liquidity"
          )} text-xl font-semibold hover:text-gray-300`}
        >
          Liquidity
        </Link>
        <Link
          href="/cash"
          className={`${getLinkClass(
            "/cash"
          )} text-xl font-semibold hover:text-gray-300`}
        >
          Cash
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/stake">
          <ConnectButton accountStatus="address" showBalance={false} />
        </Link>

        <button className="lg:hidden text-white" onClick={toggleMenu}>
          <FiMenu size={32} />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 right-8 bg-gray-800 text-white rounded-lg shadow-lg p-4 space-y-4 z-50">
          <Link href="/stake" className="block hover:text-gray-300">
            Stake
          </Link>
          <Link href="/liquidity" className="block hover:text-gray-300">
            Liquidity
          </Link>
          <Link href="/cash" className="block hover:text-gray-300">
            Cash
          </Link>
        </div>
      )}
    </nav>
  );
}
