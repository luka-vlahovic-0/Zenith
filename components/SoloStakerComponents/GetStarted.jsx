"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reveal from "@/components/ui/Reveal";

const inputClass =
  "w-full rounded-xl border border-white/[0.1] bg-void/60 px-5 py-3.5 text-ink placeholder:text-ink-faint outline-none transition-colors duration-300 focus:border-zen-cyan/60 focus:shadow-glow-cyan";

export default function GetStarted() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success(
        "Your application has been sent. We'll contact you shortly! 🚀",
        { position: "bottom-right", autoClose: 5000, theme: "dark" }
      );
      setLoading(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <section className="mx-auto mt-32 max-w-2xl px-6 pb-10 md:px-8">
      <Reveal className="text-center">
        <span className="eyebrow">Get involved</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Ready to <span className="text-aurora">join the operation?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
          Fill out the form below and begin your journey. If accepted, you will
          receive onboarding instructions by email.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <form className="glass mt-10 flex flex-col gap-5 p-8" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2">
            <span className="font-display text-sm font-semibold text-ink">Your name</span>
            <input type="text" name="name" required placeholder="Satoshi Nakamoto" className={inputClass} />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-display text-sm font-semibold text-ink">Your email</span>
            <input type="email" name="email" required placeholder="you@example.com" className={inputClass} />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-display text-sm font-semibold text-ink">Technical expertise</span>
            <textarea
              required
              rows={5}
              name="message"
              placeholder="Tell us about your staking setup, hardware, and experience..."
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn-aurora mt-2 w-full text-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                  <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Sending...
              </>
            ) : (
              "Apply to run a node"
            )}
          </button>
        </form>
      </Reveal>

      <ToastContainer />
    </section>
  );
}
