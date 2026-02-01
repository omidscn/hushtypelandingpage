import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
    title: "Solo — Your voice. Your device. Your words.",
    description:
      "On-device voice transcription and AI rewriting. Private, fast, and built for Apple Silicon.",
    url: "https://hushtype.com",
    siteName: "Solo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo — Your voice. Your device. Your words.",
    description:
      "On-device voice transcription and AI rewriting. Private, fast, and built for Apple Silicon.",
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
