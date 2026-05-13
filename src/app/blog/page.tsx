import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog";
import { CATEGORY_META } from "@/lib/categories";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { FAQSection } from "@/components/blog/FAQSection";

const BLOG_SEO_TITLE = "Blog | Mythology, Space Opera, World-Building";
const BLOG_SEO_DESCRIPTION =
  "Articles on Homer's Odyssey, Greek mythology, space opera, and the world-building behind the Ulysses Universe trilogy. New post every week.";

const BLOG_INDEX_FAQ = [
  {
    question: "What is the Ulysses Universe blog about?",
    answer:
      "The Ulysses Universe blog covers Homer's Odyssey, Greek mythology, space opera as a genre, world-building from the trilogy itself, and the writing process behind the three books. Articles are written by Sotiris Spyrou, the trilogy's author. New posts publish regularly, with extra cadence around the Christopher Nolan Odyssey release in July 2026.",
  },
  {
    question: "Where should I start reading?",
    answer:
      "Start with Why Set the Odyssey in Space for the trilogy's premise, then read The Merge: When Humanity Accidentally Woke the Gods for the foundational backstory. From there, pick a category that interests you: Characters for the cast, The Pantheon for the gods, Mythology for Homer and Greek myth, Behind the Scenes for world-building, or Space Opera for genre reading lists.",
  },
  {
    question: "Are the blog posts spoiler-heavy?",
    answer:
      "No. Posts are constructed to be readable before, during, or after a first read of the trilogy. Major plot reveals are flagged where they appear. Character profiles and world-building essays avoid spoilers where possible. Timeline-focused pieces reference events but do not detail the surrounding plot beats.",
  },
  {
    question: "Who writes the Ulysses Universe blog?",
    answer:
      "Sotiris Spyrou, the author of the Ulysses Universe trilogy. Sotiris writes every post personally. The trilogy and the blog share a single voice and a single set of canonical references.",
  },
  {
    question: "How often does the blog publish new articles?",
    answer:
      "Roughly two to four new posts per week across May to August 2026, slowing to one or two per week thereafter. The release window for Books 2 and 3 (May-June 2026) and the Nolan film (July 2026) is the highest-cadence period of the year.",
  },
];

export const metadata: Metadata = {
  title: BLOG_SEO_TITLE,
  description: BLOG_SEO_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: BLOG_SEO_TITLE,
    description: BLOG_SEO_DESCRIPTION,
    type: "website",
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: `${SITE_URL}/images/og/hero.webp`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_SEO_TITLE,
    description: BLOG_SEO_DESCRIPTION,
    images: [`${SITE_URL}/images/og/hero.webp`],
  },
};

function blogCollectionSchema(posts: ReturnType<typeof getAllPosts>) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `${SITE_NAME} Blog`,
    description: BLOG_SEO_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    inLanguage: "en-GB",
    author: {
      "@type": "Person",
      name: "Sotiris Spyrou",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.lastUpdated || p.date,
      author: { "@type": "Person", name: p.author },
      image: p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`,
    })),
  };
}

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  // Category post counts for the tab labels
  const categoryCounts = BLOG_CATEGORIES.reduce<Record<string, number>>(
    (acc, cat) => {
      acc[cat] = posts.filter((p) => p.category === cat).length;
      return acc;
    },
    {}
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />
      <JsonLd data={blogCollectionSchema(posts)} />
      <JsonLd data={faqSchema(BLOG_INDEX_FAQ)} />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Dispatches
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            The Ulysses Universe Blog
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-4">
            Mythology, space opera, world-building, and the long story of how
            you turn a 3,000-year-old poem into a trilogy of space novels.
          </p>
          <p className="font-ui text-sm text-text-tertiary">
            {posts.length} articles, written by Sotiris Spyrou
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-16 z-30 bg-void-black/90 backdrop-blur-md border-b border-border/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav
            className="flex gap-2 py-3 overflow-x-auto scrollbar-hide"
            aria-label="Blog categories"
          >
            <Link
              href="/blog"
              className="font-ui text-sm font-semibold text-gold px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 shrink-0"
            >
              All ({posts.length})
            </Link>
            {BLOG_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              return (
                <Link
                  key={cat}
                  href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-ui text-sm font-semibold text-text-secondary hover:text-gold px-3 py-1.5 rounded-full border border-border/50 hover:border-gold/30 transition-colors shrink-0"
                >
                  {cat} ({count})
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <GreekKeyDivider />

      {/* Featured Article */}
      {featured && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-void-dark border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] bg-void-mid overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void-dark/40 hidden lg:block" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-ui text-xs uppercase tracking-wider text-gold/70">
                      Featured - {featured.category}
                    </span>
                    <span className="text-border">-</span>
                    <span className="font-ui text-xs text-text-tertiary">
                      {featured.readingTime} min read
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4 group-hover:text-gold transition-colors">
                    {featured.title}
                  </h2>
                  <p className="font-body text-text-secondary leading-relaxed mb-4">
                    {featured.description}
                  </p>
                  <p className="font-ui text-xs text-text-tertiary">
                    {formatDate(featured.date)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Browse by category - links into the new category pages */}
      <section className="pb-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-6 text-center">
            Browse by category
          </h2>
          <p className="font-body text-text-secondary text-center max-w-2xl mx-auto mb-10">
            Each category page collects every article on its topic, with an
            intro essay and answers to the questions readers ask most often.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOG_CATEGORIES.map((cat) => {
              const meta = CATEGORY_META[cat];
              const count = categoryCounts[cat] || 0;
              if (!meta) return null;
              return (
                <Link
                  key={cat}
                  href={`/blog/category/${meta.slug}`}
                  className="group bg-void-dark border border-border rounded-lg p-5 transition-all duration-300 hover:border-gold/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg text-text-primary tracking-wide group-hover:text-gold transition-colors">
                      {cat}
                    </h3>
                    <span className="font-ui text-xs text-text-tertiary">
                      {count}
                    </span>
                  </div>
                  <p className="font-body text-sm text-text-secondary line-clamp-2">
                    {meta.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      {rest.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
              All articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-void-dark border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-gold/20"
                >
                  {/* Post image */}
                  <div className="relative aspect-[4/3] bg-void-mid overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-ui text-xs uppercase tracking-wider text-gold/70">
                        {post.category}
                      </span>
                      <span className="text-border">-</span>
                      <span className="font-ui text-xs text-text-tertiary">
                        {post.readingTime} min
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-text-primary tracking-wide mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary line-clamp-3">
                      {post.description}
                    </p>
                    <p className="font-ui text-xs text-text-tertiary mt-3">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <section className="py-20 md:py-28 text-center">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="font-display text-2xl text-text-primary/50 mb-4">
              Transmissions incoming
            </p>
            <p className="font-body text-text-tertiary max-w-md mx-auto">
              The blog launches soon. Sign up for the newsletter and we'll let
              you know when the first articles drop.
            </p>
          </div>
        </section>
      )}

      {/* Blog-level FAQ - AEO-critical for "what is the ulysses universe blog" queries */}
      <GreekKeyDivider />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FAQSection items={BLOG_INDEX_FAQ} />
        </div>
      </section>
    </>
  );
}
