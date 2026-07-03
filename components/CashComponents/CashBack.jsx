import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import CashBackCard from "./CashBackCard";

const stroke = { strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const FEATURES = [
  {
    color: "#38e8ff",
    header: "Spend your crypto IRL",
    description:
      "No banks, no expensive transfer fees. Use your crypto directly for real-world purchases, wherever you are.",
    icon: (
      <>
        <circle cx="9" cy="20" r="1.6" {...stroke} />
        <circle cx="17" cy="20" r="1.6" {...stroke} />
        <path d="M3 3h2.5l2.2 12.5h10.8L21 7H6" {...stroke} />
      </>
    ),
  },
  {
    color: "#8b7cf6",
    header: "Crypto as collateral",
    description:
      "Borrow against your holdings to make purchases — and soon, pay your card balance with native yield.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2" {...stroke} />
        <path d="M8 8V6a4 4 0 0 1 8 0v2M12 13v3" {...stroke} />
      </>
    ),
  },
  {
    color: "#2dd4bf",
    header: "Credit card flexibility",
    description:
      "A true credit card — not pre-loaded. Buy coffee, rent cars, or book hotels wherever VISA is accepted.",
    icon: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" {...stroke} />
        <path d="M2.5 10h19M6 15h4" {...stroke} />
      </>
    ),
  },
  {
    color: "#f472b6",
    header: "Non-custodial",
    description:
      "Your crypto never leaves your custody. Full control, on-chain features, zero counterparty games.",
    icon: (
      <>
        <circle cx="8" cy="15" r="4.5" {...stroke} />
        <path d="m11.5 11.5 8-8M16 7l3 3M13.5 9.5l2 2" {...stroke} />
      </>
    ),
  },
];

const TRANSACTIONS = [
  { icon: "☕", name: "Morning Coffee", place: "Blue Bottle, Lisbon", amount: "-$6.40", back: "+$0.13" },
  { icon: "🏨", name: "Hotel Aurora", place: "Reykjavík · 2 nights", amount: "-$412.00", back: "+$8.24" },
  { icon: "🛒", name: "Groceries", place: "Whole Foods Market", amount: "-$83.90", back: "+$1.68" },
  { icon: "✈️", name: "Flight ZRH → NYC", place: "Swiss Air", amount: "-$640.00", back: "+$12.80" },
];

function TransactionLedger() {
  return (
    <div className="glass p-6">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ink-muted">
          Recent activity
        </p>
        <span className="rounded-full bg-zen-teal/10 px-3 py-1 text-xs font-semibold text-zen-teal">
          2% cash back
        </span>
      </div>
      <div className="mt-5 space-y-2.5">
        {TRANSACTIONS.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-void/40 px-4 py-3 transition-colors duration-300 hover:border-white/[0.14]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-lg">
                  {t.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.place}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-ink">{t.amount}</p>
                <p className="text-xs font-semibold text-zen-teal">{t.back} back</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Check({ children }) {
  return (
    <li className="flex items-start gap-3">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#2dd4bf" strokeWidth="1.6" />
        <path d="m8 12.5 2.5 2.5L16 9.5" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-ink-muted">{children}</span>
    </li>
  );
}

export default function CashBack() {
  return (
    <>
      {/* features */}
      <section className="mx-auto mt-28 max-w-6xl px-6 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Cash back on <span className="text-aurora">everything</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
            Cash is a spending account that lets you borrow against and spend
            your zenith.fi balance in the real world.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.header} delay={i * 110}>
              <CashBackCard {...f} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* borrow section */}
      <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Self-repaying credit</span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Borrow against zETH and other yield-bearing assets
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Instead of spending USDC directly, automatically borrow against
              your yield-bearing assets at payment time. Your position pays
              itself off using the yield of your collateral — or pay it off
              whenever you like.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <TransactionLedger />
          </Reveal>
        </div>
      </section>

      {/* perks + security */}
      <section className="mx-auto mt-32 max-w-6xl px-6 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full p-8 md:p-10">
              <span className="eyebrow">Perks</span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                Perks like no other card
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                Cash is the only credit card that rewards you for participating
                in DeFi, thanks to unique partnerships across the zenith.fi
                ecosystem. Exclusive cash back, only for card holders.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Partner boosts", "Loyalty multipliers", "Priority vault access", "Zero FX fees"].map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-zen-pink/30 bg-zen-pink/10 px-4 py-1.5 text-sm text-zen-pink"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass h-full p-8 md:p-10">
              <span className="eyebrow">Security</span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                Secure, fast, and gasless
              </h3>
              <ul className="mt-6 space-y-4">
                <Check>Audited by the best security firms in crypto.</Check>
                <Check>Smart contract–based wallet technology.</Check>
                <Check>Never pay gas on any card transaction.</Check>
                <Check>Your keys, your coins — always non-custodial.</Check>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* final CTA */}
      <section className="mx-auto mt-32 max-w-4xl px-6 pb-6 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Join the <span className="text-aurora">future of finance</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Real-world purchases, borrowing against your crypto, gasless
            transactions — Cash empowers you to do more with your assets while
            you stay in control.
          </p>
          <Link href="/stake" className="btn-aurora mt-9 text-lg">
            Start with zETH
          </Link>
        </Reveal>
      </section>
    </>
  );
}
