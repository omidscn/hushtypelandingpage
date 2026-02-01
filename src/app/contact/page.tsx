import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioWaveBackground from "@/components/AudioWaveBackground";

export const metadata: Metadata = {
  title: "Contact — Solo",
  description:
    "Get in touch with the Solo team. We'd love to hear from you.",
};

export default function Contact() {
  return (
    <>
      <AudioWaveBackground />
      <Header />
      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-text-secondary">
          Have a question, feedback, or just want to say hello? We&apos;d love
          to hear from you.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl border border-border bg-bg-card p-8 card-glow">
            <h2 className="text-lg font-semibold text-white">Get in Touch</h2>
            <div className="mt-6 space-y-6 text-[15px] text-text-secondary">
              <div>
                <p className="text-sm text-text-tertiary">CEO</p>
                <p className="mt-1 text-white">Omid Bicker</p>
              </div>
              <div>
                <p className="text-sm text-text-tertiary">Email</p>
                <a
                  href="mailto:omid@deviify.com"
                  className="mt-1 inline-flex items-center gap-2 text-white underline decoration-white/20 underline-offset-2 transition-colors hover:decoration-white/50"
                >
                  <svg
                    className="h-4 w-4 text-text-tertiary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  omid@deviify.com
                </a>
              </div>
              <p className="text-sm leading-relaxed text-text-tertiary">
                You can also reach us directly via email if you prefer not to
                use the form.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-bg-card p-8 card-glow">
            <h2 className="text-lg font-semibold text-white">Send a Message</h2>
            <form
              action="https://formspree.io/f/mlglgjjv"
              method="POST"
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-text-tertiary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-2.5 text-[15px] text-white placeholder-text-tertiary outline-none transition-colors focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-text-tertiary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-2.5 text-[15px] text-white placeholder-text-tertiary outline-none transition-colors focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-text-tertiary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-2.5 text-[15px] text-white placeholder-text-tertiary outline-none transition-colors focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
