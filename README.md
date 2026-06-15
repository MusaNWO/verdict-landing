# Verdict — Landing (Next.js)

The Verdict marketing landing page, ported from the original static HTML/CSS/JS bundle into a Next.js 14 (App Router) project with React + TypeScript.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Plain CSS (`app/globals.css`) — a 1:1 port of the original `landing.css`
- Google Fonts: Bricolage Grotesque, Schibsted Grotesk

## Run it

```bash
cd verdict-landing
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
verdict-landing/
├── app/
│   ├── globals.css        # ported from landing.css
│   ├── layout.tsx         # html shell, font links, metadata
│   └── page.tsx           # composes all sections
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── HowItWorks.tsx
│   ├── Mechanics.tsx      # uses WheelButton (client) for the spinner
│   ├── WheelButton.tsx    # 'use client' — interactive demo wheel
│   ├── ProSplit.tsx
│   ├── Teams.tsx
│   ├── Pricing.tsx
│   ├── Quotes.tsx
│   ├── FinalCta.tsx
│   ├── Footer.tsx
│   └── LandingEffects.tsx # 'use client' — scroll reveal, sticky-nav state, confetti
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## What was ported

- All sections from `Verdict - Landing (bundle-src).html` (nav, hero, stats bar, how it works, mechanics, Pro split, Teams, pricing, quotes, final CTA, footer).
- Full `landing.css` — variables, components, responsive breakpoints.
- All four behaviours from `landing.js`:
  - Sticky-nav scrolled border state
  - `IntersectionObserver`-driven scroll reveal animations
  - One-shot hero confetti burst (respects `prefers-reduced-motion`)
  - Tap-to-spin demo wheel in the Mechanics section
