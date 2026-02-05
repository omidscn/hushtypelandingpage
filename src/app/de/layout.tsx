import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { DictionaryProvider } from "@/lib/DictionaryProvider";
import { SetLang } from "@/components/SetLang";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary("de");
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
      url: "https://solovoice.eu/de",
      siteName: "Solo",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
    },
  };
}

export default async function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("de");
  return (
    <DictionaryProvider dict={dict} locale="de">
      <SetLang locale="de" />
      {children}
    </DictionaryProvider>
  );
}
