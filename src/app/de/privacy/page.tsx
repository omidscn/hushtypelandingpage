import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioWaveBackground from "@/components/AudioWaveBackground";
import PrivacyPageContent from "@/components/PrivacyPageContent";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary("de");
  return {
    title: dict.privacyPage.metaTitle,
    description: dict.privacyPage.metaDescription,
  };
}

export default function PrivacyPolicy() {
  return (
    <>
      <AudioWaveBackground />
      <Header />
      <PrivacyPageContent />
      <Footer />
    </>
  );
}
