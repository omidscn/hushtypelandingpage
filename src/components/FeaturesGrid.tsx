"use client";

import { FEATURES } from "@/lib/constants";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

function FeatureIcon({ icon }: { icon: string }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (icon) {
    case "pen":
      return (
        <svg {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case "grid":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case "cloud":
      return (
        <img src="/icloud.png" alt="iCloud" width={22} height={22} className="rounded" />
      );
    case "waveform":
      return (
        <svg {...props}>
          <path d="M2 10v3"/>
          <path d="M6 6v11"/>
          <path d="M10 3v18"/>
          <path d="M14 8v7"/>
          <path d="M18 5v13"/>
          <path d="M22 10v3"/>
        </svg>
      );
    case "zap":
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "chip":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FeaturesGrid() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="scroll-reveal relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-sm font-medium tracking-widest uppercase text-text-tertiary">
          Features
        </h2>
        <p className="mx-auto mb-16 max-w-lg text-center text-2xl font-semibold text-white md:text-3xl">
          Everything you need to dictate
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="card-glow group rounded-2xl border border-border bg-bg-card p-7 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] text-text-secondary transition-colors duration-300 group-hover:text-white">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
