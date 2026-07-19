import type { Metadata } from "next";
import PillButton from "@/components/PillButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Donate — ${siteConfig.name}`,
  description:
    "Support Budget Buddy's mission to make financial education free and accessible to everyone.",
};

const uses = [
  {
    title: "Keeping the app free",
    body: "Every feature stays free for the people who need it most — no premium tier, no paywalls.",
  },
  {
    title: "Building better lessons",
    body: "Funding goes toward research-backed financial literacy content, not just entertainment.",
  },
  {
    title: "Reaching more people",
    body: "Donations help us grow beyond our first users and bring Budget Buddy to more communities.",
  },
];

export default function DonatePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Want to help?
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-accent-soft sm:text-5xl">
        Donate
      </h1>
      <div className="mx-auto mt-6 h-px w-24 bg-border" />

      <p className="mt-8 leading-relaxed text-body">
        Budget Buddy is a nonprofit — every dollar we raise goes toward
        making financial education free and judgment-free for anyone who
        needs it. We&rsquo;re still setting up online giving, so for now the
        fastest way to donate is to reach out directly.
      </p>

      <div className="mt-8 flex justify-center">
        <PillButton href={`mailto:${siteConfig.contactEmail}?subject=Donation to Budget Buddy`}>
          Email Us to Donate
        </PillButton>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-12 text-left sm:grid-cols-3">
        {uses.map((use) => (
          <div key={use.title}>
            <p className="font-display text-sm font-bold text-accent-soft">
              {use.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-body">{use.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
