import type { VerificationStatus } from "./site";

export interface ContactMethod {
  id: string;
  label: string;
  description: string;
  email: string | null;
  verificationStatus: VerificationStatus;
  source?: string;
}

// Only two email addresses were supplied by the client. Every other channel
// below is intentionally routed to the general enquiry form until a
// dedicated address is provided — do not invent additional emails.
export const contactMethods: ContactMethod[] = [
  {
    id: "general",
    label: "General",
    description: "General questions, media requests, and anything that doesn't fit below.",
    email: "sygmaulf@gmail.com",
    verificationStatus: "verified",
    source: "Client-supplied (WhatsApp brief)",
  },
  {
    id: "business",
    label: "Business & Campaign Enquiries",
    description: "Brand campaigns, sponsorships, and commercial partnerships.",
    email: "sygmaulf@gmail.com",
    verificationStatus: "verified",
    source: "Client-supplied (WhatsApp brief)",
  },
  {
    id: "events",
    label: "Event & Appearance Enquiries",
    description: "Hosting, panels, tournament finals, and appearances.",
    email: "sygmaulf@gmail.com",
    verificationStatus: "verified",
    source: "Client-supplied (WhatsApp brief)",
  },
  {
    id: "creator-network",
    label: "Creator Network Enquiries",
    description: "Creators, players, and organizers looking to join the network.",
    email: "nomadsprovince@gmail.com",
    verificationStatus: "verified",
    source: "Client-supplied (WhatsApp brief) — Nomads Province",
  },
  {
    id: "media",
    label: "Media & Press",
    description: "Interviews, press features, and media coverage requests.",
    email: "sygmaulf@gmail.com",
    verificationStatus: "verified",
    source: "Client-supplied (WhatsApp brief)",
  },
];

export const businessEntities = [
  {
    name: "Sygmaulf",
    email: "sygmaulf@gmail.com",
  },
  {
    name: "Nomads Province",
    email: "nomadsprovince@gmail.com",
    site: "https://nomadsprovince.netlify.app/",
  },
];

// No phone number was supplied — do not invent one.
export const contactPhone: string | null = null;
