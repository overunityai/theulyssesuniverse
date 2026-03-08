export const SITE_URL = "https://theulyssesuniverse.com";
export const SITE_NAME = "The Ulysses Universe";
export const SITE_TAGLINE = "Homer's Odyssey. Reimagined among the stars.";
export const SITE_DESCRIPTION =
  "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos in this epic tale of myth, technology, and the journey home.";

export const AUTHOR = {
  name: "Sotiris Spyrou",
  bio: "Creator of the Ulysses Universe trilogy. Founder of VerityAI.",
  fullBio:
    "Sotiris Spyrou is the creator of the Ulysses Universe, a space opera trilogy reimagining Homer's Odyssey. He grew up on Greek myths, science fiction, and early home computers in equal measure, and spent 20 years wondering what those worlds would look like combined. Three books and one battered starship later - that question has an answer. He writes from Warwickshire - Shakespeare's county.",
  credentials: [
    "Author of the Ulysses Universe trilogy",
    "Founder, VerityAI - Digital Marketing and Responsible AI",
    "27 years in digital",
    "Based in Warwickshire, UK",
  ],
  linkedin: "https://linkedin.com/in/sspyrou",
} as const;

export const AMAZON_LINKS = {
  authorPage: "https://www.amazon.com/stores/Sotiris-Spyrou/author/B0FM8R4BXL",
  collectionUS: "https://www.amazon.com/dp/B0GNFQM4FN",
  collectionUK: "https://www.amazon.co.uk/dp/B0GNFQM4FN",
  trilogySeriesUS: "https://www.amazon.com/Ulysses-Universe-Trilogy-MR-ebook/dp/B0GNGSJ6TD",
  boxSetUS: "https://www.amazon.com/Ulysses-Universe-Trilogy-MR-ebook/dp/B0GNGSJ6TD",
  boxSetUK: "https://www.amazon.co.uk/dp/B0GNGSJ6TD",
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
