import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function JoinUs() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6 pb-6 md:px-8">
      <div className="glass relative overflow-hidden p-10 text-center md:p-16">
        {/* backdrop glows */}
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #38e8ff, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #f472b6, transparent 70%)" }}
        />

        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-5xl">
            Join us in shaping the{" "}
            <span className="text-aurora">future of staking</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            At zenith.fi, we deliver innovative and secure staking solutions
            while fostering a community that shares our vision of
            decentralization, sustainability, and ethics. Together, we can
            redefine what it means to stake crypto — securely, ethically, and
            sustainably.
          </p>
          <Link href="/stake" className="btn-aurora mt-10 text-lg">
            Start Staking Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
