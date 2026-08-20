import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import CredibilityStrip from "@/components/CredibilityStrip";
import PartnerLogoStrip from "@/components/PartnerLogoStrip";
import PressSection from "@/components/PressSection";
import { achievements } from "@/data/achievements";
import { events } from "@/data/events";
import { mediaItems } from "@/data/media";
import { whatSygmaulfDoes } from "@/data/services";
import EventCard from "@/components/EventCard";
import AchievementCard from "@/components/AchievementCard";
import MediaCard from "@/components/MediaCard";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Gaming. Media. Community.`,
  description: siteConfig.description,
};

export default function HomePage() {
  const featuredEvents = events.filter((e) => e.featured).slice(0, 3);
  const competitiveCareer = achievements
    .filter((a) => a.category === "competitive" && a.featured)
    .slice(0, 6);
  const latestMedia = mediaItems.slice(0, 3);
  const hasPress = achievements.some((a) => a.category === "press");

  return (
    <>
      {/* 01 — Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--sy-line) 1px, transparent 1px), linear-gradient(90deg, var(--sy-line) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <Container className="relative grid min-h-[86vh] items-center gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="order-2 lg:order-1">
            <Eyebrow>Player · Creator · Host · Builder</Eyebrow>
            <h1 className="font-display mt-4 text-7xl font-extrabold uppercase leading-[0.85] tracking-tight sm:text-8xl lg:text-[7rem]">
              Sygmaulf
            </h1>
            <p className="font-display mt-2 text-2xl font-bold uppercase tracking-tight text-ink-dim sm:text-3xl">
              Gaming. Media. Community.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
              Competitive gaming, creator-led content and community experiences connecting brands
              with gaming audiences.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/about#achievements" variant="primary">
                Explore Career →
              </Button>
              <Button href="/work-with-sygmaulf" variant="outline">
                Work With Sygmaulf →
              </Button>
              <Button href="/community" variant="ghost">
                Explore Community →
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
              style={{
                maskImage:
                  "radial-gradient(ellipse 72% 78% at 50% 42%, black 45%, transparent 88%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 72% 78% at 50% 42%, black 45%, transparent 88%)",
              }}
            >
              <Image
                src="/images/personal/sygmaulf-hero-portrait.jpg"
                alt="Sygmaulf, Indian gaming creator and esports competitor, studio portrait"
                fill
                priority
                className="object-cover"
                style={{ filter: "saturate(0.85) contrast(1.05) brightness(0.94)" }}
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Proof / By The Numbers */}
      <CredibilityStrip />

      {/* 03 — Who Is Sygmaulf */}
      <section className="border-b border-line py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Who Is Sygmaulf"
              title="Built around competition, creativity and community."
              description="An Indian gaming creator, esports personality, competitive player, host, and community builder — operating across competitive gaming, esports entertainment and gaming culture."
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <Button href="/about" variant="ghost" className="px-0 text-accent">
              Read the full story →
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      {/* 04 — Capabilities */}
      <section className="border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Capabilities" title="What Sygmaulf Does" />
          </ScrollReveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {whatSygmaulfDoes.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 60}>
                <div className="h-full bg-bg p-8 transition-colors hover:bg-bg-raised">
                  <span className="font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 — Featured / Partnered / Worked With */}
      <section className="border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured / Partnered / Worked With"
              title="Brands & Publishers"
              description="Companies Sygmaulf has been featured by, partnered with, or worked with across creator and competitive gaming."
            />
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-12">
            <PartnerLogoStrip />
          </ScrollReveal>
        </Container>
      </section>

      {/* 06 — Selected Work */}
      <section className="border-b border-line py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <ScrollReveal>
              <SectionHeading eyebrow="Track Record" title="Selected Work" />
            </ScrollReveal>
            <Link
              href="/events"
              className="text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
            >
              All events →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredEvents.map((e, i) => (
              <ScrollReveal key={e.id} delay={i * 80}>
                <EventCard event={e} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 07 — Competitive Career */}
      <section id="competitive-career" className="border-b border-line py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Competitive Career"
                title="Results That Speak"
                description="Rankings and placements as supplied and sourced — nothing embellished."
              />
            </ScrollReveal>
            <Link
              href="/about#achievements"
              className="text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
            >
              Full record →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competitiveCareer.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 60}>
                <AchievementCard achievement={a} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 08 — Latest Media */}
      <section className="border-b border-line py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <ScrollReveal>
              <SectionHeading eyebrow="The Feed" title="Latest Media" />
            </ScrollReveal>
            <Link
              href="/media"
              className="text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
            >
              View all media →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestMedia.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 80}>
                <MediaCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 09 — Community */}
      <section className="border-b border-line py-24">
        <Container className="flex flex-col items-start gap-8 border border-line bg-bg-raised p-10 sm:p-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Eyebrow>Community</Eyebrow>
            <h2 className="font-display mt-3 max-w-xl text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Join the community.
            </h2>
            <p className="mt-4 max-w-md text-ink-dim">
              Players, creators, and organizers building the ecosystem together.
            </p>
          </div>
          <Button href="/community" variant="outline">
            Explore Community →
          </Button>
        </Container>
      </section>

      {/* 11 — Media / Press (only renders if a verified/pending press item exists) */}
      {hasPress ? (
        <section className="border-b border-line py-24">
          <Container>
            <ScrollReveal>
              <SectionHeading eyebrow="Press & Features" title="In The Media" />
            </ScrollReveal>
            <ScrollReveal delay={100} className="mt-12">
              <PressSection />
            </ScrollReveal>
          </Container>
        </section>
      ) : null}

      {/* 13 — Final CTA */}
      <section className="py-24">
        <Container className="text-center">
          <Eyebrow>Let&apos;s Build Something</Eyebrow>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl">
            Build a campaign people remember.
          </h2>
          <div className="mt-10 flex justify-center">
            <Button href="/work-with-sygmaulf" variant="primary">
              Work With Sygmaulf →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
