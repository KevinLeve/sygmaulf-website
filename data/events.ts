import type { VerificationStatus } from "./site";

export type EventCategory = "esports" | "hosting" | "activation";

export interface EventRecord {
  id: string;
  name: string;
  game: string;
  year: string;
  location?: string;
  result: string;
  role: string;
  category: EventCategory;
  officialLink?: string;
  supportingLinks?: { label: string; url: string }[];
  referenceDocument?: string;
  description: string;
  verificationStatus: VerificationStatus;
  source: string;
  featured?: boolean;
}

// Event facts below are drawn directly from the four supplied reference
// PDFs and the WhatsApp link list. Results and terminology are preserved
// as written in the source documents — nothing here is inferred beyond
// what the documents state.
export const events: EventRecord[] = [
  {
    id: "wcs-2026-india-qualifiers",
    name: "Pokémon UNITE World Championship 2026 — India Qualifiers",
    game: "Pokémon UNITE",
    year: "2026",
    result: "Advanced past Round 1 (bye), eliminated Round 2 by Welt Esports (0-2)",
    role: "Team Captain — INWICKTUS",
    category: "esports",
    officialLink: "https://challonge.com/WCS2026INDIAQ/groups",
    supportingLinks: [
      {
        label: "Bracket sheet",
        url: "https://docs.google.com/spreadsheets/d/1vNw62ucdP451cv3RhhMCA2wOthqvRpHkmcYx0iQeCcg/edit?usp=drivesdk",
      },
    ],
    referenceDocument: "WCS_2026_India_Qualifiers.pdf",
    description:
      "Online tournament, $25,000 prize pool. Qualifiers held April 24–25, main broadcast April 26. Team INWICKTUS (captain: Sygmaulf) received a bye in Round 1 (Game 1.17) before being eliminated 0-2 by Welt Esports in Round 2 (Game 2.9).",
    verificationStatus: "verified",
    source: "WCS_2026_India_Qualifiers.pdf",
    featured: true,
  },
  {
    id: "hok-kings-arise-bengaluru-2026",
    name: "Honor of Kings: Kings' Arise India City Tour — Bengaluru Open Qualifiers",
    game: "Honor of Kings",
    year: "2026",
    location: "Bengaluru, India",
    result: "Round of 64 — eliminated by Team Not in Prime",
    role: "Team Captain — Inwicktus",
    category: "esports",
    referenceDocument: "HOK_Kings_Arise_Bengaluru.pdf",
    description:
      "Round of 64, Best of 3 bracket. Team Inwicktus (captain: Sygmaulf) faced Team Not in Prime on 16/03 (Game 2.14) and was eliminated.",
    verificationStatus: "verified",
    source: "HOK_Kings_Arise_Bengaluru.pdf",
    featured: true,
  },
  {
    id: "hok-kings-arise-mumbai-2026",
    name: "Honor of Kings: Kings' Arise India City Tour — Mumbai",
    game: "Honor of Kings",
    year: "2026",
    location: "Mumbai, India",
    result: "Open Qualifiers entrant",
    role: "Competitor",
    category: "esports",
    referenceDocument: "HOK_Kings_Arise_Mumbai.pdf",
    description:
      "Online qualifiers into LAN finals. Format: Phase 1 Open Qualifiers (Ro256 → Ro16, March 24), Phase 2 Group Stage (March 25), Phase 3 Playoffs (March 26), Phase 4 LAN Final (March 29).",
    verificationStatus: "verified",
    source: "HOK_Kings_Arise_Mumbai.pdf",
  },
  {
    id: "hok-cmf-2026",
    name: "Honor of Kings CMF South Asia Championship 2026 — Round 1: Wild Card Entry",
    game: "Honor of Kings",
    year: "2026",
    result: "Top 20 (Wild Card fixture: Inwicktus vs. Choke Hold)",
    role: "Team Captain — Inwicktus",
    category: "esports",
    referenceDocument: "HOK_CMF_2026.pdf",
    description:
      "HOKCSAC Round 1, Wild Card Entry, Day 1 (15 April 2026). Team Inwicktus was scheduled against Choke Hold (Match 18, 10:45 PM IST).",
    verificationStatus: "verified",
    source: "HOK_CMF_2026.pdf",
  },
  {
    id: "nesc-2026-pokemon-unite",
    name: "NESC 2026 Asian Games Qualifiers",
    game: "Pokémon UNITE",
    year: "2026",
    result: "Top 24",
    role: "Competitor",
    category: "esports",
    officialLink: "https://challonge.com/nesc2026AGPokemonUnite",
    supportingLinks: [
      {
        label: "BattleXO tournament page",
        url: "https://www.battlexo.com/tournaments/69ca1ad1e22c8bea6de2086f?tab=teams",
      },
    ],
    description: "Asian Games qualifying tournament for Pokémon UNITE.",
    verificationStatus: "pending",
    source: "Client-supplied profile + BattleXO / Challonge links",
  },
  {
    id: "puyo-puyo-global-ranking-2025",
    name: "Puyo Puyo Global Ranking Series 2025",
    game: "Puyo Puyo",
    year: "2025",
    result: "Participant",
    role: "Competitor",
    category: "esports",
    officialLink: "https://puyopuyo-global-ranking-series.j-cg.com/",
    description: "Global ranking series for Puyo Puyo.",
    verificationStatus: "pending",
    source: "Client-supplied profile + official tournament site",
  },
  {
    id: "geg26-brics-esports",
    name: "BRICS Esports Championship & GEG '26 — Team India Contingent",
    game: "Multi-title",
    year: "2026",
    result: "Named to Team India contingent (ESFI announcement)",
    role: "Team India",
    category: "esports",
    officialLink:
      "https://www.news18.com/agency-feeds/esfi-announces-indian-contingents-for-brics-esports-championship-and-geg26-10260987.html",
    supportingLinks: [
      {
        label: "Khel Now",
        url: "https://khelnow.com/gaming/esfi-announces-team-india-squad-for-brics-esports-championship-global-esports-games-202608",
      },
      {
        label: "Business Standard",
        url: "https://www.business-standard.com/sports/other-sports-news/team-india-set-for-brics-esports-championship-and-global-esports-games-2026-126080800738_1.html",
      },
      {
        label: "The Bridge",
        url: "https://thebridge.in/esports/esfi-india-teams-brics-esports-championship-geg26-57220",
      },
    ],
    description:
      "ESFI (Esports Federation of India) announcement of the Indian contingent for the BRICS Esports Championship and Global Esports Games 2026.",
    verificationStatus: "pending",
    source: "News18 / Khel Now / Business Standard / The Bridge (ESFI announcement coverage)",
  },
];

export const eventCategoryLabels: Record<EventCategory, string> = {
  esports: "Competitive",
  hosting: "Hosting & Appearances",
  activation: "Brand Activation",
};
