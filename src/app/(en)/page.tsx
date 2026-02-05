import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformCards from "@/components/PlatformCards";
import PipelineDiagram from "@/components/PipelineDiagram";
import PrivacySection from "@/components/PrivacySection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AudioWaveBackground from "@/components/AudioWaveBackground";

export default function Home() {
  return (
    <>
      <AudioWaveBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <PlatformCards />
        <PipelineDiagram />
        <PrivacySection />
        <FeaturesGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
