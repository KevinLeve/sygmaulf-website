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
// PDFs and the two rounds of client-supplied source material (WhatsApp
// brief + fact sheet / reference screenshots). Results and terminology are
// preserved as written in the source documents — nothing here is inferred
// beyond what the documents state.
export const events: EventRecord[] = [
  {
    id: "clash-royale-india-qualifier",
    name: "Clash Royale India Qualifier",
    game: "Clash Royale",
    year: "2026",
    result: "Second Runner-Up",
    role: "Competitor",
    category: "esports",
    officialLink: "https://play.toornament.com/en_US/tournaments/2537810745352208383/participants/",
    description: "India Qualifier for Clash Royale — finished as second runner-up.",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026) + Toornament participant page",
    featured: true,
  },
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
      "HOKCSAC Round 1, Wild Card Entry, Day 1 (15 April 2026). Team Inwicktus was scheduled against Choke Hold (Match 18, 10:45 PM IST). A registered-team graphic was also supplied for the wider CMF South Asia Championship; treated here as tournament participation, since no further personal result was provided.",
    verificationStatus: "verified",
    source: "HOK_CMF_2026.pdf",
  },
  {
    id: "tn-cm-trophy-2025",
    name: "TN CM Trophy Esports 2025",
    game: "Pokémon UNITE",
    year: "2025",
    location: "Tamil Nadu, India",
    result: "Tournament Participation",
    role: "Team: Tribe Rascals",
    category: "esports",
    officialLink: "https://play.toornament.com/en_US/tournaments/2316759398554638335/participants/",
    description: "Tamil Nadu CM Trophy Esports 2025, Pokémon UNITE — competed as part of Tribe Rascals.",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026) + Toornament participant page",
  },
  {
    id: "brawl-stars-challengers-south-asia",
    name: "Brawl Stars Challengers South Asia — Season 1 Qualifier",
    game: "Brawl Stars",
    year: "2026",
    result: "Top 33 in India",
    role: "Competitor",
    category: "esports",
    officialLink: "https://matcherino.com/supercell/tournaments/197510",
    description: "Season 1 Qualifier for the Brawl Stars Challengers South Asia circuit.",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026) + Matcherino tournament page",
  },
  {
    id: "pokemon-winter-cs-26",
    name: "Pokémon Winter CS '26",
    game: "Pokémon UNITE",
    year: "2026",
    result: "Tournament Participation",
    role: "Competitor",
    category: "esports",
    description: "Winter Championship Series tournament. Personal placement not yet confirmed by the client.",
    verificationStatus: "pending",
    source: "Client fact sheet (Aug 2026)",
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
    description: "Asian Games qualifying tournament for Pokémon UNITE.",
    verificationStatus: "pending",
    source: "Client-supplied profile + Challonge bracket",
  },
  {
    id: "iqoo-community-cup-bgmi",
    name: "iQOO Community Cup Season 4",
    game: "BGMI",
    year: "2026",
    result: "Round 1 — 11th Place",
    role: "Competitor",
    category: "esports",
    officialLink: "https://www.battlexo.com/tournaments/69ca1ad1e22c8bea6de2086f?tab=teams",
    description: "Season 4 of the iQOO Community Cup for BGMI.",
    verificationStatus: "pending",
    source: "Client-supplied profile + BattleXO tournament page",
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
      {
        label: "Tribune India",
        url: "https://www.tribuneindia.com/news/brics-esports-championship/esfi-announces-indian-contingents-for-brics-esports-championship-global-esports-games",
      },
      {
        label: "ThePrint",
        url: "https://theprint.in/sport/esfi-announces-indian-contingents-for-brics-esports-championship-and-geg26/3009279/",
      },
      {
        label: "PTI",
        url: "https://www.ptinews.com/story/sports/ESFI-announces-Indian-contingents-for-BRICS-Esports-Championship-and-GEG26/3946715",
      },
    ],
    description:
      "ESFI (Esports Federation of India) announcement of the Indian contingent for the BRICS Esports Championship and Global Esports Games 2026. This is national-contingent announcement coverage rather than a personal profile piece — treated accordingly.",
    verificationStatus: "pending",
    source:
      "News18 / Khel Now / Business Standard / The Bridge / Tribune India / ThePrint / PTI (ESFI announcement coverage)",
  },
];

export const eventCategoryLabels: Record<EventCategory, string> = {
  esports: "Competitive",
  hosting: "Hosting & Appearances",
  activation: "Brand Activation",
};
