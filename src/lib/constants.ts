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
    wikidata: "https://www.wikidata.org/wiki/Q139860657" as string | null,  // Person entity created 2026-05-20
    isni: "https://isni.org/isni/0000000530304205" as string | null,  // issued 2026-05-19 by British Library
    orcid: null as string | null,        // optional, academic ID
    goodreadsAuthor: "https://www.goodreads.com/author/show/58278668.Sotiris_Spyrou" as string | null,
    amazonAuthorUS: "https://www.amazon.com/stores/Sotiris-Spyrou/author/B0FM8R4BXL",
    amazonAuthorUK: "https://www.amazon.co.uk/stores/Sotiris-Spyrou/author/B0FM8R4BXL" as string | null,
    bookbubAuthor: "https://www.bookbub.com/profile/sotiris-spyrou" as string | null,
    librarythingAuthor: null as string | null,  // pending claim approval
    openLibraryAuthor: "https://openlibrary.org/authors/OL16440366A" as string | null,
    isfdbAuthor: null as string | null,
    reedsyAuthor: null as string | null,
    twitter: "https://twitter.com/spspyrouseo" as string | null,
    pinterest: "https://uk.pinterest.com/theulyssesuniverse" as string | null,
    medium: null as string | null,  // pending profile establishment
    substack: null as string | null,
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

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  submenu?: ReadonlyArray<{
    label: string;
    href: string;
    description?: string;
    external?: boolean;
  }>;
};

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { label: "Books", href: "/books" },
  { label: "Universe", href: "/universe" },
  { label: "Long Way Home", href: "https://game.theulyssesuniverse.com/the-long-way-home", external: true },
  { label: "The Witness", href: "https://game.theulyssesuniverse.com/the-witness", external: true },
  {
    label: "Free Games",
    href: "https://game.theulyssesuniverse.com/free-games",
    external: true,
    submenu: [
      { label: "All Free Games", href: "https://game.theulyssesuniverse.com/free-games", description: "Index", external: true },
      { label: "Bow Contest", href: "https://game.theulyssesuniverse.com/bow", description: "Original", external: true },
      { label: "Pantheon Descends", href: "https://game.theulyssesuniverse.com/invaders", description: "Invaders", external: true },
      { label: "Poseidon's Hunt", href: "https://game.theulyssesuniverse.com/poseidons-hunt", description: "Galaxian", external: true },
      { label: "Echo's Vigil", href: "https://game.theulyssesuniverse.com/echos-vigil", description: "Maze", external: true },
      { label: "Penelope's Vigil", href: "https://game.theulyssesuniverse.com/penelopes-vigil", description: "Missiles", external: true },
      { label: "The Salvage Run", href: "https://game.theulyssesuniverse.com/salvage-run", description: "Asteroids", external: true },
      { label: "The Pantheon Wall", href: "https://game.theulyssesuniverse.com/pantheon-wall", description: "Breakout", external: true },
      { label: "The Tessera Game", href: "https://game.theulyssesuniverse.com/tessera", description: "Othello", external: true },
      { label: "Fleet of Olympus", href: "https://game.theulyssesuniverse.com/fleet-of-olympus", description: "Battleship", external: true },
      { label: "The Pantheon Gambit", href: "https://game.theulyssesuniverse.com/pantheon-gambit", description: "Chess", external: true },
      { label: "The Long Game", href: "https://game.theulyssesuniverse.com/long-game", description: "Backgammon", external: true },
    ],
  },
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
