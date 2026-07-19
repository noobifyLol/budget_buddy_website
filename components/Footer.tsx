import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} logo`}
            width={32}
            height={24}
            className="h-7 w-auto opacity-90"
          />
          <span className="font-display text-sm font-semibold tracking-wide text-accent-soft">
            {siteConfig.legalName}
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-accent-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted">
          &copy; {year} {siteConfig.legalName} — Nonprofit est. {siteConfig.foundedYear}.
        </p>
      </div>
    </footer>
  );
}
