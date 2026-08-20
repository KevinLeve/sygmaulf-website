# Sygmaulf — Website

Official website for **Sygmaulf** — Indian gaming creator, esports personality,
competitive player, host, and community builder.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, credibility strip, capabilities, selected work, latest media |
| `/about` | Bio, journey timeline, full achievements list, values |
| `/media` | Filterable media feed + live stream status widget |
| `/work-with-sygmaulf` | Services, 6-step campaign builder, full commercial enquiry form |
| `/events` | Competitive portfolio, sourced from official tournament documents |
| `/creator-network` | Ecosystem/positioning page (roster ships empty until real names are supplied) |
| `/media-kit` | One-page press/brand kit: bio, stats, platforms, achievements, contact |
| `/community` | Community channels (Discord, socials, Nomads Province) |
| `/contact` | Routed contact form (general / business / events / creator network / media) |

## Content is centralized in `/data`

Every fact on the site — achievements, events, platforms, stats, services,
contact emails — lives in a typed file under `/data`. **Nothing is hard-coded
inline in a page or component.** To update content, edit the relevant file in
`/data`; no other code changes are needed.

Every record carries a `verificationStatus`:

- **`verified`** — confirmed against a supplied source document or link (shown
  with a gold "Verified" badge)
- **`pending`** — supplied by the client but not independently verified
  ("Client-Supplied" badge)
- **`placeholder`** — not supplied at all yet (renders as "Coming Soon" /
  "Link pending" instead of a fake link or number)

**No social media URLs, subscriber counts, or view counts were supplied** in
the brief, so those fields ship as `null`/placeholder rather than invented
values. Fill them in in `/data/platforms.ts`, `/data/stats.ts`, and
`/data/community.ts` as soon as they're available — no other code needs to
change.

The four supplied tournament PDFs (WCS 2026, HOK Kings' Arise Bengaluru/Mumbai,
HOK CMF 2026) were read directly and their match results are reproduced in
`/data/events.ts` exactly as stated in those documents, each tagged with its
source file.

## Live streaming status

`/api/live` checks YouTube and/or Twitch for an active stream and the `Media`
page polls it every 60 seconds. Both providers are optional and independent —
configure one, both, or neither:

- **YouTube**: `YOUTUBE_API_KEY`, `YOUTUBE_CHANNEL_ID`
- **Twitch**: `TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET`, `TWITCH_CHANNEL_LOGIN`

With none configured, the widget shows an honest "Currently Offline" state
instead of erroring.

## Forms & email delivery

Three forms — Contact, Campaign Builder, and the full Commercial Enquiry form
— post to `/api/contact`, `/api/campaign`, and `/api/enquiry`. All three use
`lib/notify.ts`, which sends via [Resend](https://resend.com) if configured:

- `RESEND_API_KEY` — API key from your Resend account
- `RESEND_FROM` — a "from" address on a domain verified in Resend

**If these aren't set, submissions are not lost** — they're logged to the
server console (visible in Vercel's function logs), and the visitor is shown
an honest message asking them to also email directly, rather than a false
"message sent" confirmation.

All three routes include basic validation and a honeypot field for spam
resistance.

## Environment variables

See `.env.example` for the full list. **The site builds and works with none of
them set** — every integration degrades gracefully. Add real values in Vercel
under **Project Settings → Environment Variables** as they become available.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New → Project** and import the repo. Vercel
   auto-detects Next.js — no build configuration is needed.
3. Before the first deploy (or any time after), add the environment variables
   from `.env.example` under **Project Settings → Environment Variables**.
   At minimum, set `NEXT_PUBLIC_SITE_URL` to your production domain once you
   have one — it's used for the sitemap and social share metadata.
4. Deploy. Every subsequent push to the connected branch redeploys
   automatically.

No serverless function configuration, `vercel.json`, or custom build command
is required — the API routes under `/app/api` are picked up automatically as
Vercel Functions.

## Verified checks performed before delivery

- `npx tsc --noEmit` — no TypeScript errors
- `npx eslint .` — no lint errors
- `npm run build` — production build succeeds, all 19 routes compile
- Every route (all 9 pages + 404 + sitemap.xml + robots.txt + opengraph-image
  + all API routes) verified to respond correctly against a running
  production server
- Contact/campaign API routes verified for both the happy path and missing
  required fields
- No empty `href`/`src` attributes in any rendered page
- No leftover TODO/FIXME/lorem-ipsum markers in the codebase

## What still needs real data

- Social media URLs (YouTube, Twitch, Instagram, TikTok, X, Discord,
  WhatsApp) — `/data/platforms.ts` and `/data/community.ts`
- Subscriber/follower/view counts — `/data/stats.ts`
- Creator Network roster — `/data/creator-network.ts`
- Individual video/short/stream links for the Media page — `/data/media.ts`
- A downloadable Media Kit PDF (the page currently has a "Coming Soon" button)
