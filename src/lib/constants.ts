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

// Navigation is generated from theartofwar/web/_partials/nav.json so that this
// site and game.theulyssesuniverse.com cannot drift apart. Do not hand-edit the
// nav here: edit the JSON and run `python3 scripts/build_nav.py --emit-ts`.
export { NAV_LINKS, NAV_CTA, SITE_FOOTER } from "./nav.generated";
export type { NavLink, NavCta, FooterLink, SiteFooter } from "./nav.generated";

// FOOTER_LINKS removed - the footer now comes from SITE_FOOTER (nav.generated.ts).

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
