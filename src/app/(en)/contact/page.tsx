import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioWaveBackground from "@/components/AudioWaveBackground";
import ContactPageContent from "@/components/ContactPageContent";
import { getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary("en");
  return {
    title: dict.contactPage.metaTitle,
    description: dict.contactPage.metaDescription,
  };
}

export default function Contact() {
  return (
    <>
      <AudioWaveBackground />
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  );
}
