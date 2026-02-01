"use client";

import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      {/* App icon */}
      <div className="animate-fade-in-up mb-8 flex h-20 w-20 items-center justify-center rounded-[22px] bg-white/[0.04] border border-white/[0.08] shadow-[0_0_80px_rgba(255,255,255,0.04)]">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 10v3" />
          <path d="M6 6v11" />
          <path d="M10 3v18" />
          <path d="M14 8v7" />
          <path d="M18 5v13" />
          <path d="M22 10v3" />
        </svg>
      </div>

      <h1 className="animate-fade-in-up-delay-1 max-w-4xl text-5xl leading-[1.08] font-bold tracking-tight text-white md:text-6xl lg:text-[80px]">
        {HERO.headline}
      </h1>

      <p className="animate-fade-in-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
        {HERO.subhead}
      </p>

      <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#download"
          className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
          </svg>
          {HERO.ctaMac}
        </a>
        <a
          href="#pipeline"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
          {HERO.ctaIphone}
        </a>
      </div>

      <div className="animate-fade-in-up-delay-4 mt-6 flex items-center gap-2 text-sm text-text-tertiary">
        <img src="/testflight.webp" alt="TestFlight" width={35} height={35} className="rounded" />
        <span>{HERO.badge}</span>
      </div>
    </section>
  );
}
