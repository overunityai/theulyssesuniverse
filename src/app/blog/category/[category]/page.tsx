import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog";
import { CATEGORY_META, getCategoryMetaBySlug } from "@/lib/categories";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { KeyTakeaways } from "@/components/blog/KeyTakeaways";
import { FAQSection } from "@/components/blog/FAQSection";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({
    category: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
}

function categoryNameFromSlug(slug: string): string | undefined {
  return BLOG_CATEGORIES.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: catSlug } = await params;
  const meta = getCategoryMetaBySlug(catSlug);
  if (!meta) return { title: "Category Not Found" };

  const canonical = `${SITE_URL}/blog/category/${meta.slug}`;
  const ogImage = `${SITE_URL}/images/og/hero.webp`;

  return {
    title: meta.seoTitle,
    description: meta.seoDescription,
    alternates: { canonical },
    openGraph: {
      title: meta.seoTitle,
      description: meta.seoDescription,
      type: "website",
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.seoTitle,
      description: meta.seoDescription,
      images: [ogImage],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

type CategoryMetaArg = NonNullable<ReturnType<typeof getCategoryMetaBySlug>>;

function collectionPageSchema(args: {
  meta: CategoryMetaArg;
  posts: ReturnType<typeof getAllPosts>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog/category/${args.meta.slug}#collection`,
    name: args.meta.seoTitle,
    description: args.meta.seoDescription,
    url: `${SITE_URL}/blog/category/${args.meta.slug}`,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: `${SITE_NAME} Blog`,
    },
    about: args.meta.name,
    inLanguage: "en-GB",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: args.posts.length,
      itemListElement: args.posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: catSlug } = await params;
  const categoryName = categoryNameFromSlug(catSlug);
  const meta = getCategoryMetaBySlug(catSlug);
  const posts = categoryName
    ? getAllPosts().filter((p) => p.category === categoryName)
    : [];

  return (
    <>
      {/* Schema graph */}
      {meta && (
        <>
          <JsonLd
            data={breadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: meta.name, url: `${SITE_URL}/blog/category/${meta.slug}` },
            ])}
          />
          <JsonLd data={collectionPageSchema({ meta, posts })} />
          {meta.faq.length > 0 && <JsonLd data={faqSchema(meta.faq)} />}
        </>
      )}

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Blog Category
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            {meta?.pageH1 || categoryName || "Category"}
          </h1>
          {meta?.tagline && (
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-4">
              {meta.tagline}
            </p>
          )}
          <p className="font-ui text-sm text-text-tertiary">
            {posts.length} {posts.length === 1 ? "article" : "articles"} in this
            category
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
              className="font-ui text-sm font-semibold text-text-secondary hover:text-gold px-3 py-1.5 rounded-full border border-border/50 hover:border-gold/30 transition-colors shrink-0"
            >
              All
            </Link>
            {BLOG_CATEGORIES.map((cat) => {
              const slug = cat.toLowerCase().replace(/\s+/g, "-");
              const isActive = slug === catSlug;
              return (
                <Link
                  key={cat}
                  href={`/blog/category/${slug}`}
                  className={`font-ui text-sm font-semibold px-3 py-1.5 rounded-full border shrink-0 transition-colors ${
                    isActive
                      ? "text-gold bg-gold/10 border-gold/30"
                      : "text-text-secondary hover:text-gold border-border/50 hover:border-gold/30"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <GreekKeyDivider />

      {/* Category intro - AEO-optimised, direct-answer copy */}
      {meta && (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose prose-invert prose-gold max-w-none">
              {meta.intro.map((paragraph, i) => (
                <p key={i} className="font-body text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {meta.keyTakeaways && meta.keyTakeaways.length > 0 && (
              <div className="mt-10">
                <KeyTakeaways items={meta.keyTakeaways} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Post Grid */}
      {posts.length > 0 ? (
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
              Articles in {meta?.name || categoryName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-void-dark border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-gold/20"
                >
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
      ) : (
        <section className="py-16 md:py-20 text-center">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="font-display text-2xl text-text-primary/50 mb-4">
              No articles yet in this category
            </p>
            <p className="font-body text-text-tertiary max-w-md mx-auto mb-8">
              Articles in this category are coming soon. Subscribe to the
              newsletter to be notified when they publish.
            </p>
            <Link
              href="/blog"
              className="font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              Back to all articles
            </Link>
          </div>
        </section>
      )}

      {/* FAQ section - AEO-critical */}
      {meta && meta.faq.length > 0 && (
        <>
          <GreekKeyDivider />
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <FAQSection items={meta.faq} />
            </div>
          </section>
        </>
      )}

      {/* Cross-category navigation footer */}
      {meta && meta.relatedCategories && meta.relatedCategories.length > 0 && (
        <>
          <GreekKeyDivider />
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-[1200px] px-6">
              <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
                Browse related categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {meta.relatedCategories.map((relatedName) => {
                  const related = CATEGORY_META[relatedName];
                  if (!related) return null;
                  return (
                    <Link
                      key={related.slug}
                      href={`/blog/category/${related.slug}`}
                      className="group bg-void-dark border border-border rounded-lg p-6 transition-all duration-300 hover:border-gold/30"
                    >
                      <h3 className="font-display text-xl text-text-primary tracking-wide mb-3 group-hover:text-gold transition-colors">
                        {related.name}
                      </h3>
                      <p className="font-body text-sm text-text-secondary line-clamp-3">
                        {related.tagline}
                      </p>
                      <p className="font-ui text-xs uppercase tracking-wider text-gold/70 mt-4">
                        Explore -&gt;
                      </p>
                    </Link>
                  );
                })}
                <Link
                  href="/blog"
                  className="group bg-void-dark border border-border rounded-lg p-6 transition-all duration-300 hover:border-gold/30"
                >
                  <h3 className="font-display text-xl text-text-primary tracking-wide mb-3 group-hover:text-gold transition-colors">
                    All Articles
                  </h3>
                  <p className="font-body text-sm text-text-secondary line-clamp-3">
                    The full blog index across every category.
                  </p>
                  <p className="font-ui text-xs uppercase tracking-wider text-gold/70 mt-4">
                    Browse -&gt;
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
