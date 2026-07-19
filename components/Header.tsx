"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 pt-4 sm:px-10">
        <span className="font-display text-xs font-semibold tracking-wide text-white/90 sm:text-sm">
          {siteConfig.legalName}
        </span>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${siteConfig.name} logo`}
            width={48}
            height={35}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-lg font-bold leading-tight tracking-wide text-accent">
            BUDGET
            <br />
            BUDDY
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold uppercase tracking-wider text-accent-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span className="h-0.5 w-6 bg-accent-soft" />
          <span className="h-0.5 w-6 bg-accent-soft" />
          <span className="h-0.5 w-6 bg-accent-soft" />
        </button>
      </div>

      {open && (
        <nav className="mx-6 mb-4 flex flex-col gap-4 rounded-2xl border border-border bg-panel px-6 py-6 sm:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm font-semibold uppercase tracking-wider text-accent-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
