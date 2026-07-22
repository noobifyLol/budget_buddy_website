import Image from "next/image";
import PillButton from "@/components/PillButton";
import PiggyBankIcon from "@/components/PiggyBankIcon";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ShareButton from "@/components/ShareButton";
import { IconShield, IconSparkles, IconHeart, IconLeaf } from "@/components/icons/FeatureIcons";
import { siteConfig } from "@/lib/site-config";

const features = [
  {
    icon: IconShield,
    title: "Nonprofit, Not For Profit",
    body: "No ads, no data selling, no premium paywall. We only answer to the people who use Budget Buddy.",
  },
  {
    icon: IconSparkles,
    title: "Learning That Feels Like Play",
    body: "Bite-sized lessons, minigames, and a customizable buddy that make budgeting something you look forward to.",
  },
  {
    icon: IconHeart,
    title: "Judgment-Free, Always",
    body: "No confusing jargon, no shame about past mistakes — just clear guidance that meets you where you are.",
  },
  {
    icon: IconLeaf,
    title: "Grows With You",
    body: "Track your spending, unlock rewards, and watch your habits (and your buddy) grow over time.",
  },
];

const steps = [
  {
    label: "Create Your Buddy",
    body: "Set up your profile and customize an avatar that grows alongside your financial habits.",
  },
  {
    label: "Track & Learn",
    body: "Log spending in clear categories while picking up bite-sized lessons that actually stick.",
  },
  {
    label: "Build The Habit",
    body: "Earn rewards for good habits and watch your confidence — and your savings — grow.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg to-dark-bg-2">
        <div
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 animate-blob rounded-full bg-dark-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 animate-blob-slow rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 py-20 sm:px-10 md:flex-row md:gap-10 md:py-28">
          <div className="flex flex-1 flex-col items-start text-left">
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-dark-accent">
                Nonprofit &middot; Est. {siteConfig.foundedYear}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
                Budgeting
                <br />
                Made Easy
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-dark-body">
                With Budget Buddy, anyone can budget. We take pride in making
                financing easy and accessible to all.
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-10 flex flex-wrap gap-4">
              <PillButton href="/mission">Learn More</PillButton>
              <PillButton href="/get-the-app" variant="outline-light">
                Get The App
              </PillButton>
            </Reveal>

            <Reveal delay={320} className="mt-10 flex flex-wrap gap-3">
              {["100% Free", "No Ads", "Judgment-Free"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-dark-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-dark-muted"
                >
                  {pill}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200} className="flex flex-1 items-center justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-full bg-dark-accent/20 blur-3xl"
                aria-hidden="true"
              />
              <Image
                src="/images/cool-turtle.png"
                alt="Budget Buddy's turtle mascot"
                width={340}
                height={260}
                className="h-auto w-64 animate-float drop-shadow-2xl sm:w-80 md:w-96"
                priority
              />
            </div>
          </Reveal>
        </div>

        <div className="relative flex justify-center pb-8">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 animate-bounce text-dark-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path d="M12 4v15M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Why Budget Buddy */}
      <section className="bg-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why Budget Buddy
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              Built differently, on purpose
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              How It Works
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              Three steps to financial confidence
            </h2>
          </Reveal>

          <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
            <div
              className="absolute top-6 left-0 hidden h-px w-full bg-border sm:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <Reveal key={step.label} delay={i * 120} className="relative text-center">
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-white shadow-sm shadow-accent/30">
                  {i === 0 ? (
                    <PiggyBankIcon className="h-7 w-7" />
                  ) : (
                    i + 1
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {step.label}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission teaser */}
      <section className="bg-bg-alt py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <span className="font-display text-5xl leading-none text-gold" aria-hidden="true">
            &ldquo;
          </span>
          <p className="mt-2 font-display text-2xl italic leading-snug text-ink sm:text-3xl">
            Financial freedom shouldn&rsquo;t be reserved for those who
            already have it.
          </p>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            That belief is why Budget Buddy exists — a free, nonprofit app
            built to make financial literacy accessible to everyone,
            regardless of background or income.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PillButton href="/mission" variant="outline">
              Read Our Mission
            </PillButton>
            <ShareButton />
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg-2 to-dark-bg py-20 sm:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 animate-blob rounded-full bg-dark-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <Reveal className="relative mx-auto max-w-2xl px-6 text-center sm:px-10">
          <p className="font-display text-6xl font-bold text-dark-accent sm:text-7xl">
            <CountUp end={100} suffix="%" />
          </p>
          <p className="mt-1 font-display text-xs font-semibold uppercase tracking-[0.25em] text-dark-muted">
            Free. No Catch. Forever.
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to feel good about your money?
          </h2>
          <p className="mt-4 leading-relaxed text-dark-body">
            Join the waitlist for launch, or help us reach more people who
            need a judgment-free way to budget.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PillButton href="/get-the-app">Get The App</PillButton>
            <PillButton href="/donate" variant="outline-light">
              Donate
            </PillButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
