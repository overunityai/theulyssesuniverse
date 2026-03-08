import { SITE_URL, SITE_NAME, AUTHOR, SOCIAL_LINKS } from "./constants";
import type { BookMeta, BlogPost } from "@/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo.png`,
    sameAs: Object.values(SOCIAL_LINKS).filter((l) => l !== "#"),
    description:
      "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos.",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: SITE_URL,
    sameAs: Object.values(SOCIAL_LINKS).filter((l) => l !== "#"),
  };
}

export function bookSchema(book: BookMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.description.split("\n\n")[0],
    author: {
      "@type": "Person",
      name: AUTHOR.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Amazon KDP",
    },
    bookFormat: "https://schema.org/EBook",
    numberOfPages: Math.round(book.wordCount / 250),
    inLanguage: "en",
    genre: "Space Opera",
    url: `${SITE_URL}/books/${book.slug}`,
    image: `${SITE_URL}/images/books/${book.slug}-cover.jpg`,
    isPartOf: {
      "@type": "BookSeries",
      name: SITE_NAME,
      position: book.number,
    },
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
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
