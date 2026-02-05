import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { DictionaryProvider } from "@/lib/DictionaryProvider";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary("en");
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
      url: "https://solovoice.eu",
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

export default async function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary("en");
  return (
    <DictionaryProvider dict={dict} locale="en">
      {children}
    </DictionaryProvider>
  );
}
