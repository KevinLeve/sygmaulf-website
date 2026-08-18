export interface NetworkCategory {
  id: string;
  label: string;
  description: string;
}

// The brief explicitly says: "Do not invent creator names until supplied."
// So this page ships as an ecosystem/positioning page with real category
// definitions but no fabricated roster. Add real creator/organizer records
// here (name, game, platform, link) once the client supplies them.
export const networkCategories: NetworkCategory[] = [
  {
    id: "creators",
    label: "Creators",
    description: "Gaming content creators across YouTube, Twitch, and short-form.",
  },
  {
    id: "players",
    label: "Competitive Players",
    description: "Players competing across mobile, PC, and console titles.",
  },
  {
    id: "streamers",
    label: "Streamers",
    description: "Live streamers covering gameplay, esports, and co-streams.",
  },
  {
    id: "organizers",
    label: "Event Hosts & Organizers",
    description: "Hosts and organizers running tournaments and community events.",
  },
  {
    id: "communities",
    label: "Community Organizers",
    description: "Builders running Discords, WhatsApp groups, and local scenes.",
  },
];

export interface NetworkMember {
  id: string;
  name: string;
  category: string;
  game?: string;
  url?: string;
}

// Empty on purpose — see note above.
export const networkMembers: NetworkMember[] = [];
