import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solovoice-9ce17.web.app"),
  title: "Solo — On-Device Voice Transcription & AI Rewriting",
  description:
    "Solo transcribes your speech and rewrites it with AI — entirely on your device. No cloud. No latency. No compromise. Built for Apple Silicon.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Solo — Private Voice Transcription & AI Rewriting for Mac & iOS",
    description:
      "Solo transcribes your speech and rewrites it with AI — entirely on your device. No cloud processing, no data collection. Built natively for Apple Silicon.",
    url: "https://solovoice-9ce17.web.app",
    siteName: "Solo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solo — On-device voice transcription and AI rewriting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo — Private Voice Transcription & AI Rewriting for Mac & iOS",
    description:
      "Solo transcribes your speech and rewrites it with AI — entirely on your device. No cloud processing, no data collection. Built natively for Apple Silicon.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
