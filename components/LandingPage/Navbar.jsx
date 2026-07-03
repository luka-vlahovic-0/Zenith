"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "@/components/ui/Logo";

const PRODUCTS = [
  { href: "/stake", label: "Stake", desc: "Stake ETH, receive zETH" },
  { href: "/liquidity", label: "Liquidity", desc: "Automated yield vaults" },
  { href: "/cash", label: "Cash", desc: "Crypto-native credit card" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const linkClass = (href) =>
    `font-display text-sm font-medium tracking-wide transition-colors duration-300 ${
      pathname === href ? "text-zen-cyan" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-void/70 backdrop-blur-xl shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Logo size={34} className="transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            zenith<span className="text-aurora">.fi</span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((v) => !v)}
              className={`flex items-center gap-1 ${linkClass("__products")}`}
            >
              Products
              <FiChevronDown
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-zen-cyan" : ""}`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 transition-all duration-300 ${
                isDropdownOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0b0e1e] p-2 shadow-card">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="group/item flex flex-col rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-white/[0.06]"
                  >
                    <span className="font-display font-semibold text-ink transition-colors group-hover/item:text-zen-cyan">
                      {p.label}
                    </span>
                    <span className="text-sm text-ink-muted">{p.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/solo-staker" className={linkClass("/solo-staker")}>
            Solo Staker
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="scale-[0.9] md:scale-100">
            <ConnectButton accountStatus="address" showBalance={false} chainStatus="none" />
          </div>

          <button
            className="text-ink transition-colors hover:text-zen-cyan lg:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 border-t border-white/[0.06] bg-[#0b0e1e] px-6 py-4">
          {[...PRODUCTS, { href: "/solo-staker", label: "Solo Staker" }, { href: "/about", label: "About" }].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-3 py-2.5 font-display font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-white/[0.06] text-zen-cyan"
                    : "text-ink-muted hover:bg-white/[0.04] hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}
