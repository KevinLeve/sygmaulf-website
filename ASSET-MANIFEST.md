# SYGMAULF — Asset Manifest

Tracks every image asset supplied for the website upgrade: what it shows, where it's used, and why.

## Achievement / event logos (14 supplied, 14 used)

All 14 images below were visually inspected (not assumed from filename) before being wired in. All live at `public/images/achievements/` and are referenced from `data/achievements.ts` and/or `data/events.ts` via the `image` / `imageAlt` fields, rendered by `components/AchievementCard.tsx` and `components/EventCard.tsx`.

| File | Visual subject (verified) | Used in | Component / Route |
|---|---|---|---|
| `codm-world-championship-2025-india-rank-12.jpg` | Official "Call of Duty: Mobile World Championship 2025" logo | Achievement `codm-worlds-2025` | AchievementCard — `/`, `/about` |
| `codm-world-championship-2021-india-rank-74.jpg` | Official "Call of Duty: Mobile World Championship 2021" logo | Achievement `codm-worlds-2021` | AchievementCard — `/`, `/about` |
| `brawl-stars-challengers-south-asia-top-33-india.jpg` | "Brawl Stars Challengers South Asia" logo | Achievement + Event `brawl-stars-challengers-south-asia` | AchievementCard + EventCard — `/`, `/about`, `/events` |
| `tn-chief-ministers-trophy-2025.jpg` | "The Chief Minister's Trophy 2025" (Tamil Nadu) official logo | Achievement + Event `tn-cm-trophy-2025` | AchievementCard + EventCard — `/about`, `/events` |
| `puyo-puyo-grs.jpg` | "Puyo Puyo GRS" (Global Ranking Series) logo, World Esports mark | Achievement + Event `puyo-puyo-2025` / `puyo-puyo-global-ranking-2025` | AchievementCard + EventCard — `/about`, `/events` |
| `iqoo-community-cup-bgmi.jpg` | "iQOO Community Cup" logo with BGMI/KRAFTON mark | Achievement + Event `iqoo-community-cup-s4` / `iqoo-community-cup-bgmi` | AchievementCard + EventCard — `/about`, `/events` |
| `nesc-2026-global-esports-games.jpg` | "NESC 2026 — 20th Asian Games Aichi-Nagoya 2026" | Achievement + Event `nesc-2026-pokemon-unite` | AchievementCard + EventCard — `/about`, `/events` |
| `good-game-india.jpg` | Official "Good Game India" (GG) logo | Achievement `ggi-bgmi` (GGI = Good Game India, confirmed by this asset) | AchievementCard — `/about` |
| `pokemon-unite-winter-tournament.jpg` | "Pokémon UNITE Winter Tournament" logo | Achievement + Event `pokemon-winter-cs-26` | AchievementCard + EventCard — `/about`, `/events` |
| `pokemon-unite-championship-series.jpg` | "Pokémon UNITE Championship Series" logo | Achievement + Event `wcs-2026-india-qualifiers` | AchievementCard + EventCard — `/`, `/about`, `/events` |
| `cmf-south-asia-championship.jpg` | Clean "CMF South Asia Championship" emblem | Achievement `hok-cmf-south-asia-2026` | AchievementCard — `/`, `/about` |
| `hok-cmf-south-asia-championship-2026.jpg` | "Registered Team for HOK-CMF South Asia Championship 2026" roster graphic — confirms team **INWICKTUS** is on the registered list | Event `hok-cmf-2026` (used as the event graphic, since it's evidence of registration; the cleaner emblem above is used for the standalone achievement card) | EventCard — `/events` |
| `honor-of-kings-kings-arise-india-city-tour.jpg` | "Honor of Kings — Kings' Arise India City Tour" logo | Achievement `hok-kings-arise-2026` + Events `hok-kings-arise-bengaluru-2026` / `hok-kings-arise-mumbai-2026` | AchievementCard + EventCard — `/`, `/about`, `/events` |
| `global-esports-games-nesc-2026.jpg` | "Global Esports Games — Los Angeles 2026 | NESC 2026" combined logo | Event `geg26-brics-esports` (BRICS Esports Championship & GEG '26) | EventCard — `/events` |

**Result: 14/14 supplied images incorporated. None left unused in `/public`.**

## Personal photographs

Seven personal photographs were supplied directly in the conversation (not via the asset zip). All seven are genuine studio portraits/official artwork — not WhatsApp screenshots — so all were usable directly. Each was inspected individually and placed only where it strengthens a specific section, per the "do not dump into one gallery" instruction.

| File (as stored) | Visual subject (verified) | Placement | Reasoning |
|---|---|---|---|
| `sygmaulf-hero-portrait.jpg` | Studio portrait, warm orange backlit halo, cream hoodie, arms crossed, direct gaze, no sunglasses | Homepage Hero (`/`) | Strongest, most symmetric/confident shot; the orange halo echoes the site's brass/gold accent color almost exactly |
| `sygmaulf-about-portrait.jpg` | Studio portrait, black hoodie, black background, arms crossed, close crop | About page — Professional Biography section (`/about`) | Clean, identity-forward image paired directly with the bio text |
| `sygmaulf-about-seated.jpg` | Seated studio portrait, black hoodie, black background, hands clasped, contemplative pose | About page — pull-quote break between Journey Timeline and Achievements (`/about`) | Breaks up a long text page; the calmer pose fits a reflective pull-quote moment |
| `sygmaulf-work-with-portrait.jpg` | Studio portrait, black hoodie, black background, hand at collar, one hand in pocket | Work With Sygmaulf hero (`/work-with-sygmaulf`) | Brand-facing page benefits from a face-forward personal photo alongside the pitch copy |
| `sygmaulf-community-portrait.jpg` | Studio portrait, warm orange backlit halo, cream hoodie, sunglasses pushed onto mask | Community hero (`/community`) | Warmer, more approachable variant for the community-facing page |
| `sygmaulf-media-kit-portrait.jpg` | Studio portrait, warm orange backlit halo, cream hoodie, hand at collar/mask, ring visible | Media Kit hero (`/media-kit`) | Standard "press photo" placement — media kits conventionally lead with a usable headshot |
| `ggez-podcast-cover.jpg` | Official GGEZ podcast cover art — logo, tagline "Real talk. Raw stories. Gamer mindset.", Spotify/Amazon Music/YouTube/Apple Podcasts badges | Media page — GGEZ section (`/media`) | This is the actual official podcast artwork, not a personal photo; placed alongside the existing Spotify/Amazon Music links it already had |

No personal photograph was placed in Competitive Career or Selected Work — none of the seven show competition, a stage, or gameplay context, so forcing them into those sections would have been decorative rather than evidential, per the master prompt's instruction not to force images just to raise the count.

## Notes on image treatment

- All logos are rendered inside a fixed-aspect black container with `object-contain` and padding, so both the black-background logos (CODM, Brawl Stars, HOK, Good Game India, iQOO) and the white/light-background logos (Puyo Puyo, NESC, TN CM Trophy, Global Esports Games) sit consistently as a "badge" tile regardless of their native background.
- Images are served via Next.js's built-in `<Image>` component (`next/image`) — responsive `sizes`, lazy-loaded by default, no manual optimization step required.
- Every image has descriptive `alt` text drawn from its verified visual content, not the filename.
