import PillButton from "@/components/PillButton";
import PiggyBankIcon from "@/components/PiggyBankIcon";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-12 sm:px-10 md:flex-row md:gap-10 md:py-24">
      <div className="flex flex-1 flex-col items-start text-left">
        <h1 className="font-display text-5xl font-bold leading-[1.05] text-accent-soft sm:text-6xl md:text-7xl">
          Budgeting
          <br />
          Made Easy
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-body">
          With Budget Buddy, anyone can budget. We take pride in making
          financing easy and accessible to all.
        </p>

        <PillButton href="/mission" className="mt-10">
          Learn More
        </PillButton>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <PiggyBankIcon className="h-64 w-64 text-accent-soft sm:h-80 sm:w-80 md:h-96 md:w-96" />
      </div>
    </section>
  );
}
