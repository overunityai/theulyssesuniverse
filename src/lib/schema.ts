import { SITE_URL, SITE_NAME, AUTHOR, SOCIAL_LINKS, VERITY_AI, AMAZON_LINKS } from "./constants";
import type { BookMeta, BlogPost } from "@/types";

/**
 * Build the sameAs array for the author's Person entity.
 * Filters out null entries from AUTHOR.identity and adds active social links.
 */
function authorSameAs(): string[] {
  const identityLinks: string[] = [];
  for (const v of Object.values(AUTHOR.identity)) {
    if (typeof v === "string" && v.length > 0) identityLinks.push(v);
  }
  const socialLinks: string[] = [];
  for (const l of Object.values(SOCIAL_LINKS)) {
    if (typeof l === "string" && l !== "#") socialLinks.push(l);
  }
  return [AUTHOR.linkedin, ...identityLinks, ...socialLinks];
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/og/hero.webp`,
    sameAs: Object.values(SOCIAL_LINKS).filter((l) => l !== "#"),
    description:
      "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos.",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: AUTHOR.name,
    },
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "Warwickshire",
    },
    knowsAbout: [
      "Space opera",
      "Homer's Odyssey",
      "Greek mythology",
      "Science fiction",
      "Literary adaptations",
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#person`,
    name: AUTHOR.name,
    url: SITE_URL,
    description: AUTHOR.fullBio,
    image: `${SITE_URL}/images/about/author-photo.jpeg`,
    sameAs: authorSameAs(),
    jobTitle: "Author and Founder",
    nationality: {
      "@type": "Country",
      name: "United Kingdom",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "Warwickshire",
    },
    worksFor: {
      "@type": "Organization",
      name: VERITY_AI.name,
      url: VERITY_AI.url,
      description: VERITY_AI.description,
    },
    knowsAbout: [
      "Greek mythology",
      "Space opera",
      "Homer's Odyssey",
      "Science fiction writing",
      "Artificial intelligence",
      "Responsible AI",
      "Digital marketing",
    ],
    knowsLanguage: ["en-GB"],
  };
}

export function bookSchema(book: BookMeta) {
  const identifiers: Record<string, unknown>[] = [];

  // Add Amazon ASIN as identifier (Kindle format)
  if (book.amazonAsin) {
    identifiers.push({
      "@type": "PropertyValue",
      propertyID: "ASIN",
      value: book.amazonAsin,
    });
  }
  // Legacy single ISBN field
  if (book.isbn) {
    identifiers.push({
      "@type": "PropertyValue",
      propertyID: "ISBN",
      value: book.isbn,
    });
  }
  // Paperback ISBN-13
  if (book.isbnPaperback) {
    identifiers.push({
      "@type": "PropertyValue",
      propertyID: "ISBN_13",
      value: book.isbnPaperback,
      description: "Paperback edition",
    });
  }
  // Hardback ISBN-13
  if (book.isbnHardback) {
    identifiers.push({
      "@type": "PropertyValue",
      propertyID: "ISBN_13",
      value: book.isbnHardback,
      description: "Hardback edition",
    });
  }

  // Build isbn array combining all available ISBNs (schema.org accepts string or array)
  const allIsbns: string[] = [];
  if (book.isbn) allIsbns.push(book.isbn);
  if (book.isbnPaperback) allIsbns.push(book.isbnPaperback);
  if (book.isbnHardback) allIsbns.push(book.isbnHardback);

  const sameAs: string[] = [];
  if (book.buyLinks?.amazonUS) sameAs.push(book.buyLinks.amazonUS);
  if (book.buyLinks?.amazonUK) sameAs.push(book.buyLinks.amazonUK);
  if (book.goodreadsUrl) sameAs.push(book.goodreadsUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${SITE_URL}/books/${book.slug}#book`,
    name: book.title,
    description: book.description.split("\n\n")[0],
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: AUTHOR.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
    },
    bookFormat: "https://schema.org/EBook",
    numberOfPages: book.pageCount || Math.round(book.wordCount / 250),
    inLanguage: "en-GB",
    genre: "Space Opera",
    url: `${SITE_URL}/books/${book.slug}`,
    image: `${SITE_URL}${book.characterImage}`,
    isbn: allIsbns.length > 0 ? (allIsbns.length === 1 ? allIsbns[0] : allIsbns) : undefined,
    identifier: identifiers.length > 0 ? identifiers : undefined,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    datePublished: book.datePublished || undefined,
    isPartOf: {
      "@type": "BookSeries",
      "@id": `${SITE_URL}/books#series`,
      name: SITE_NAME,
      position: book.number,
    },
  };
}

export function articleSchema(post: BlogPost) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/blog/${post.slug}#article`,
      headline: post.title,
      description: post.description,
      image: post.image.startsWith("http")
        ? post.image
        : `${SITE_URL}${post.image}`,
      datePublished: post.date,
      dateModified: post.lastUpdated || post.date,
      author: {
        "@type": "Person",
        name: post.author,
        url: SITE_URL,
        description: AUTHOR.fullBio,
      },
      publisher: {
        "@id": `${SITE_URL}#organization`,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${post.slug}`,
      },
      about: post.tags
        .slice(0, 5)
        .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1)),
      articleSection: post.category,
      keywords: post.tags.join(", "),
      wordCount: post.content.split(/\s+/).length,
      inLanguage: "en-GB",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/og/hero.webp`,
    },
  ];

  // Add FAQ schema if post has FAQ items
  if (post.faq && post.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/blog/${post.slug}#faq`,
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
    },
    description:
      "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos.",
  };
}
