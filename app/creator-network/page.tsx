import type { Metadata } from "next";
import { Button, Card, Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { networkCategories } from "@/data/creator-network";

export const metadata: Metadata = {
  title: "Creator Network",
  description:
    "An ecosystem connecting players, creators, organizers, communities and brands around Sygmaulf.",
};

export default function CreatorNetworkPage() {
  return (
    <>
      <section className="border-b border-line py-24">
        <Container>
          <Eyebrow>Creator Network</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
            An ecosystem, not a list.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-dim">
            Connecting players, creators, organizers, communities and brands.
          </p>
          <div className="font-mono mt-10 flex flex-wrap gap-x-3 gap-y-2 text-sm uppercase tracking-widest text-accent">
            <span>Players</span>
            <span className="text-ink-faint">•</span>
            <span>Creators</span>
            <span className="text-ink-faint">•</span>
            <span>Organizers</span>
            <span className="text-ink-faint">•</span>
            <span>Communities</span>
            <span className="text-ink-faint">•</span>
            <span>Brands</span>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Categories" title="Who's In The Network" />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {networkCategories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 60}>
                <Card className="h-full">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                    {cat.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{cat.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 border border-line-soft p-8 text-center text-sm text-ink-faint">
            Roster coming soon — creator and organizer listings will appear here as they&apos;re
            confirmed.
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center">
          <Eyebrow>Join The Network</Eyebrow>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl">
            Creators, players & organizers welcome.
          </h2>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Enquire About The Network →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
