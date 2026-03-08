export const SITE_URL = "https://theulyssesuniverse.com";
export const SITE_NAME = "The Ulysses Universe";
export const SITE_TAGLINE = "Homer's Odyssey. Reimagined among the stars.";
export const SITE_DESCRIPTION =
  "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos in this epic tale of myth, technology, and the journey home.";

export const AUTHOR = {
  name: "Sotiris Spyrou",
  bio: "Creator of the Ulysses Universe trilogy.",
} as const;

export const SOCIAL_LINKS = {
  youtube: "#",
  instagram: "#",
  tiktok: "#",
  x: "#",
  goodreads: "#",
} as const;

export const NAV_LINKS = [
  { label: "Books", href: "/books" },
  { label: "Universe", href: "/universe" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Books", href: "/books" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Press", href: "/press" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  universe: [
    { label: "Characters", href: "/universe/characters" },
    { label: "The Odyssey Ship", href: "/universe/odyssey" },
    { label: "Glossary", href: "/universe/glossary" },
    { label: "Journey Map", href: "/universe/journey" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;

export const BOOKS = {
  theBlinding: {
    slug: "the-blinding",
    title: "The Blinding",
    number: 1,
  },
  theVoidBetween: {
    slug: "the-void-between",
    title: "The Void Between",
    number: 2,
  },
  theReturn: {
    slug: "the-return",
    title: "The Return",
    number: 3,
  },
} as const;

export const NOLAN_HOOK_EXPIRY = new Date("2026-08-01").getTime();
