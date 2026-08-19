import type { Metadata } from "next";
import Image from "next/image";
import { Button, Card, Container, Eyebrow, SectionHeading } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import AchievementCard from "@/components/AchievementCard";
import { longBio, timeline, values } from "@/data/bio";
import { achievements, achievementCategoryLabels } from "@/data/achievements";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Sygmaulf — competitive journey, creator expansion, community building, and current ecosystem.",
};

export default function AboutPage() {
  const categories = Object.keys(achievementCategoryLabels) as (keyof typeof achievementCategoryLabels)[];

  return (
    <>
      <section className="border-b border-line py-24">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
            The story behind Sygmaulf.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-dim">
            A gaming creator built around competition, creativity and community.
          </p>
        </Container>
      </section>

      <section className="border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Who Is Sygmaulf?" title="Professional Biography" />
          </ScrollReveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <ScrollReveal>
              <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden border border-line">
                <Image
                  src="/images/personal/sygmaulf-about-portrait.jpg"
                  alt="Sygmaulf, studio portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 380px"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-5 text-base leading-relaxed text-ink-dim">
                {longBio.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Journey timeline */}
      <section className="border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="My Story" title="Journey Timeline" />
          </ScrollReveal>
          <div className="mt-14 space-y-0">
            {timeline.map((entry, i) => (
              <ScrollReveal key={entry.id} delay={i * 70}>
                <div className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 last:border-b sm:grid-cols-[10rem_1fr] sm:gap-10">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    Phase {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                      {entry.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Portrait + pull-quote break */}
      <section className="border-b border-line py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden border border-line">
              <Image
                src="/images/personal/sygmaulf-about-seated.jpg"
                alt="Sygmaulf, seated studio portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 380px"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl">
              &ldquo;Built around competition, creativity and community.&rdquo;
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Achievements */}
      <section id="achievements" className="scroll-mt-20 border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Track Record"
              title="Achievements"
              description="Client-provided claims are marked as such. Only independently verified sources are labelled Verified."
            />
          </ScrollReveal>

          {categories.map((cat) => {
            const items = achievements.filter((a) => a.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat} className="mt-14 first:mt-12">
                <h3 className="text-eyebrow text-ink-faint">{achievementCategoryLabels[cat]}</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((a, i) => (
                    <ScrollReveal key={a.id} delay={i * 50}>
                      <AchievementCard achievement={a} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* What Sygmaulf stands for */}
      <section className="border-b border-line py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading eyebrow="Values" title="What Sygmaulf Stands For" />
          </ScrollReveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 60}>
                <Card className="flex h-full items-center justify-center border-0 py-12 text-center">
                  <span className="font-display text-2xl font-extrabold uppercase tracking-tight">
                    {v.label}
                  </span>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center">
          <Eyebrow>Let&apos;s Work Together</Eyebrow>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl">
            Want to work with Sygmaulf?
          </h2>
          <div className="mt-10 flex justify-center">
            <Button href="/work-with-sygmaulf" variant="primary">
              Work With Me →
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
