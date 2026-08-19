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
  urlLabel?: string;
  team?: string;
  verificationStatus: VerificationStatus;
  source: string;
  featured?: boolean;
}

// All records below trace to either an official source document (PDF/URL,
// tagged "verified") or the client-supplied fact sheet / WhatsApp brief
// (tagged "pending" — self-reported, not independently confirmed).
// Nothing here is invented. Ranking claims for CODM are preserved exactly
// as supplied: India rank #74 (2021) and India rank #12 (2025) are kept as
// two distinct entries rather than merged, per source instruction.
export const achievements: Achievement[] = [
  // ---- Competitive results ----
  {
    id: "clash-royale-india-qualifier",
    title: "Second Runner-Up",
    description: "Clash Royale India Qualifier.",
    category: "competitive",
    game: "Clash Royale",
    url: "https://play.toornament.com/en_US/tournaments/2537810745352208383/participants/",
    urlLabel: "Toornament — Participants",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026)",
    featured: true,
  },
  {
    id: "codm-worlds-2025",
    title: "India Rank #12",
    description: "Call of Duty: Mobile World Championship 2025.",
    category: "competitive",
    year: "2025",
    game: "Call of Duty: Mobile",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026)",
    featured: true,
  },
  {
    id: "codm-worlds-2021",
    title: "India Rank #74",
    description: "Call of Duty: Mobile World Championship 2021.",
    category: "competitive",
    year: "2021",
    game: "Call of Duty: Mobile",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026)",
    featured: true,
  },
  {
    id: "brawl-stars-challengers-south-asia",
    title: "Top 33 in India",
    description: "Brawl Stars Challengers South Asia — Season 1 Qualifier.",
    category: "competitive",
    game: "Brawl Stars",
    url: "https://matcherino.com/supercell/tournaments/197510",
    urlLabel: "Matcherino — Tournament",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026)",
    featured: true,
  },
  {
    id: "tn-cm-trophy-2025",
    title: "Team: Tribe Rascals",
    description: "TN CM Trophy Esports 2025, Pokémon UNITE.",
    category: "competitive",
    year: "2025",
    game: "Pokémon UNITE",
    team: "Tribe Rascals",
    url: "https://play.toornament.com/en_US/tournaments/2316759398554638335/participants/",
    urlLabel: "Toornament — Participants",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026)",
  },
  {
    id: "pokemon-winter-cs-26",
    title: "Tournament Participation",
    description: "Pokémon Winter CS '26. Personal placement not yet confirmed.",
    category: "competitive",
    year: "2026",
    game: "Pokémon UNITE",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026)",
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
    url: "https://challonge.com/nesc2026AGPokemonUnite",
    urlLabel: "Challonge — Bracket",
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
    url: "https://challonge.com/WCS2026INDIAQ/groups",
    urlLabel: "Challonge — Bracket",
    verificationStatus: "verified",
    source: "WCS_2026_India_Qualifiers.pdf",
    featured: true,
  },
  {
    id: "iqoo-community-cup-s4",
    title: "Round 1 — 11th Place",
    description: "iQOO Community Cup Season 4, BGMI.",
    category: "competitive",
    game: "BGMI",
    url: "https://www.battlexo.com/tournaments/69ca1ad1e22c8bea6de2086f?tab=teams",
    urlLabel: "BattleXO — Tournament",
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
    url: "https://puyopuyo-global-ranking-series.j-cg.com/",
    urlLabel: "Official Tournament Site",
    verificationStatus: "pending",
    source: "Client-supplied profile",
  },

  // ---- Creator / industry roles ----
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
