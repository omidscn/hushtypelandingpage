# CLAUDE.md

## Project Overview

Marketing landing page for **Solo**, a privacy-first voice dictation app for macOS and iOS. Solo transcribes speech via WhisperKit and rewrites it with Apple Foundation Models — entirely on-device.

> The main app codebase lives at `../hushtype/`. This repo is the static landing page only.

## Tech Stack

- **Next.js 15** (App Router) with static export (`output: 'export'`)
- **TypeScript**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Inter** font via `next/font/google`
- All icons are inline SVGs — no icon library dependencies

## Build & Run

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Static export to out/
npx serve out        # Preview production build
```

The build produces a fully static site in `out/` that can be deployed anywhere (Vercel, Netlify, S3, GitHub Pages, etc.). No server runtime required.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          Root layout, Inter font, OG/Twitter metadata
│   ├── page.tsx            Composes all sections top-to-bottom
│   └── globals.css         Tailwind directives, color theme, fade-in keyframes
├── components/
│   ├── Header.tsx          Sticky frosted-glass nav (backdrop-blur on scroll)
│   ├── Hero.tsx            Main tagline + dual CTA buttons
│   ├── PlatformCards.tsx   macOS / iOS App / iOS Keyboard — 3 cards
│   ├── PipelineDiagram.tsx Two-model flow: Mic → WhisperKit → Apple FM → Text
│   ├── PrivacySection.tsx  Dark background, three privacy points
│   ├── FeaturesGrid.tsx    2x3 feature grid
│   ├── CTASection.tsx      Download / waitlist section
│   └── Footer.tsx          Minimal footer with links
└── lib/
    ├── constants.ts        All marketing copy centralized in one file
    └── useScrollAnimation.ts  Intersection Observer hook for fade-in
```

## Page Sections

1. **Header** — Sticky, frosted glass on scroll, "Solo" wordmark + Download CTA
2. **Hero** — "Your voice. Your device. Your words." + Mac/iPhone download buttons
3. **Platform Cards** — macOS (menu bar, Option+Space), iOS App (tap to record, iCloud), iOS Keyboard (mic button, direct insertion)
4. **Pipeline Diagram** — Visual flow: Mic → WhisperKit (Speech→Text) → Apple Foundation Models (AI Rewrite) → Polished Text
5. **Privacy Section** — Dark bg, three points: zero cloud, no network, no analytics
6. **Features Grid** — Writing Styles, Works Everywhere, History & Sync, Silence Detection, Instant Results, Apple Silicon Native
7. **CTA Section** — Download buttons (placeholder hrefs)
8. **Footer** — Solo | Privacy Policy | Contact | Copyright

## Design Tokens

Defined in `globals.css` via `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#FAFAFA` | Page background |
| `--color-bg-dark` | `#0A0A0A` | Privacy section background |
| `--color-accent` | `#3B82F6` | Primary blue, CTA buttons |
| `--color-accent-hover` | `#2563EB` | Button hover state |
| `--color-indigo` | `#6366F1` | WhisperKit pipeline stage |
| `--color-violet` | `#8B5CF6` | Apple FM pipeline stage |
| `--color-text` | `#111111` | Primary text |
| `--color-text-muted` | `#6B7280` | Secondary text |
| `--color-border` | `#E5E7EB` | Card borders |

## Conventions

- **All copy lives in `constants.ts`** — never hardcode marketing text in components (section headings are the one exception for readability)
- **Client components** use `"use client"` directive — needed for scroll listeners and Intersection Observer
- **Scroll animations** use `useScrollAnimation` hook (Intersection Observer, no heavy libraries)
- **Responsive breakpoints**: mobile-first, `md` (768px) for 2-col, `lg` (1024px) for 3-col
- **No external icon libraries** — all icons are inline `<svg>` elements within components
- **Placeholder links** use `href="#"` or `href="#download"` — replace with real App Store URLs when available

## What This Page Communicates About Solo

The landing page reflects these facts about the main Solo app:

- **Two-model pipeline**: WhisperKit for speech-to-text, Apple Foundation Models for AI rewriting
- **100% on-device**: No cloud processing, no network calls, no analytics
- **Three surfaces**: macOS menu bar app (Option+Space hotkey), iOS standalone app, iOS keyboard extension
- **macOS**: Text inserted at cursor via Accessibility API
- **iOS App**: Results copied to clipboard, history synced via iCloud
- **iOS Keyboard**: Mic button triggers recording in main app, result auto-inserted via `textDocumentProxy`
- **System requirements**: macOS 26+ / iOS 26+ (Apple Foundation Models dependency)
- **Apple Silicon native**: WhisperKit runs on Neural Engine, Foundation Models on-device
