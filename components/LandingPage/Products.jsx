import Reveal from "@/components/ui/Reveal";
import Stake from "./Stake";
import Liquid from "./Liquid";
import Cash from "./Cash";

export default function Products() {
  return (
    <section className="relative mx-auto mt-28 max-w-7xl px-6 md:px-8">
      <Reveal className="text-center">
        <span className="eyebrow">Our products</span>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          One protocol, <span className="text-aurora">three ways to earn</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
          Earn more when you restake with zenith.fi — then put your yield to
          work everywhere.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Reveal delay={0} className="min-w-0">
          <Stake />
        </Reveal>
        <Reveal delay={140} className="min-w-0">
          <Liquid />
        </Reveal>
        <Reveal delay={280} className="min-w-0">
          <Cash />
        </Reveal>
      </div>
    </section>
  );
}
