import type { Metadata } from "next";
import MediaPageClient from "@/components/MediaPageClient";

export const metadata: Metadata = {
  title: "Media",
  description: "Gaming, esports, stories, livestreams and conversations from Sygmaulf.",
};

export default function MediaPage() {
  return <MediaPageClient />;
}
