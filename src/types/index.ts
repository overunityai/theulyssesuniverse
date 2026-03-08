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
  buyLinks: {
    amazonUK: string;
    amazonUS: string;
  };
  pullQuote: string;
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

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readingTime: number;
  author: string;
  content: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms?: string[];
}
