"use client";

import { useDictionary } from "@/lib/DictionaryProvider";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

function StepIcon({ icon }: { icon: string }) {
  const props = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (icon) {
    case "mic":
      return (
        <svg {...props}>
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
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
    case "sparkle":
      return (
        <img src="/apple-foundation-models.png" alt="Apple Foundation Models" width={40} height={40} className="rounded-md" />
      );
    case "document":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    default:
      return null;
  }
}

const colorMap = {
  neutral: {
    bg: "bg-white/[0.03]",
    border: "border-white/[0.06]",
    text: "text-text-secondary",
    glow: "",
  },
  indigo: {
    bg: "bg-indigo/[0.08]",
    border: "border-indigo/20",
    text: "text-indigo",
    glow: "shadow-[0_0_40px_rgba(129,140,248,0.06)]",
  },
  violet: {
    bg: "bg-violet/[0.08]",
    border: "border-violet/20",
    text: "text-violet",
    glow: "shadow-[0_0_40px_rgba(167,139,250,0.06)]",
  },
};

const stepColors = ["neutral", "indigo", "violet", "neutral"] as const;
const stepIcons = ["mic", "waveform", "sparkle", "document"] as const;

function Arrow() {
  return (
    <div className="flex items-center justify-center text-text-tertiary">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden lg:block"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block lg:hidden"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    </div>
  );
}

export default function PipelineDiagram() {
  const ref = useScrollAnimation<HTMLElement>();
  const { dict } = useDictionary();

  return (
    <section ref={ref} id="pipeline" className="scroll-reveal relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-sm font-medium tracking-widest uppercase text-text-tertiary">
          {dict.pipeline.sectionLabel}
        </h2>
        <p className="mx-auto mb-16 max-w-lg text-2xl font-semibold text-white md:text-3xl">
          {dict.pipeline.title}
        </p>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          {dict.pipeline.steps.map((step, i) => {
            const colors = colorMap[stepColors[i]];
            return (
              <div key={step.label} className="flex flex-col items-center gap-4 lg:flex-row">
                <div
                  className={`flex flex-col items-center rounded-2xl border ${colors.border} ${colors.bg} ${colors.glow} px-8 py-6 text-center transition-all duration-500 hover:scale-[1.03]`}
                  style={{ minWidth: 160 }}
                >
                  <div className={colors.text}>
                    <StepIcon icon={stepIcons[i]} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    {step.label}
                  </p>
                  {"detail" in step && step.detail && (
                    <p className={`mt-1 text-xs ${colors.text}`}>
                      {step.detail}
                    </p>
                  )}
                </div>
                {i < dict.pipeline.steps.length - 1 && <Arrow />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
