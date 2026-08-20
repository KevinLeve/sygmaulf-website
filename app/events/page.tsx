import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description: "Sygmaulf's competitive portfolio — tournaments, qualifiers, and results.",
};

export default function EventsPage() {
  return (
    <>
      <section className="border-b border-line py-24">
        <Container>
          <Eyebrow>Events</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
            Competitive portfolio.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-dim">
            Tournaments, qualifiers, and results — sourced directly from official event
            documentation.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Record"
              title="Tournaments & Qualifiers"
              description="Every result below is preserved exactly as stated in the supplied reference documents."
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {events.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 50}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
