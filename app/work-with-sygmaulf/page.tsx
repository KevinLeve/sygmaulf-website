import type { Metadata } from "next";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import CampaignBuilder from "@/components/CampaignBuilder";
import CommercialEnquiryForm from "@/components/CommercialEnquiryForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Work With Sygmaulf",
  description:
    "Connect your brand with gaming audiences through content, creators, esports and experiences.",
};

export default function WorkWithSygmaulfPage() {
  return (
    <>
      <section className="border-b border-line py-24">
        <Container>
          <Eyebrow>Work With Sygmaulf</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
            Build a campaign people remember.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-dim">
            Connect your brand with gaming audiences through content, creators, esports and
            experiences.
          </p>
        </Container>
      </section>

      <section className="border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Services" title="What We Build Together" />
          </ScrollReveal>
          <div className="mt-14 space-y-0">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 60}>
                <div className="grid gap-6 border-t border-line py-10 last:border-b lg:grid-cols-[1fr_1.4fr_auto] lg:items-center lg:gap-10">
                  <div>
                    <span className="font-mono text-xs text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-2 text-3xl font-bold uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-dim">{service.summary}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border border-line-soft px-3 py-1.5 text-xs text-ink-dim"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="#campaign-builder" variant="outline" className="w-fit">
                    {service.ctaLabel} →
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="campaign-builder" className="scroll-mt-20 border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Campaign Builder"
              title="Plan your campaign"
              description="Six quick steps — we'll follow up with a plan tailored to your goal, audience, and budget."
            />
          </ScrollReveal>
          <div className="mt-12 mx-auto max-w-2xl">
            <CampaignBuilder />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Prefer A Simple Form?"
              title="Commercial Enquiry"
              description="Send a full brief directly — we'll route it to the right person."
            />
          </ScrollReveal>
          <div className="mt-12 mx-auto max-w-3xl">
            <CommercialEnquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
