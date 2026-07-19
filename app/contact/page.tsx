import type { Metadata } from "next";
import PillButton from "@/components/PillButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact Us — ${siteConfig.name}`,
  description: "Get in touch with the Budget Buddy team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center sm:px-10">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Need help?
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-accent-soft sm:text-5xl">
        Contact Us
      </h1>
      <div className="mx-auto mt-6 h-px w-24 bg-border" />

      <p className="mt-8 leading-relaxed text-body">
        Questions, feedback, or partnership ideas — we&rsquo;d love to hear
        from you. Send us a message and someone from the team will get back
        to you soon.
      </p>

      <div className="mt-8 flex justify-center">
        <PillButton href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </PillButton>
      </div>
    </section>
  );
}
