"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ethLogo from "../../public/assets/ethlogo.png";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="w-full max-w-full h-20 flex justify-between items-center z-40 mb-[-50px] md:mb-0 px-4 md:px-16 py-4 bg-transparent">
  <Link href="/">
    <div className="flex items-center space-x-2 flex-shrink-0 z-50">
      <Image
        src={ethLogo}
        alt="Zenith.fi Logo"
        className="h-10 w-10 md:h-16 md:w-16"
      />
      <span className="text-white text-lg md:text-2xl font-semibold">
        zenith.fi
      </span>
    </div>
  </Link>

  <div className="hidden lg:flex space-x-6 text-xl font-semibold z-50">
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white hover:text-gray-300 focus:outline-none z-50"
      >
        Products
        <FiChevronDown className="ml-1" />
      </button>
      {isDropdownOpen && (
        <div className="absolute top-8 left-0 bg-gray-800 text-white rounded-lg shadow-lg p-4 space-y-2 z-50">
          <Link href="/stake" onClick={handleLinkClick}>
            <p className="hover:text-gray-300 mb-2">Stake</p>
          </Link>
          <Link href="/liquidity" onClick={handleLinkClick}>
            <p className="hover:text-gray-300 mb-2">Liquidity</p>
          </Link>
          <Link href="/cash" onClick={handleLinkClick}>
            <p className="hover:text-gray-300">Cash</p>
          </Link>
        </div>
      )}
    </div>

    <Link href="/solo-staker" onClick={handleLinkClick}>
      <p className="text-white hover:text-gray-300 z-50">Solo Staker</p>
    </Link>

    <Link href="/about" onClick={handleLinkClick}>
      <p className="text-white hover:text-gray-300 z-50">About Us</p>
    </Link>
  </div>

  <div className="relative flex items-center z-50">
    <div className="w-[180px] scale-[0.85] mr-4 md:scale-100 z-50">
      <ConnectButton
        accountStatus="address"
        showBalance={false}
        chainStatus="none"
      />
    </div>

    <button
      className="lg:hidden absolute right-0 text-white pr-2 z-50"
      onClick={toggleMenu}
      ref={menuButtonRef}
    >
      <FiMenu size={28} />
    </button>
  </div>

  {isOpen && (
    <div
      className="lg:hidden absolute top-20 right-4 bg-gray-800 text-white rounded-lg shadow-lg p-4 space-y-4 z-50"
      ref={mobileMenuRef}
    >
      <Link href="/stake" onClick={handleLinkClick}>
        <p className="block hover:text-gray-300 mb-3 z-50">Stake</p>
      </Link>
      <Link href="/cash" onClick={handleLinkClick}>
        <p className="block hover:text-gray-300 mb-3 z-50">Cash</p>
      </Link>
      <Link href="/liquidity" onClick={handleLinkClick}>
        <p className="block hover:text-gray-300 mb-3 z-50">Liquidity</p>
      </Link>

      <Link href="/solo-staker" onClick={handleLinkClick}>
        <p className="block hover:text-gray-300 mb-3 z-50">Solo Staker</p>
      </Link>
      <Link href="/about" onClick={handleLinkClick}>
        <p className="block hover:text-gray-300 z-50">About Us</p>
      </Link>
    </div>
  )}
</nav>

  );
}
