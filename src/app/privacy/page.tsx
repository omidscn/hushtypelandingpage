import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioWaveBackground from "@/components/AudioWaveBackground";

export const metadata: Metadata = {
  title: "Privacy Policy — Solo",
  description:
    "Solo's privacy policy. All processing happens on your device. No data is collected, transmitted, or stored remotely.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <AudioWaveBackground />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-text-tertiary">
          Last updated: February 1, 2025
        </p>

        <div className="mt-12 space-y-12 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">Overview</h2>
            <p>
              Solo is designed with a fundamental principle: your data never
              leaves your device. There is no cloud component, no remote server,
              and no analytics infrastructure. This policy explains what data
              Solo accesses, how it is processed, and where it is stored.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Data Processing
            </h2>
            <p>
              Solo uses two on-device AI models to function:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">WhisperKit</strong> — converts
                your speech into text. The audio is processed entirely on your
                device using Apple&apos;s Neural Engine and is never transmitted
                over a network.
              </li>
              <li>
                <strong className="text-white">Apple Foundation Models</strong>{" "}
                — rewrites the raw transcript into polished text. This model
                runs locally on your Apple Silicon chip.
              </li>
            </ul>
            <p className="mt-4">
              No audio recordings, transcripts, or rewritten text are sent to
              any external server — not to us, not to Apple, and not to any
              third party.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Microphone Access
            </h2>
            <p>
              Solo requires microphone access to record your voice for
              transcription. Audio is captured in-memory, processed by
              WhisperKit, and discarded immediately after transcription. No audio
              files are saved to disk or transmitted anywhere.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              History & iCloud Sync
            </h2>
            <p>
              Solo stores a local history of your transcriptions so you can
              review and reuse them. If you are signed into iCloud, this history
              is synced across your Apple devices using iCloud Key-Value Storage
              (iCloud KVS). This sync is handled entirely by Apple&apos;s
              infrastructure and is subject to{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-white underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-white/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple&apos;s Privacy Policy
              </a>
              .
            </p>
            <p className="mt-4">
              History entries are retained for up to 90 days and limited to 50
              entries. You can delete your history at any time from within the
              app.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Keyboard Extension
            </h2>
            <p>
              Solo includes a keyboard extension for iOS and iPadOS. The
              keyboard extension requests Open Access solely to communicate with
              the main Solo app via a shared App Group container. It does not
              access the network, and no keystrokes or text input are collected
              or transmitted.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Network Usage
            </h2>
            <p>
              Solo does not make any network requests during normal operation.
              The macOS app includes a network client entitlement solely for
              initial model downloads via WhisperKit, which fetches the speech
              recognition model from Apple&apos;s servers on first launch. After
              the model is cached locally, no further network access is needed.
              Solo works fully offline.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Analytics & Tracking
            </h2>
            <p>
              Solo does not include any analytics frameworks, crash reporters,
              advertising SDKs, or third-party tracking code. We do not collect
              usage data, device information, or any form of telemetry.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Third-Party Services
            </h2>
            <p>
              Solo does not integrate with any third-party services. The only
              external dependency is Apple&apos;s iCloud KVS for optional history
              sync, which is governed by your Apple ID settings and Apple&apos;s
              own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Data Storage
            </h2>
            <p>All data is stored locally on your device:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">macOS</strong> — History is
                stored as a JSON file in the app&apos;s Application Support
                directory within the macOS sandbox.
              </li>
              <li>
                <strong className="text-white">iOS &amp; iPadOS</strong> —
                History is stored in the App Group shared container, accessible
                only by Solo and its keyboard extension.
              </li>
              <li>
                <strong className="text-white">User preferences</strong>{" "}
                (writing style, custom instructions) are stored in UserDefaults
                on your device.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Children&apos;s Privacy
            </h2>
            <p>
              Solo does not collect any personal information from anyone,
              including children under 13. Since no data is transmitted from the
              app, there is no mechanism by which personal information could be
              collected.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Changes to This Policy
            </h2>
            <p>
              If this privacy policy is updated, the changes will be posted on
              this page with a revised date. Because Solo collects no data,
              changes are unlikely to affect your privacy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a
                href="mailto:hello@hushtype.com"
                className="text-white underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-white/50"
              >
                hello@hushtype.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
