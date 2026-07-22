import type { Metadata } from "next";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import { IconShield, IconSparkles, IconCompass } from "@/components/icons/FeatureIcons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Donate — ${siteConfig.name}`,
  description:
    "Support Budget Buddy's mission to make financial education free and accessible to everyone.",
};

const uses = [
  {
    icon: IconShield,
    title: "Keeping the app free",
    body: "Every feature stays free for the people who need it most — no premium tier, no paywalls.",
  },
  {
    icon: IconSparkles,
    title: "Building better lessons",
    body: "Funding goes toward research-backed financial literacy content, not just entertainment.",
  },
  {
    icon: IconCompass,
    title: "Reaching more people",
    body: "Donations help us grow beyond our first users and bring Budget Buddy to more communities.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-bg-alt px-6 py-20 text-center sm:px-10 sm:py-28">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Want to help?
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            Donate
          </h1>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gold" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-body">
            Budget Buddy is a nonprofit — every dollar we raise goes toward
            making financial education free and judgment-free for anyone who
            needs it. We&rsquo;re still setting up online giving, so for now
            the fastest way to donate is to reach out directly.
          </p>

          <div className="mt-8 flex justify-center">
            <PillButton
              href={`mailto:${siteConfig.contactEmail}?subject=Donation to Budget Buddy`}
            >
              Email Us to Donate
            </PillButton>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <Reveal className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Where It Goes
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Every dollar has a job
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {uses.map((use, i) => (
            <Reveal key={use.title} delay={i * 100}>
              <div className="h-full rounded-3xl border border-border bg-surface p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <use.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 font-display text-base font-bold text-ink">
                  {use.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {use.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-alt px-6 py-16 text-center sm:px-10">
        <Reveal>
          <p className="font-display text-lg font-bold text-ink">
            Can&rsquo;t give right now?
          </p>
          <p className="mx-auto mt-2 max-w-md leading-relaxed text-body">
            Spreading the word costs nothing and helps just as much. Share
            Budget Buddy with someone who could use it.
          </p>
          <div className="mt-6 flex justify-center">
            <ShareButton />
          </div>
        </Reveal>
      </section>
    </>
  );
}
