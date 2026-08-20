export const shortBio =
  "Sygmaulf is an Indian gaming creator, esports personality, competitive player, host, and community builder operating across competitive gaming, esports entertainment and gaming culture.";

export const longBio = `Sygmaulf is an Indian gaming creator, esports personality, competitive player, host, and community builder operating across competitive gaming, esports entertainment, and gaming culture.

Across titles spanning Call of Duty: Mobile, BGMI, Pokémon UNITE, Honor of Kings, Clash Royale, Brawl Stars, Free Fire MAX, Farlight 84, Fortnite, and more, Sygmaulf competes at a national and regional level while building the platforms — a podcast, a creator network, and a growing community — that connect competitive gaming with the audiences and brands who want to reach it.

Off the server, that work spans official creator partnerships, talent and scouting roles within Indian esports organizations, and building one of the country's largest Fortnite builder communities.`;

export interface TimelineEntry {
  id: string;
  title: string;
  description: string;
}

// The brief explicitly says not to invent dates. This timeline is
// structured by phase (as instructed) rather than by specific year,
// since exact dates for each phase were not supplied.
export const timeline: TimelineEntry[] = [
  {
    id: "competitive-gaming",
    title: "Competitive Gaming",
    description:
      "Started competing across mobile and cross-platform titles, building a competitive record across Call of Duty: Mobile, BGMI, Pokémon UNITE, Honor of Kings, and more.",
  },
  {
    id: "creator-expansion",
    title: "Creator Expansion",
    description:
      "Expanded from competition into content — building an audience across streaming and short-form platforms alongside competitive play.",
  },
  {
    id: "community-building",
    title: "Community Building",
    description:
      "Began building community infrastructure, including one of India's largest Fortnite builder communities and the wider Nomads Province ecosystem.",
  },
  {
    id: "esports-brand-collaborations",
    title: "Esports & Brand Collaborations",
    description:
      "Took on official creator and industry roles — including work with KRAFTON/PUBG Mobile, Epic Games, Supercell, Razer, and talent roles within Indian esports organizations such as BGIS and ESFI.",
  },
  {
    id: "current-ecosystem",
    title: "Current Ecosystem",
    description:
      "Today, Sygmaulf operates across competitive play, the GGEZ podcast, brand partnerships, and community building — connecting players, creators, organizers, and brands under one ecosystem.",
  },
];

export const values = [
  { id: "competition", label: "Competition" },
  { id: "creativity", label: "Creativity" },
  { id: "community", label: "Community" },
  { id: "consistency", label: "Consistency" },
];
