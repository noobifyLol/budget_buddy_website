"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function ShareButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      text: siteConfig.description,
      url: siteConfig.url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(siteConfig.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing more we can do silently
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4 transition-transform group-hover:scale-110"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M8.6 10.5 15.4 6.5M8.6 13.5 15.4 17.5" stroke="currentColor" strokeWidth="2" />
      </svg>
      {copied ? "Link Copied!" : "Share Budget Buddy"}
    </button>
  );
}
