import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({
    category: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
}

function categoryFromSlug(slug: string): string | undefined {
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
  const name = categoryFromSlug(catSlug);
  if (!name) return { title: "Category Not Found" };

  return {
    title: `${name} Articles`,
    description: `Blog articles about ${name.toLowerCase()} from the Ulysses Universe.`,
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: catSlug } = await params;
  const categoryName = categoryFromSlug(catSlug);
  const posts = categoryName
    ? getAllPosts().filter((p) => p.category === categoryName)
    : [];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            {categoryName || "Category"}
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            {posts.length} {posts.length === 1 ? "article" : "articles"} in this
            category.
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

      {/* Post Grid */}
      {posts.length > 0 ? (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-6">
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
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
        <section className="py-20 md:py-28 text-center">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="font-display text-2xl text-text-primary/50 mb-4">
              No articles yet
            </p>
            <p className="font-body text-text-tertiary max-w-md mx-auto mb-8">
              Articles in this category are coming soon.
            </p>
            <Link
              href="/blog"
              className="font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              &larr; Back to all articles
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
