import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "@/components/ui/Logo";

const LINKS = {
  Products: [
    { href: "/stake", label: "Stake" },
    { href: "/liquidity", label: "Liquidity" },
    { href: "/cash", label: "Cash" },
  ],
  Protocol: [
    { href: "/solo-staker", label: "Solo Staker" },
    { href: "/about", label: "About Us" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06]">
      {/* aurora hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-aurora opacity-60" />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={32} />
              <span className="font-display text-xl font-semibold text-ink">
                zenith<span className="text-aurora">.fi</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Stake, earn, spend — reach the highest point of DeFi. Liquid
              restaking built for everyone, secured by Ethereum.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/luka-vlahovic-0/Zenith"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-zen-cyan/60 hover:text-zen-cyan hover:shadow-glow-cyan"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/luka-vlahovic-657162281/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-zen-violet/60 hover:text-zen-violet hover:shadow-glow"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div className="flex gap-16 md:gap-24">
            {Object.entries(LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                  {title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-ink-muted transition-colors duration-300 hover:text-zen-cyan"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-ink-faint md:flex-row">
          <p>© 2026 zenith.fi — Made by Luka Vlahovic. All rights reserved.</p>
          <p>Built on Ethereum. Not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
