"use client";

import { useDictionary } from "@/lib/DictionaryProvider";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

function PlatformIcon({ icon }: { icon: string }) {
  const props = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (icon === "mac") {
    return (
      <svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  if (icon === "iphone") {
    return (
      <svg {...props}>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M10 16h4" />
    </svg>
  );
}

const cardIcons = ["mac", "iphone", "keyboard"] as const;

export default function PlatformCards() {
  const ref = useScrollAnimation<HTMLElement>();
  const { dict } = useDictionary();

  return (
    <section ref={ref} className="scroll-reveal relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-sm font-medium tracking-widest uppercase text-text-tertiary">
          {dict.platformCards.sectionLabel}
        </h2>
        <p className="mx-auto mb-4 max-w-lg text-center text-2xl font-semibold text-white md:text-3xl">
          {dict.platformCards.sectionTitle}
        </p>
        <div className="mb-16 flex items-center justify-center gap-2">
          <img src="/icloud.png" alt="iCloud Sync" width={35} height={35} className="rounded" />
          <p className="text-sm text-text-tertiary">{dict.platformCards.syncLabel}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.platformCards.cards.map((card, i) => (
            <div
              key={card.title}
              className="card-glow group rounded-2xl border border-border bg-bg-card p-8 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-text-secondary transition-colors duration-300 group-hover:text-white">
                <PlatformIcon icon={cardIcons[i]} />
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-1 text-sm text-text-tertiary">{card.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {card.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-text-tertiary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
