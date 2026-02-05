"use client";

import { useDictionary } from "@/lib/DictionaryProvider";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

function PrivacyIcon({ icon }: { icon: string }) {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (icon) {
    case "cloud-off":
      return (
        <svg {...props}>
          <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      );
    case "wifi-off":
      return (
        <svg {...props}>
          <line x1="1" y1="1" x2="23" y2="23" />
          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
          <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      );
    case "eye-off":
      return (
        <svg {...props}>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      );
    default:
      return null;
  }
}

const pointIcons = ["cloud-off", "wifi-off", "eye-off"] as const;

export default function PrivacySection() {
  const ref = useScrollAnimation<HTMLElement>();
  const { dict } = useDictionary();

  return (
    <section ref={ref} className="scroll-reveal relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-border bg-bg-card p-10 md:p-16">
          <div className="text-center">
            <h2 className="mb-4 text-sm font-medium tracking-widest uppercase text-text-tertiary">
              {dict.privacy.sectionLabel}
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-2xl font-semibold text-white md:text-3xl">
              {dict.privacy.title}
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {dict.privacy.points.map((point, i) => (
              <div key={point.title} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] text-text-secondary">
                  <PrivacyIcon icon={pointIcons[i]} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
