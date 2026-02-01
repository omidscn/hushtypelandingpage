"use client";

import { useState, FormEvent } from "react";
import { CTA } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

type FormState = "idle" | "submitting" | "success" | "error";

export default function CTASection() {
  const ref = useScrollAnimation<HTMLElement>();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/mlglgjjv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "Solo Waitlist Signup" }),
      });

      if (res.ok) {
        setState("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  return (
    <section ref={ref} id="download" className="scroll-reveal relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card p-12 text-center md:p-20">
          {/* Subtle radial glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />

          <div className="relative">
            {state === "success" ? (
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {CTA.successHeadline}
                </h2>
                <p className="mt-4 text-lg text-text-secondary">{CTA.successMessage}</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {CTA.headline}
                </h2>
                <div className="mt-4 flex items-center justify-center gap-2 text-lg text-text-secondary">
                  <img src="/testflight.webp" alt="TestFlight" width={35} height={35} className="rounded" />
                  <p>{CTA.subhead}</p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
                >
                  <input type="hidden" name="_subject" value="Solo Waitlist Signup" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={CTA.formPlaceholder}
                    className="min-h-[44px] w-full rounded-full bg-white px-6 py-3.5 text-[16px] text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/30 sm:w-72"
                  />
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] disabled:opacity-60 sm:w-auto"
                  >
                    {state === "submitting" ? "Joining..." : CTA.formButton}
                  </button>
                </form>

                {state === "error" && (
                  <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
