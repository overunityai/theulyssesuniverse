export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  youtube: string;
  instagram: string;
  tiktok: string;
  x: string;
  goodreads: string;
}

export type AccentColor = "gold" | "purple" | "red" | "blue";

export interface BookMeta {
  slug: string;
  title: string;
  number: number;
  hook: string;
  description: string;
  wordCount: number;
  chapters: number;
  accentColor: AccentColor;
  characterImage: string;
  /** Book cover image path (front-only WebP). Falls back to characterImage if absent. */
  cover?: string;
  buyLinks: {
    amazonUK: string;
    amazonUS: string;
  };
  pullQuote: string;
  /** Amazon Standard Identification Number - always present for KDP titles (Kindle format). */
  amazonAsin?: string;
  /** Legacy single ISBN-13 field - prefer isbnPaperback / isbnHardback. Kept for backward compat. */
  isbn?: string;
  /** ISBN-13 for paperback edition (KDP-issued or own). */
  isbnPaperback?: string;
  /** ISBN-13 for hardback edition (KDP-issued or own). */
  isbnHardback?: string;
  /** Page count for print editions. */
  pageCount?: number;
  /** ISO 8601 date string, e.g. "2026-05-01". For schema datePublished. */
  datePublished?: string;
  /** Goodreads book URL once claimed. */
  goodreadsUrl?: string;
  /** Wikidata Q-ID URL once entry exists, e.g. "https://www.wikidata.org/wiki/Q123456789". */
  wikidataUrl?: string;
}

export interface CharacterMeta {
  slug: string;
  name: string;
  role: string;
  description: string;
  relationships: string[];
  imagePath: string;
  accentColor: AccentColor;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  category: string;
  tags: string[];
  image: string;
  readingTime: number;
  author: string;
  content: string;
  faq?: FAQItem[];
  keyTakeaways?: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}
