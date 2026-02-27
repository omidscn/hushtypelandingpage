"use client";

import { useDictionary } from "@/lib/DictionaryProvider";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const APP_STORE_URL = "https://apps.apple.com/us/app/solo-voice/id6758554606";

export default function CTASection() {
  const ref = useScrollAnimation<HTMLElement>();
  const { dict } = useDictionary();

  return (
    <section ref={ref} id="download" className="scroll-reveal relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-teal-border bg-bg-card p-12 text-center md:p-20">
          {/* Teal radial glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.06),transparent_70%)]" />
          </div>
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {dict.cta.headline}
            </h2>
            <p className="mt-4 text-lg text-text-secondary">{dict.cta.subhead}</p>

            <div className="mt-10 flex justify-center">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {dict.cta.downloadButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
