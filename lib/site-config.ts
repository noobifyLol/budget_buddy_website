export const siteConfig = {
  name: "Budget Buddy",
  legalName: "Budget Buddy Youth Initiative",
  tagline: "Budgeting Made Fun",
  description:
    "Budget Buddy is a youth-led initiative on a mission to make financial literacy fun and accessible for the next generation, through a free, gamified budgeting app.",
  // TODO: swap in the org's real inbox once one exists — this defaults to the
  // site owner's address so the Contact/Donate pages have a working mailto link.
  contactEmail: "budgetbuddyhq@gmail.com",
  // TODO: replace with the real production domain once one is live — used for
  // canonical links, sitemap.xml, robots.txt, and social share cards.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://budgetbuddy.app",
  foundedYear: 2025,
  nav: [
    { label: "Our Mission", href: "/mission" },
    { label: "Get the App", href: "/get-the-app" },
    { label: "Donate", href: "/donate" },
    { label: "Privacy Policy", href: "/policy" },
    { label: "Contact Us", href: "/contact" },
  ],
};
