import type { Metadata } from "next";
import PillButton from "@/components/PillButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Our Mission — ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function MissionPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Nonprofit est. {siteConfig.foundedYear}
      </p>

      <h1 className="mt-4 font-display text-4xl font-bold text-accent-soft sm:text-5xl">
        Our Mission
      </h1>

      <div className="mx-auto mt-6 h-px w-24 bg-border" />

      <p className="mt-8 font-display text-lg italic text-body">
        &ldquo;Financial freedom shouldn&rsquo;t be reserved for those who
        already have it&rdquo;
      </p>

      <h2 className="mt-16 font-display text-2xl font-bold text-accent-soft">
        The Problem
      </h2>
      <p className="mt-4 leading-relaxed text-body">
        Let&rsquo;s be honest — budgeting is hard. Between rent, groceries,
        subscriptions, student loans, and the occasional treat-yourself
        moment, keeping track of where your money goes can feel completely
        overwhelming. Most of us were never taught how to manage money in
        school, and by the time we&rsquo;re adults, the financial world can
        feel like it&rsquo;s speaking a different language.
      </p>
      <p className="mt-6 leading-relaxed text-body">
        We&rsquo;ve seen firsthand how financial stress can weigh people down
        — causing anxiety, straining relationships, and holding people back
        from the life they deserve. The problem isn&rsquo;t that people
        don&rsquo;t care about their money. The problem is that nobody ever
        showed them how.
      </p>

      <h2 className="mt-16 font-display text-2xl font-bold text-accent-soft">
        Why We Built Budget Buddy
      </h2>
      <p className="mt-4 leading-relaxed text-body">
        Budget Buddy was born out of a simple belief: everyone deserves
        access to financial education, regardless of their background, income
        level, or prior knowledge. We&rsquo;re a nonprofit organization, which
        means our only goal is to serve you — not to profit from you.
      </p>
      <p className="mt-6 leading-relaxed text-body">
        We designed our app from the ground up to be approachable,
        encouraging, and genuinely useful. No confusing jargon. No judgment.
        Just clear, step-by-step guidance that meets you exactly where you are
        and helps you take control of your finances — one small step at a
        time.
      </p>

      <p className="mt-16 font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Join Today
      </p>
      <p className="mt-4 leading-relaxed text-body">
        Ready to take the first step toward financial confidence? Budget
        Buddy is here for you — completely free, completely judgment-free.
      </p>

      <div className="mt-8 flex justify-center">
        <PillButton href="/get-the-app" variant="outline">
          Download the App
        </PillButton>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border pt-12 sm:grid-cols-2">
        <div>
          <p className="font-display text-sm font-semibold text-accent-soft">
            Want to help?
          </p>
          <div className="mt-4 flex justify-center">
            <PillButton href="/donate" variant="outline">
              Donate
            </PillButton>
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-accent-soft">
            Need help?
          </p>
          <div className="mt-4 flex justify-center">
            <PillButton href="/contact" variant="outline">
              Contact Us
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
