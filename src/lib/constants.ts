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
  /**
   * Identity links populated as the author claims/creates entries.
   * Fill these in (or replace null) once Wikidata Q-ID, ISNI, etc. exist.
   * Used by Person and Organization schema sameAs arrays.
   */
  identity: {
    wikidata: null as string | null,     // e.g. "https://www.wikidata.org/wiki/Q123456789"
    isni: null as string | null,         // e.g. "https://isni.org/isni/0000000XXXXXXXXX"
    orcid: null as string | null,        // optional, academic ID
    goodreadsAuthor: null as string | null,  // e.g. "https://www.goodreads.com/author/show/XXXXX.Sotiris_Spyrou"
    amazonAuthorUS: "https://www.amazon.com/stores/Sotiris-Spyrou/author/B0FM8R4BXL",
    amazonAuthorUK: null as string | null,  // claim then paste here
    bookbubAuthor: null as string | null,
    librarythingAuthor: null as string | null,
    openLibraryAuthor: null as string | null,
    isfdbAuthor: null as string | null,
    reedsyAuthor: null as string | null,
  },
} as const;

/**
 * VerityAI - the author's day-job consultancy.
 * Referenced in Person schema's worksFor to create entity chain.
 */
export const VERITY_AI = {
  name: "VerityAI",
  url: "https://verityai.co",
  description: "Digital Marketing and Responsible AI consultancy founded by Sotiris Spyrou.",
  founderName: "Sotiris Spyrou",
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
  youtube: "https://www.youtube.com/@ulyssesuniverse",
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
    { label: "Contact", href: "/contact" },
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
