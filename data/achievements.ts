import type { VerificationStatus } from "./site";

export type AchievementCategory =
  | "competitive"
  | "creator"
  | "brand"
  | "press"
  | "role";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  year?: string;
  game?: string;
  url?: string;
  verificationStatus: VerificationStatus;
  source: string;
  featured?: boolean;
}

// All records below come directly from the client-supplied professional
// profile. Nothing here is invented — new achievements should be added as
// they are supplied, each tagged with a verificationStatus and a source.
export const achievements: Achievement[] = [
  // ---- Competitive results ----
  {
    id: "geg26-clash-royale",
    title: "National Runner-Up — Qualifiers",
    description: "GEG '26 Qualifiers, Clash Royale.",
    category: "competitive",
    year: "2026",
    game: "Clash Royale",
    verificationStatus: "pending",
    source: "Client-supplied profile",
    featured: true,
  },
  {
    id: "cm-trophy-2025",
    title: "Official Participant",
    description: "CM Trophy 2025, India.",
    category: "competitive",
    year: "2025",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "ggi-bgmi",
    title: "Quarterfinalist",
    description: "GGI, BGMI.",
    category: "competitive",
    game: "BGMI",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "hok-kings-arise-2026",
    title: "Round of 64",
    description:
      "Honor of Kings: Kings' Arise City Tour 2026 — qualified through the Bengaluru and Mumbai Open Qualifiers.",
    category: "competitive",
    year: "2026",
    game: "Honor of Kings",
    verificationStatus: "verified",
    source: "HOK_Kings_Arise_Bengaluru.pdf / HOK_Kings_Arise_Mumbai.pdf",
    featured: true,
  },
  {
    id: "nesc-2026-pokemon-unite",
    title: "Top 24",
    description: "NESC 2026 Asian Games Qualifiers, Pokémon UNITE.",
    category: "competitive",
    year: "2026",
    game: "Pokémon UNITE",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "hok-cmf-south-asia-2026",
    title: "Top 20",
    description: "Honor of Kings CMF South Asia Championship 2026.",
    category: "competitive",
    year: "2026",
    game: "Honor of Kings",
    verificationStatus: "verified",
    source: "HOK_CMF_2026.pdf",
    featured: true,
  },
  {
    id: "wcs-2026-india-qualifiers",
    title: "Top 17 — India Qualifiers",
    description:
      "Pokémon UNITE Championship Series, WCS 2026. Advanced through Round 1 before elimination.",
    category: "competitive",
    year: "2026",
    game: "Pokémon UNITE",
    verificationStatus: "verified",
    source: "WCS_2026_India_Qualifiers.pdf",
    featured: true,
  },
  {
    id: "brawl-stars-sea",
    title: "Ranked 33",
    description: "Brawl Stars Championship, Southeast Asia.",
    category: "competitive",
    game: "Brawl Stars",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "iqoo-community-cup-s4",
    title: "Round 1 — 11th Place",
    description: "iQOO Community Cup Season 4, BGMI.",
    category: "competitive",
    game: "BGMI",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "puyo-puyo-2025",
    title: "Participant",
    description: "Puyo Puyo Global Ranking Series 2025.",
    category: "competitive",
    year: "2025",
    game: "Puyo Puyo",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "codm-world-championship",
    title: "India Rankings — #12 (2025), #74 (2021)",
    description: "Call of Duty: Mobile World Championship, India rankings.",
    category: "competitive",
    game: "Call of Duty: Mobile",
    verificationStatus: "pending",
    source: "Client-supplied profile",
    featured: true,
  },

  // ---- Creator / industry roles ----
  {
    id: "krafton-pubgm",
    title: "Official Content Creator — KRAFTON / PUBG Mobile",
    description: "Creator code: sygmaulf.",
    category: "brand",
    verificationStatus: "pending",
    source: "Client-supplied profile",
    featured: true,
  },
  {
    id: "epic-games-ambassador",
    title: "Epic Games Ambassador",
    description: "Creator code: sygmaulf.",
    category: "brand",
    url: "https://www.fortnite.com/@sygmaulf",
    verificationStatus: "verified",
    source: "Fortnite creator page — fortnite.com/@sygmaulf",
    featured: true,
  },
  {
    id: "supercell-creator",
    title: "Official Supercell Creator",
    description: "Recognized creator across the Supercell portfolio.",
    category: "brand",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "ewc-costreamer",
    title: "Official Co-Streamer — EWC",
    description: "Esports World Cup official co-streaming talent.",
    category: "role",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "razer-creator",
    title: "Razer Official Creator",
    description: "Recognized creator partner for Razer.",
    category: "brand",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "activision-playtester",
    title: "Activision Playtester",
    description: "Invited playtester for upcoming Activision titles.",
    category: "role",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "playstation-beta-tester",
    title: "PlayStation Beta Tester",
    description: "Invited beta tester for PlayStation titles.",
    category: "role",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "bgis-2026-talent-manager",
    title: "Talent Manager — BGIS 2026",
    description: "Battlegrounds Mobile India Series 2026.",
    category: "role",
    year: "2026",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "esfi-current",
    title: "Currently Working With ESFI",
    description: "Esports Federation of India.",
    category: "role",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "free-fire-scout",
    title: "Official Scout — Free Fire MAX",
    description: "Talent scouting role for Free Fire MAX.",
    category: "role",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "indus-prime-rush-tn",
    title: "Tamil Nadu State Representative",
    description: "Indus Prime Rush.",
    category: "role",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "fortnite-builders-community",
    title: "Building India's Largest Fortnite Builders Community",
    description: "Community-building initiative for Fortnite builders in India.",
    category: "role",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },
  {
    id: "ggez-podcast-host",
    title: "Host — GGEZ Gaming Podcast",
    description: "Gaming conversations beyond the match.",
    category: "creator",
    url: "https://open.spotify.com/show/1M5cupcfoE61rQtvZARarV",
    verificationStatus: "verified",
    source: "GGEZ — Spotify",
  },
  {
    id: "times-of-india-feature",
    title: "Featured by The Times of India",
    description: "National press coverage.",
    category: "press",
    verificationStatus: "pending",
    source: "Client-supplied profile",
    featured: true,
  },
];

export const achievementCategoryLabels: Record<AchievementCategory, string> = {
  competitive: "Competitive",
  creator: "Creator",
  brand: "Brand & Industry",
  press: "Press",
  role: "Roles",
};
