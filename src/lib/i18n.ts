import type EnMessages from "../messages/en.json";

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Dictionary = typeof EnMessages;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("../messages/en.json").then((m) => m.default),
  de: () => import("../messages/de.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
