"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-bg/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-bg/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} logo`}
            width={44}
            height={32}
            className="h-9 w-auto transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
            priority
          />
          <span className="font-display text-lg font-bold leading-tight tracking-wide text-ink">
            Budget
            <br />
            Buddy
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-display text-sm font-semibold uppercase tracking-wider transition-colors ${
                  active ? "text-accent" : "text-ink hover:text-accent"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        className={`mx-6 flex flex-col gap-1 overflow-hidden rounded-2xl border border-border bg-surface shadow-lg transition-all duration-300 ease-out sm:hidden ${
          open ? "mb-4 max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-accent-soft hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
