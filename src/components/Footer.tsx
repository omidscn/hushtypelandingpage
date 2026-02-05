"use client";

import { useDictionary } from "@/lib/DictionaryProvider";

export default function Footer() {
  const { dict, locale } = useDictionary();
  const prefix = locale === "de" ? "/de" : "";
  const copyright = dict.footer.copyright.replace(
    "{year}",
    String(new Date().getFullYear())
  );

  return (
    <footer className="relative z-10 border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-sm text-text-tertiary sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          <span className="font-semibold text-text-secondary">
            {dict.footer.brand}
          </span>
          <a
            href={`${prefix}/privacy`}
            className="transition-colors duration-300 hover:text-text-secondary"
          >
            {dict.footer.privacyPolicy}
          </a>
          <a
            href={`${prefix}/contact`}
            className="transition-colors duration-300 hover:text-text-secondary"
          >
            {dict.footer.contact}
          </a>
        </div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
