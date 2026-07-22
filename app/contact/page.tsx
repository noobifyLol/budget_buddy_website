import type { Metadata } from "next";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import { IconMail } from "@/components/icons/FeatureIcons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact Us — ${siteConfig.name}`,
  description: "Get in touch with the Budget Buddy team.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-bg-alt px-6 py-24 text-center sm:px-10 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-accent-soft/70 blur-3xl"
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto max-w-2xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <IconMail className="h-7 w-7" />
        </div>

        <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Need help?
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
          Contact Us
        </h1>
        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gold" />

        <p className="mx-auto mt-8 max-w-md leading-relaxed text-body">
          Questions, feedback, or partnership ideas — we&rsquo;d love to hear
          from you. Send us a message and someone from the team will get back
          to you soon.
        </p>

        <div className="mt-8 flex justify-center">
          <PillButton href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </PillButton>
        </div>
      </Reveal>
    </section>
  );
}
