import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import ShareButton from "@/components/ShareButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-dark-border bg-dark-bg">
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-dark-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="flex flex-col items-start gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.name} logo`}
                width={36}
                height={27}
                className="h-8 w-auto"
              />
              <span className="font-display text-base font-semibold tracking-wide text-dark-accent">
                {siteConfig.legalName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-dark-muted">
              A nonprofit making financial literacy free, friendly, and
              judgment-free for everyone.
            </p>
            <ShareButton className="mt-6 !border-dark-border !text-dark-accent hover:!border-dark-accent hover:!text-dark-bg hover:!bg-dark-accent" />
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:flex-col">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-dark-body transition-colors hover:text-dark-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-left sm:text-right">
            <p className="text-sm text-dark-body">Questions or ideas?</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-display text-sm font-semibold text-dark-accent transition-colors hover:text-white"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-dark-muted">
            &copy; {year} {siteConfig.legalName} — Nonprofit est.{" "}
            {siteConfig.foundedYear}.
          </p>
          <p className="text-xs text-dark-muted">
            Built with{" "}
            <span className="inline-block animate-heartbeat text-dark-accent" aria-hidden="true">
              ♥
            </span>{" "}
            for anyone learning to budget.
          </p>
        </div>
      </div>
    </footer>
  );
}
