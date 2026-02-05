"use client";

import { useDictionary } from "@/lib/DictionaryProvider";

export default function PrivacyPageContent() {
  const { dict } = useDictionary();
  const p = dict.privacyPage;

  return (
    <main className="relative z-10 mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {p.title}
      </h1>
      <p className="mt-4 text-sm text-text-tertiary">{p.lastUpdated}</p>

      <div className="mt-12 space-y-12 text-[15px] leading-relaxed text-text-secondary">
        {/* Overview */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.overview.heading}
          </h2>
          <p>{p.overview.text}</p>
        </section>

        {/* Data Processing */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.dataProcessing.heading}
          </h2>
          <p>{p.dataProcessing.intro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-white">WhisperKit</strong> &mdash;{" "}
              {p.dataProcessing.whisperKit}
            </li>
            <li>
              <strong className="text-white">Apple Foundation Models</strong>{" "}
              &mdash; {p.dataProcessing.foundationModels}
            </li>
          </ul>
          <p className="mt-4">{p.dataProcessing.afterList}</p>
        </section>

        {/* Microphone Access */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.microphoneAccess.heading}
          </h2>
          <p>{p.microphoneAccess.text}</p>
        </section>

        {/* History & iCloud Sync */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.historySync.heading}
          </h2>
          <p>
            {p.historySync.textBefore}
            <a
              href="https://www.apple.com/legal/privacy/"
              className="text-white underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-white/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.historySync.applePolicyLink}
            </a>
            {p.historySync.textAfter}
          </p>
          <p className="mt-4">{p.historySync.text2}</p>
        </section>

        {/* Keyboard Extension */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.keyboardExtension.heading}
          </h2>
          <p>{p.keyboardExtension.text}</p>
        </section>

        {/* Network Usage */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.networkUsage.heading}
          </h2>
          <p>{p.networkUsage.text}</p>
        </section>

        {/* Analytics & Tracking */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.analytics.heading}
          </h2>
          <p>{p.analytics.text}</p>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.thirdParty.heading}
          </h2>
          <p>{p.thirdParty.text}</p>
        </section>

        {/* Data Storage */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.dataStorage.heading}
          </h2>
          <p>{p.dataStorage.intro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-white">macOS</strong> &mdash;{" "}
              {p.dataStorage.macOS}
            </li>
            <li>
              <strong className="text-white">iOS &amp; iPadOS</strong> &mdash;{" "}
              {p.dataStorage.iOS}
            </li>
            <li>
              <strong className="text-white">
                {p.dataStorage.preferencesLabel}
              </strong>{" "}
              {p.dataStorage.preferences}
            </li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.childrenPrivacy.heading}
          </h2>
          <p>{p.childrenPrivacy.text}</p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.changes.heading}
          </h2>
          <p>{p.changes.text}</p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-white">
            {p.privacyContact.heading}
          </h2>
          <p>
            {p.privacyContact.textBefore}
            <a
              href="mailto:omid@deviify.com"
              className="text-white underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-white/50"
            >
              omid@deviify.com
            </a>
            {p.privacyContact.textAfter}
          </p>
        </section>
      </div>
    </main>
  );
}
