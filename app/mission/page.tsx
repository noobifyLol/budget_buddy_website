import type { Metadata } from "next";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import { IconCompass, IconHeart } from "@/components/icons/FeatureIcons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Our Mission — ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function MissionPage() {
  return (
    <>
      <section className="bg-bg-alt px-6 py-20 text-center sm:px-10 sm:py-28">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Youth-Led Initiative &middot; Est. {siteConfig.foundedYear}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            Our Mission
          </h1>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gold" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl font-display text-xl italic leading-snug text-ink sm:text-2xl">
            &ldquo;Financial freedom shouldn&rsquo;t be reserved for those who
            already have it.&rdquo;
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-surface p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-gold">
                <IconCompass className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink">
                The Problem
              </h2>
              <p className="mt-4 leading-relaxed text-body">
                Let&rsquo;s be honest — budgeting is hard. Between rent,
                groceries, subscriptions, student loans, and the occasional
                treat-yourself moment, keeping track of where your money goes
                can feel completely overwhelming. Most of us were never
                taught how to manage money in school, and by the time
                we&rsquo;re adults, the financial world can feel like
                it&rsquo;s speaking a different language.
              </p>
              <p className="mt-4 leading-relaxed text-body">
                We&rsquo;ve seen firsthand how financial stress can weigh
                people down — causing anxiety, straining relationships, and
                holding people back from the life they deserve. The problem
                isn&rsquo;t that people don&rsquo;t care about their money.
                The problem is that nobody ever showed them how.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border bg-surface p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <IconHeart className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink">
                Why We Built Budget Buddy
              </h2>
              <p className="mt-4 leading-relaxed text-body">
                Budget Buddy started as a youth-led initiative: a group of
                young people who noticed nobody had taught us this stuff
                either, and decided to build the resource we wished we&rsquo;d
                had. We&rsquo;re not a company — our only goal is to help
                people learn, not to profit from them.
              </p>
              <p className="mt-4 leading-relaxed text-body">
                We designed our app from the ground up to feel like a game,
                not a chore — earn XP, level up, unlock rewards, and build
                streaks while you learn. No confusing jargon. No judgment.
                Just clear lessons and a little friendly competition that
                helps you take control of your finances — one level at a
                time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-alt px-6 py-20 text-center sm:px-10 sm:py-28">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Join Today
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Ready to take the first step toward financial confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-body">
            Budget Buddy is here for you — completely free, completely
            judgment-free.
          </p>
          <div className="mt-8 flex justify-center">
            <PillButton href="/get-the-app">Download the App</PillButton>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <p className="font-display text-sm font-semibold text-ink">
                Want to help?
              </p>
              <div className="mt-4 flex justify-center">
                <PillButton href="/donate" variant="outline">
                  Donate
                </PillButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <p className="font-display text-sm font-semibold text-ink">
                Need help?
              </p>
              <div className="mt-4 flex justify-center">
                <PillButton href="/contact" variant="outline">
                  Contact Us
                </PillButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
