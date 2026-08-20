import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Eyebrow, SectionHeading, VerificationBadge } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { communityChannels } from "@/data/community";

export const metadata: Metadata = {
  title: "Community",
  description: "Discord, YouTube, Twitch, and the wider Sygmaulf and Nomads Province community.",
};

export default function CommunityPage() {
  return (
    <>
      <section className="border-b border-line py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Community</Eyebrow>
            <h1 className="font-display mt-4 text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
              Built together.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-dim">
              Players, creators, and organizers connected across Discord, streaming platforms, and
              in-person communities.
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden border border-line">
            <Image
              src="/images/personal/sygmaulf-community-portrait.jpg"
              alt="Sygmaulf, studio portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 380px"
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Channels" title="Where The Community Lives" />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityChannels.map((channel, i) => (
              <ScrollReveal key={channel.id} delay={i * 50}>
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                        {channel.label}
                      </h3>
                      <VerificationBadge status={channel.verificationStatus} />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                      {channel.description}
                    </p>
                  </div>
                  {channel.url ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-1 text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
                    >
                      Join / Visit →
                    </a>
                  ) : (
                    <span className="mt-6 block text-xs font-semibold uppercase tracking-wide text-ink-faint">
                      Link coming soon
                    </span>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
