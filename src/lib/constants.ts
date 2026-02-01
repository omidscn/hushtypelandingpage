export const SITE = {
  name: "Solo",
  tagline: "Your voice. Your device. Your words.",
  description:
    "On-device voice transcription and AI rewriting. Private, fast, and built for Apple Silicon.",
  url: "https://hushtype.com",
};

export const HERO = {
  headline: "Your voice. Your device. Your words.",
  subhead:
    "Solo transcribes your speech and rewrites it with AI — entirely on your device. No cloud. No latency. No compromise.",
  ctaMac: "Join the Waitlist",
  ctaIphone: "Learn More",
  badge: "Be the first — macOS 26+ / iOS 26+ / iPadOS 26+",
};

export const PLATFORM_CARDS = [
  {
    title: "macOS",
    subtitle: "Menu bar app",
    features: [
      "Lives in your menu bar — always one shortcut away",
      "Press Option + Space to start dictating",
      "Text appears right at your cursor",
    ],
    icon: "mac" as const,
  },
  {
    title: "iPhone & iPad",
    subtitle: "Standalone app",
    features: [
      "Tap to record, release to transcribe",
      "One-tap copy to clipboard",
      "iCloud history synced across devices",
    ],
    icon: "iphone" as const,
  },
  {
    title: "iOS & iPadOS Keyboard",
    subtitle: "System keyboard extension",
    features: [
      "Mic button on your keyboard",
      "Direct text insertion",
      "Works in any app",
    ],
    icon: "keyboard" as const,
  },
];

export const PIPELINE = {
  title: "Two AI models. One seamless flow.",
  steps: [
    { label: "Your Voice", icon: "mic" as const, color: "neutral" as const },
    {
      label: "WhisperKit",
      detail: "Speech → Text",
      icon: "waveform" as const,
      color: "indigo" as const,
    },
    {
      label: "Apple Foundation Models",
      detail: "AI Rewrite",
      icon: "sparkle" as const,
      color: "violet" as const,
    },
    {
      label: "Polished Text",
      icon: "document" as const,
      color: "neutral" as const,
    },
  ],
};

export const PRIVACY = {
  title: "Private by architecture, not by promise.",
  points: [
    {
      icon: "cloud-off" as const,
      title: "Zero cloud processing",
      description: "Every model runs on your Apple Silicon chip. Your words never leave your device.",
    },
    {
      icon: "wifi-off" as const,
      title: "No network required",
      description: "Works in airplane mode, offline, or behind any firewall. No internet needed.",
    },
    {
      icon: "eye-off" as const,
      title: "No analytics or tracking",
      description: "No telemetry, no usage data, no third-party SDKs. What you say stays with you.",
    },
  ],
};

export const FEATURES = [
  {
    title: "Writing Styles",
    description: "Choose from casual, professional, concise, or detailed rewrites to match your tone.",
    icon: "pen" as const,
  },
  {
    title: "Works Everywhere",
    description: "Use Solo in any text field — emails, messages, documents, code editors, and more.",
    icon: "grid" as const,
  },
  {
    title: "History & Sync",
    description: "Every transcription is saved and synced across your Apple devices via iCloud.",
    icon: "cloud" as const,
  },
  {
    title: "Apple Silicon Native",
    description: "Built from the ground up for M-series and A-series chips. Blazingly efficient.",
    icon: "chip" as const,
  },
];

export const CTA = {
  headline: "Ready to speak freely?",
  subhead: "Be the first to try Solo. Sign up for early access.",
  formPlaceholder: "you@example.com",
  formButton: "Join the Waitlist",
  successHeadline: "You're on the list!",
  successMessage: "We'll notify you when Solo is ready.",
};

export const FOOTER = {
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact", href: "/contact" },
  ],
  copyright: `© ${new Date().getFullYear()} Solo. All rights reserved.`,
};
