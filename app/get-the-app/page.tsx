import type { Metadata } from "next";
import Image from "next/image";
import PillButton from "@/components/PillButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Get the App — ${siteConfig.name}`,
  description:
    "Budget Buddy pairs real budgeting tools with bite-sized lessons, minigames, and a customizable avatar that grows with your progress.",
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
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 text-center sm:px-10 md:py-24">
        <Image
          src="/images/cool-turtle.png"
          alt="Budget Buddy mascot"
          width={220}
          height={170}
          className="h-auto w-40 sm:w-48"
          priority
        />
        <h1 className="font-display text-4xl font-bold text-accent-soft sm:text-5xl">
          Get the App
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-body">
          Real budgeting tools, bite-sized lessons, and a few good games —
          Budget Buddy turns financial literacy into a habit you actually
          want to keep. Free forever, because we&rsquo;re a nonprofit.
        </p>
        <PillButton href="/contact">Notify Me at Launch</PillButton>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <h2 className="text-center font-display text-2xl font-bold text-accent-soft">
          Make It Yours
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-body">
          Earn rewards as you learn and unlock new looks for your buddy —
          progress that actually feels good.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {skins.map((skin) => (
            <div
              key={skin.src}
              className="flex items-center justify-center rounded-2xl border border-border bg-panel p-6"
            >
              <Image
                src={skin.src}
                alt={skin.alt}
                width={160}
                height={160}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <h2 className="text-center font-display text-2xl font-bold text-accent-soft">
          Track What Matters
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-body">
          Sort spending into clear categories so you always know where your
          money is going.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-6">
          {categories.map((category) => (
            <div key={category.label} className="flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-panel">
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
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10">
        <h2 className="font-display text-2xl font-bold text-accent-soft">
          We&rsquo;re Putting the Finishing Touches On It
        </h2>
        <p className="mt-4 leading-relaxed text-body">
          Budget Buddy is in active development. Sign up and we&rsquo;ll let
          you know the moment it&rsquo;s available on the App Store and
          Google Play.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href="/contact" variant="outline">
            Get Notified
          </PillButton>
        </div>
      </section>
    </>
  );
}
