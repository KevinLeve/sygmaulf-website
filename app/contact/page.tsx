import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import { contactMethods } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "General, business, event, creator network, and media enquiries for Sygmaulf.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line py-24">
        <Container>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-dim">
            General questions, campaign briefs, event bookings, or creator network enquiries —
            pick what fits.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <SectionHeading eyebrow="Reach Out" title="Contact Channels" />
            <div className="mt-8 space-y-5">
              {contactMethods.map((m) => (
                <div key={m.id} className="border-b border-line-soft pb-5">
                  <span className="text-eyebrow text-ink-faint">{m.label}</span>
                  <p className="mt-1 text-sm text-ink-dim">{m.description}</p>
                  <a
                    href={`mailto:${m.email}`}
                    className="mt-2 block text-sm font-semibold text-accent hover:underline"
                  >
                    {m.email}
                  </a>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <ContactForm />
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
