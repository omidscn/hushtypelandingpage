"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/lib/DictionaryProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { dict, locale } = useDictionary();
  const pathname = usePathname();

  const isGerman = locale === "de";
  const switchPath = isGerman
    ? pathname.replace(/^\/de/, "") || "/"
    : `/de${pathname}`;
  const switchLabel = isGerman ? "EN" : "DE";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href={isGerman ? "/de" : "/"} className="flex items-center gap-2.5 group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
            <path d="M2 10v3"/>
            <path d="M6 6v11"/>
            <path d="M10 3v18"/>
            <path d="M14 8v7"/>
            <path d="M18 5v13"/>
            <path d="M22 10v3"/>
          </svg>
          <span className="text-lg font-semibold tracking-tight text-white">{dict.header.brand}</span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href={switchPath}
            className="text-sm font-medium text-white/40 transition-colors hover:text-white/80"
          >
            {switchLabel}
          </a>
          <a
            href="https://apps.apple.com/us/app/solo-voice/id6758554606"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-teal-border bg-teal-muted px-5 py-2 text-sm font-medium text-teal transition-all duration-300 hover:bg-teal/15 hover:border-teal/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            {dict.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
