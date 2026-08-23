# Dr. Preethi Ramadoss — Website

Phase 1 scaffold: Next.js + TypeScript + Tailwind with initial homepage components.

Run locally:

```bash
npm install
npm run dev
```

This repo contains a content folder for structured data and reusable components.

Environment variables (placeholders):

- `NEXT_PUBLIC_SITE_URL` — canonical site URL used for sitemap generation.
- `NEXT_PUBLIC_GA_ID` — Google Analytics Measurement ID (optional).
- `NEXT_PUBLIC_LINKEDIN_INSIGHT_ID` — LinkedIn Insight Tag ID (optional).

The sitemap is available at `/sitemap.xml` and is generated from the static routes and `content/innovations.ts`.
