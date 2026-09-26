import type { Metadata } from "next";
import Image from "next/image";
import PillButton from "@/components/PillButton";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Get the App — ${siteConfig.name}`,
  description:
    "Budget Buddy pairs real budgeting tools with gamified lessons — XP, levels, minigames, and a customizable avatar that grows with your progress.",
};

const skins = [
  { src: "/images/turtles/cuteBigHead_no_bg_3xfq2ne3.png", alt: "Sparkly green turtle avatar skin" },
  { src: "/images/turtles/Wface_no_bg_l7nvmfum.png", alt: "Mint turtle avatar skin with orange shell" },
  { src: "/images/turtles/walkingredshell_no_bg_63pfbf03.png", alt: "Turtle avatar skin with red shell" },
  { src: "/images/turtles/cuteTropicalhandDrawn_no_bg_i3ipxxln.png", alt: "Hand-drawn tropical turtle avatar skin" },
];

const categories = [
  { src: "/images/icons/housing.png", label: "Housing" },
  { src: "/images/icons/transport.png", label: "Transport" },
  { src: "/images/icons/subscriptions.png", label: "Subscriptions" },
  { src: "/images/icons/food.png", label: "Food" },
  { src: "/images/icons/health.png", label: "Health" },
  { src: "/images/icons/savings.png", label: "Savings" },
];

export default function GetTheAppPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bg-alt px-6 py-20 text-center sm:px-10 md:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent-soft/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8">
          <Reveal>
            <Image
              src="/images/cool-turtle.png"
              alt="Budget Buddy mascot"
              width={220}
              height={170}
              className="h-auto w-40 animate-float sm:w-48"
              priority
            />
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
              Get the App
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-xl text-lg leading-relaxed text-body">
              Real budgeting tools, bite-sized lessons, and a few good games —
              Budget Buddy turns financial literacy into a habit you actually
              want to keep. Free forever, because a youth-led initiative
              built it to help people, not to profit.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <PillButton href="/contact">Notify Me at Launch</PillButton>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Make It Yours
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-body">
            Earn rewards as you learn and unlock new looks for your buddy —
            progress that actually feels good.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {skins.map((skin, i) => (
            <Reveal key={skin.src} delay={i * 90}>
              <div className="group flex items-center justify-center rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <Image
                  src={skin.src}
                  alt={skin.alt}
                  width={160}
                  height={160}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-alt px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Track What Matters
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-body">
              Sort spending into clear categories so you always know where
              your money is going.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-6">
            {categories.map((category, i) => (
              <Reveal key={category.label} delay={i * 70} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <Image
                    src={category.src}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {category.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-dark-bg to-dark-bg-2 px-6 py-20 text-center sm:px-10 sm:py-24">
        <div
          className="pointer-events-none absolute -bottom-16 left-1/2 h-64 w-64 -translate-x-1/2 animate-blob rounded-full bg-dark-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <Reveal className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            We&rsquo;re Putting the Finishing Touches On It
          </h2>
          <p className="mt-4 leading-relaxed text-dark-body">
            Budget Buddy is in active development. Sign up and we&rsquo;ll let
            you know the moment it&rsquo;s available on the App Store and
            Google Play.
          </p>
          <div className="mt-8 flex justify-center">
            <PillButton href="/contact" variant="outline-light">
              Get Notified
            </PillButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
