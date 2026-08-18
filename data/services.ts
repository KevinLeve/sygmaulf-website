export interface Service {
  id: string;
  title: string;
  summary: string;
  items: string[];
  ctaLabel: string;
}

export const services: Service[] = [
  {
    id: "creator-campaigns",
    title: "Creator Campaigns",
    summary: "Integrated content that puts your brand inside real gaming moments.",
    items: [
      "YouTube integrations",
      "Instagram Reels",
      "Shorts",
      "Twitch integrations",
      "Product placements",
      "Giveaways",
      "Campaign storytelling",
    ],
    ctaLabel: "Request Campaign",
  },
  {
    id: "co-streaming",
    title: "Co-Streaming",
    summary: "Live commentary and coverage that puts your event in front of an engaged audience.",
    items: [
      "Live commentary",
      "Tournament coverage",
      "Event promotion",
      "Community engagement",
      "Social content",
      "Post-event clips",
    ],
    ctaLabel: "Book a Co-Stream",
  },
  {
    id: "events-appearances",
    title: "Events & Appearances",
    summary: "On-ground and on-stage presence for events that need a credible gaming face.",
    items: [
      "Hosting",
      "Panels",
      "College events",
      "Gaming festivals",
      "Tournament finals",
      "Brand activations",
      "Product launches",
    ],
    ctaLabel: "Book Sygmaulf",
  },
  {
    id: "full-scale-activation",
    title: "Full-Scale Gaming Activation",
    summary: "Every piece — creators, competition, broadcast, community — under one campaign.",
    items: ["Creators", "Tournament", "Livestream", "Social", "Event", "Community"],
    ctaLabel: "Build My Campaign",
  },
  {
    id: "long-term-partnerships",
    title: "Long-Term Partnerships",
    summary: "Sustained collaborations built around a shared calendar, not a single post.",
    items: [
      "3-month partnerships",
      "6-month partnerships",
      "Annual partnerships",
      "Ambassador programs",
      "Product partnerships",
      "Gaming partnerships",
    ],
    ctaLabel: "Discuss Partnership",
  },
];

export const whatSygmaulfDoes = [
  {
    id: "content",
    title: "Content",
    description: "YouTube, Twitch, Instagram and short-form gaming content.",
  },
  {
    id: "co-streaming",
    title: "Co-Streaming",
    description: "Live coverage and commentary for esports and gaming events.",
  },
  {
    id: "brand-campaigns",
    title: "Brand Campaigns",
    description: "Creator-led campaigns connecting brands with gaming audiences.",
  },
  {
    id: "events",
    title: "Events",
    description: "Hosting, appearances, tournaments and community activations.",
  },
  {
    id: "creator-network",
    title: "Creator Network",
    description: "Gaming creators available for campaigns and launches.",
  },
  {
    id: "partnerships",
    title: "Partnerships",
    description: "Long-term collaborations with gaming and consumer brands.",
  },
];
