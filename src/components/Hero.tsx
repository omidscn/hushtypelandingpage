"use client";

import { useState, useEffect } from "react";
import { useDictionary } from "@/lib/DictionaryProvider";

export default function Hero() {
  const { dict } = useDictionary();
  const PHRASES = dict.hero.polishedPhrases;
  const RAW_PHRASES = dict.hero.rawPhrases;
  const [phase, setPhase] = useState<"raw" | "processing" | "polished">("raw");
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter cycle: raw → processing → polished → next phrase
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "raw") {
      const target = RAW_PHRASES[phraseIndex];
      if (charIndex < target.length) {
        timeout = setTimeout(() => {
          setDisplayText(target.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 28);
      } else {
        timeout = setTimeout(() => {
          setPhase("processing");
          setCharIndex(0);
        }, 900);
      }
    } else if (phase === "processing") {
      timeout = setTimeout(() => {
        setDisplayText("");
        setPhase("polished");
      }, 800);
    } else if (phase === "polished") {
      const target = PHRASES[phraseIndex];
      if (charIndex < target.length) {
        timeout = setTimeout(() => {
          setDisplayText(target.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 22);
      } else {
        timeout = setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setPhase("raw");
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }, 2400);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, phraseIndex]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center overflow-hidden">

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-teal/[0.03] blur-[120px]" />
        <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo/[0.03] blur-[80px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[200px] w-[200px] rounded-full bg-violet/[0.03] blur-[60px]" />
      </div>

      {/* Eyebrow */}
      <div className="animate-fade-in-up relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-teal-border bg-teal-muted px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
        <span className="text-xs font-medium tracking-wider uppercase text-teal">
          100% On-Device · macOS 26 · iOS 26
        </span>
      </div>

      {/* Headline */}
      <h1 className="animate-fade-in-up-delay-1 relative z-10 max-w-4xl text-5xl leading-[1.06] font-bold tracking-tight text-white md:text-6xl lg:text-[86px]">
        Private{" "}
        <span className="relative inline-block">
          by physics.
          <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none" preserveAspectRatio="none">
            <path
              d="M0 5 Q75 0 150 4 Q225 8 300 3"
              stroke="#10B981"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="animate-circle-draw"
              style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: "path-draw 1.2s cubic-bezier(0.16,1,0.3,1) 1s forwards" }}
            />
          </svg>
        </span>
      </h1>

      <p className="animate-fade-in-up-delay-2 relative z-10 mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
        {dict.hero.subhead}
      </p>

      {/* The Device Boundary Visualization */}
      <div className="animate-fade-in-up-delay-3 relative z-10 mt-12 mb-10 flex items-center justify-center">
        <div className="relative flex h-[280px] w-[280px] md:h-[320px] md:w-[320px] items-center justify-center">

          {/* Outer ring — the boundary */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 320"
            fill="none"
          >
            {/* Outer dashed boundary ring */}
            <circle
              cx="160" cy="160" r="150"
              stroke="rgba(16,185,129,0.15)"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
            {/* Main glowing ring */}
            <circle
              cx="160" cy="160" r="138"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              className="animate-circle-draw"
            />
            {/* Inner accent ring */}
            <circle
              cx="160" cy="160" r="126"
              stroke="rgba(16,185,129,0.08)"
              strokeWidth="1"
            />
          </svg>

          {/* Teal ambient glow behind circle */}
          <div className="absolute inset-8 rounded-full animate-shield-pulse" />

          {/* Floating particles inside the boundary */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="particle-1 absolute top-[25%] left-[20%] h-1 w-1 rounded-full bg-teal/50" />
            <div className="particle-2 absolute top-[60%] left-[70%] h-1.5 w-1.5 rounded-full bg-teal/30" />
            <div className="particle-3 absolute top-[40%] left-[75%] h-0.5 w-0.5 rounded-full bg-teal/60" />
            <div className="particle-4 absolute top-[70%] left-[30%] h-1 w-1 rounded-full bg-indigo/40" />
            <div className="particle-5 absolute top-[20%] left-[55%] h-1 w-1 rounded-full bg-violet/40" />
          </div>

          {/* Inner content */}
          <div className="relative flex flex-col items-center justify-center gap-3 px-6">
            {/* Waveform or processing indicator */}
            {phase === "processing" ? (
              <div className="flex items-center justify-center gap-1 h-10">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-teal"
                    style={{
                      height: 8,
                      animation: `bar-${i + 1} ${0.8 + i * 0.1}s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-1 h-10">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className={`w-[3px] rounded-full transition-colors duration-500 ${phase === "raw" ? "bg-white/30" : "bg-teal/70"}`}
                    style={{ animationPlayState: phase === "raw" ? "running" : "paused" }}
                  >
                    <div
                      className={`w-full rounded-full ${phase === "raw" ? "bg-white/40" : "bg-teal/70"} wave-bar-${i}`}
                      style={{ minHeight: "4px" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Text display */}
            <div className="w-[180px] md:w-[210px] min-h-[72px] flex items-center justify-center">
              <p
                className={`text-xs leading-relaxed text-center transition-all duration-500 ${
                  phase === "polished"
                    ? "text-white font-medium"
                    : phase === "processing"
                    ? "text-teal/70 italic text-[10px]"
                    : "text-text-tertiary"
                }`}
              >
                {phase === "processing" ? (
                  <span>WhisperKit · Apple&nbsp;FM&nbsp;↻</span>
                ) : (
                  <>
                    {displayText}
                    <span className="animate-cursor text-teal">|</span>
                  </>
                )}
              </p>
            </div>

            {/* Phase label */}
            <div className={`text-[10px] font-medium tracking-widest uppercase transition-all duration-500 ${
              phase === "polished" ? "text-teal" : phase === "processing" ? "text-violet/70" : "text-text-tertiary"
            }`}>
              {phase === "raw" ? dict.hero.phaseRaw : phase === "processing" ? dict.hero.phaseProcessing : dict.hero.phasePolished}
            </div>
          </div>

          {/* "Stays here" label on the ring */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-teal/50" />
            <span className="text-[10px] font-medium tracking-widest uppercase text-teal/60">{dict.hero.staysInside}</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-teal/50" />
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="animate-fade-in-up-delay-3 relative z-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://apps.apple.com/us/app/solo-voice/id6758554606"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          {dict.hero.ctaMac}
        </a>
      </div>

      {/* Platform badge */}
      <div className="animate-fade-in-up-delay-4 relative z-10 mt-5 flex items-center gap-2 text-sm text-text-tertiary">
        <span>{dict.hero.badge}</span>
      </div>

      {/* Trust badges */}
      <div className="animate-fade-in-up-delay-4 relative z-10 mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-5 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
            <img src="/eu2.svg" alt="EU Data Protection" width={40} height={40} className="drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]" />
            <span className="text-sm font-medium text-white/60">{dict.hero.trustBadgeEU}</span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 sm:block" />
          <div className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
            <img src="/GDPR.svg" alt="GDPR Compliant" width={40} height={40} className="invert drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]" />
            <span className="text-sm font-medium text-white/60">{dict.hero.trustBadgeGDPR}</span>
          </div>
          <div className="hidden h-6 w-px bg-white/10 sm:block" />
          <div className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
            <img src="/madegermany.svg" alt="Made in Germany" width={40} height={40} className="drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]" />
            <span className="text-sm font-medium text-white/60">{dict.hero.trustBadgeMadeGermany}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
