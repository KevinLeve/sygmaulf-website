"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import MediaCard from "@/components/MediaCard";
import LiveStatusWidget from "@/components/LiveStatus";
import { mediaItems, mediaFilters, type MediaCategory } from "@/data/media";
import { cn } from "@/lib/utils";

export default function MediaPageClient() {
  const [active, setActive] = useState<MediaCategory | "all">("all");

  const filtered =
    active === "all" ? mediaItems : mediaItems.filter((item) => item.category === active);

  return (
    <>
      <section className="border-b border-line py-24">
        <Container>
          <Eyebrow>Media</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
            The Sygmaulf feed.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-dim">
            Gaming, esports, stories, livestreams and conversations.
          </p>
          <div className="mt-10 max-w-2xl">
            <LiveStatusWidget />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Browse" title="Featured Content" />
          </ScrollReveal>

          <div
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter media by category"
          >
            {mediaFilters.map((filter) => (
              <button
                key={filter.value}
                role="tab"
                aria-selected={active === filter.value}
                onClick={() => setActive(filter.value)}
                className={cn(
                  "border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                  active === filter.value
                    ? "border-accent bg-accent text-bg"
                    : "border-line text-ink-dim hover:border-accent/50 hover:text-ink"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {filtered.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 60}>
                  <MediaCard item={item} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-line-soft p-12 text-center text-ink-faint">
              Nothing in this category yet.
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-line py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:max-w-4xl">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border border-line">
            <Image
              src="/images/personal/ggez-podcast-cover.jpg"
              alt="GGEZ — A Gamer's Podcast, official cover art. Real talk. Raw stories. Gamer mindset. Hosted by Sygmaulf."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 70vw, 320px"
            />
          </div>
          <div>
            <Eyebrow>GGEZ</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Gaming conversations beyond the match.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://open.spotify.com/show/1M5cupcfoE61rQtvZARarV"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide transition-colors hover:border-accent hover:text-accent"
              >
                Listen on Spotify
              </a>
              <a
                href="https://www.amazon.in/-/hi/dp/B0GHXJPQ8S"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide transition-colors hover:border-accent hover:text-accent"
              >
                Listen on Amazon Music
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
