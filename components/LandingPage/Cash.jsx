import Link from "next/link";
import CreditCard from "@/components/ui/CreditCard";

export default function Cash() {
  return (
    <div className="glass glass-hover group flex h-full flex-col p-8">
      <span className="font-display text-xs font-medium uppercase tracking-[0.25em] text-zen-pink">
        Cash
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold text-ink">
        Spend crypto in real life
      </h3>
      <p className="mt-3 leading-relaxed text-ink-muted">
        A true crypto-native credit card. Borrow against your zETH, buy coffee,
        book hotels — and earn cash back on every purchase.
      </p>

      <div className="mt-8 flex flex-1 items-center justify-center px-2">
        <CreditCard className="max-w-[300px]" />
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6">
        <div>
          <p className="font-display text-2xl font-bold text-ink">2% back</p>
          <p className="text-xs uppercase tracking-widest text-ink-faint">On everything</p>
        </div>
        <Link
          href="/cash"
          className="btn-ghost !px-5 !py-2 text-sm group-hover:border-zen-pink/60 group-hover:text-zen-pink"
        >
          Get the card →
        </Link>
      </div>
    </div>
  );
}
