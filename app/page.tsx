import type { Metadata } from "next";
import Link from "next/link";
import { Button, Card, Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import CredibilityStrip from "@/components/CredibilityStrip";
import { achievements } from "@/data/achievements";
import { events } from "@/data/events";
import { mediaItems } from "@/data/media";
import { whatSygmaulfDoes } from "@/data/services";
import EventCard from "@/components/EventCard";
import MediaCard from "@/components/MediaCard";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Gaming. Media. Community.`,
  description: siteConfig.description,
};

export default function HomePage() {
  const featuredWork = achievements.filter((a) => a.featured).slice(0, 3);
  const featuredEvents = events.filter((e) => e.featured).slice(0, 2);
  const latestMedia = mediaItems.slice(0, 3);

  return (
    <>
      {/* Hero */}
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

        <Container className="relative flex min-h-[86vh] flex-col justify-center py-24">
          <Eyebrow>Gaming · Media · Community</Eyebrow>
          <h1 className="font-display mt-4 text-[16vw] font-extrabold uppercase leading-[0.85] tracking-tight sm:text-[10vw] lg:text-[8.5rem]">
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
            <Button href="/work-with-sygmaulf" variant="primary">
              Work With Sygmaulf →
            </Button>
            <Button href="/media" variant="outline">
              Watch Content →
            </Button>
          </div>
        </Container>
      </section>

      <CredibilityStrip />

      {/* About preview */}
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

      {/* What Sygmaulf does */}
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

      {/* Selected work / achievements */}
      <section className="border-b border-line py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <ScrollReveal>
              <SectionHeading eyebrow="Track Record" title="Selected Work" />
            </ScrollReveal>
            <Link
              href="/about#achievements"
              className="text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
            >
              All achievements →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredWork.map((a, i) => (
              <ScrollReveal key={a.id} delay={i * 80}>
                <Card className="h-full">
                  <span className="text-eyebrow text-ink-faint">
                    {a.game ?? a.category}
                    {a.year ? ` · ${a.year}` : ""}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-bold leading-tight">{a.title}</h3>
                  <p className="mt-2 text-sm text-ink-dim">{a.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {featuredEvents.length ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {featuredEvents.map((e) => (
                <ScrollReveal key={e.id}>
                  <EventCard event={e} />
                </ScrollReveal>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      {/* Latest media */}
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

      {/* Community CTA */}
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

      {/* Work with CTA */}
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
