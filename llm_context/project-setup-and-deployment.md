# Project Setup & Deployment Guide

## Overview

This is a **landing page** for NotionBrain, a Notion productivity system. The site is live at `notionbrain.space`.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Analytics:** PostHog (`posthog-js`)

## Project Structure

```
notionbrain/
├── src/
│   ├── main.tsx               # Entry point — PostHog is initialized here
│   ├── App.tsx                # Root component — assembles all page sections
│   ├── index.css              # Global styles
│   ├── components/            # One file per landing page section
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   └── TestimonialsSection.tsx  # Currently commented out in App.tsx
│   └── content/
│       └── siteContent.ts     # Centralized copy/content for the site
├── public/                    # Static assets — copied as-is to build output
│   ├── CNAME                  # Contains "notionbrain.space" — critical for custom domain
│   └── *.png                  # Images used across the site
├── docs/                      # Build output — served by GitHub Pages (DO NOT edit manually)
├── llm_context/               # Context files for LLMs working on this project
├── vite.config.ts             # Build config — outDir is set to "docs"
└── package.json
```

## Analytics — PostHog

PostHog is initialized in `src/main.tsx` before the React app mounts. It provides:

- Automatic pageview tracking
- Session replay (recordings of real user sessions)
- Autocapture (clicks, form interactions)
- Traffic attribution via UTM parameters

The project API key is already set in `main.tsx`. The PostHog dashboard is at `app.posthog.com`.

## Hosting — GitHub Pages

The site is hosted on GitHub Pages with the following configuration:

- **Branch:** `main`
- **Folder:** `/docs`
- **Custom domain:** `notionbrain.space`
- **HTTPS:** Enforced

GitHub Pages serves the static files from the `docs/` folder on the `main` branch. It does **not** build the TypeScript/React source — that must be done manually before pushing.

## How to Deploy Changes

Every time you make changes to the source code, follow these steps:

### 1. Make your changes in `src/`

Edit components, content, or styles as needed.

### 2. Build the project

```bash
npm run build
```

This compiles TypeScript to JavaScript and outputs the result to `docs/`. The `CNAME` file is automatically copied from `public/CNAME` to `docs/CNAME` during the build.

### 3. Commit and push

```bash
git add .
git commit -m "your message"
git push
```

GitHub Pages automatically detects the new files in `docs/` and redeploys the site within ~1 minute.

## Important: CNAME File

The `CNAME` file tells GitHub Pages which custom domain to use. It must exist at `docs/CNAME` after every build.

- The source of truth is `public/CNAME` (contains `notionbrain.space`)
- Vite copies everything in `public/` to `docs/` on every build
- **Never edit `docs/CNAME` directly** — it will be overwritten on the next build
- **Never delete `public/CNAME`** — the custom domain will break on the next deploy

## Local Development

```bash
npm run dev
```

Starts a local dev server (usually at `http://localhost:5173`). Changes hot-reload instantly. This does not affect the `docs/` folder or the live site.
