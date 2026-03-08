import { SITE_URL, SITE_NAME, AUTHOR, SOCIAL_LINKS } from "./constants";
import type { BookMeta, BlogPost } from "@/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/og/hero.webp`,
    sameAs: Object.values(SOCIAL_LINKS).filter((l) => l !== "#"),
    description:
      "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos.",
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
    name: AUTHOR.name,
    url: SITE_URL,
    description: AUTHOR.fullBio,
    sameAs: Object.values(SOCIAL_LINKS).filter((l) => l !== "#"),
    jobTitle: "Author",
    knowsAbout: [
      "Greek mythology",
      "Space opera",
      "Homer's Odyssey",
      "Science fiction writing",
    ],
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
    image: `${SITE_URL}${book.characterImage}`,
    isPartOf: {
      "@type": "BookSeries",
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
