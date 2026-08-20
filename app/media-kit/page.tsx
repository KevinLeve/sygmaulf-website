import type { Metadata } from "next";
import Image from "next/image";
import { Button, Card, Container, Eyebrow, SectionHeading, VerificationBadge } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import PartnerLogoStrip from "@/components/PartnerLogoStrip";
import { shortBio, longBio } from "@/data/bio";
import { credibilityStats } from "@/data/stats";
import { platforms } from "@/data/platforms";
import { achievements } from "@/data/achievements";
import { services } from "@/data/services";
import { events } from "@/data/events";
import { contactMethods } from "@/data/contact";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "Bio, platforms, achievements, services, and contact details for Sygmaulf.",
};

export default function MediaKitPage() {
  const gamingTitles = [
    "Call of Duty: Mobile",
    "BGMI",
    "Pokémon UNITE",
    "Honor of Kings",
    "Clash Royale",
    "Brawl Stars",
    "Free Fire MAX",
    "Farlight 84",
    "Fortnite",
  ];

  return (
    <>
      <section className="border-b border-line py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-8">
            <div>
              <Eyebrow>Media Kit</Eyebrow>
              <h1 className="font-display mt-4 max-w-3xl text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
                Media Kit
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-dim">{shortBio}</p>
            </div>
            <Button href="/media-kit" variant="outline" className="w-fit">
              Download PDF (Coming Soon)
            </Button>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden border border-line">
            <Image
              src="/images/personal/sygmaulf-media-kit-portrait.jpg"
              alt="Sygmaulf, press portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 380px"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <span className="text-eyebrow text-ink-faint">Long Bio</span>
            <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-ink-dim">
              {longBio.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Audience & Community" title="Community Snapshot" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {credibilityStats.map((stat) => (
              <div key={stat.id} className="bg-bg p-6 text-center">
                <span className="font-display block text-3xl font-extrabold text-accent">
                  {stat.value}
                </span>
                <span className="text-eyebrow mt-2 block text-ink-dim">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Platforms" title="Where To Find Sygmaulf" />
          </ScrollReveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <Card key={platform.id} className="flex items-center justify-between">
                <span className="text-sm font-medium">{platform.label}</span>
                <VerificationBadge status={platform.verificationStatus} />
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Titles" title="Gaming Titles" />
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {gamingTitles.map((title) => (
              <span
                key={title}
                className="border border-line-soft px-4 py-2 text-sm text-ink-dim"
              >
                {title}
              </span>
            ))}
            <span className="border border-line-soft px-4 py-2 text-sm text-ink-faint">
              and other titles
            </span>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Featured / Partnered / Worked With" title="Brands & Publishers" />
          </ScrollReveal>
          <div className="mt-8">
            <PartnerLogoStrip />
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Achievements"
              title="Competitive & Industry Highlights"
              description="Full detail available on the About and Events pages."
            />
          </ScrollReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {achievements
              .filter((a) => a.featured)
              .map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between gap-4 border border-line-soft px-5 py-4"
                >
                  <span className="text-sm text-ink">{a.title}</span>
                  <VerificationBadge status={a.verificationStatus} />
                </div>
              ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Podcast" title="GGEZ" />
          </ScrollReveal>
          <p className="mt-4 max-w-xl text-ink-dim">Gaming conversations beyond the match.</p>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Events" title="Recent Events" />
          </ScrollReveal>
          <div className="mt-6 space-y-3">
            {events.slice(0, 4).map((e) => (
              <div
                key={e.id}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-line-soft py-3 text-sm"
              >
                <span>
                  {e.name} <span className="text-ink-faint">— {e.year}</span>
                </span>
                <span className="font-mono text-accent">{e.result}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Services" title="Available For" />
          </ScrollReveal>
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map((s) => (
              <span key={s.id} className="border border-line-soft px-4 py-2 text-sm">
                {s.title}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Contact" title="Get In Touch" />
          </ScrollReveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {contactMethods.map((m) => (
              <div key={m.id} className="border border-line-soft p-5">
                <span className="text-eyebrow text-ink-faint">{m.label}</span>
                <a
                  href={`mailto:${m.email}`}
                  className="mt-2 block text-sm font-medium text-accent hover:underline"
                >
                  {m.email}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
