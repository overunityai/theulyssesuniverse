import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about mythology, space opera, world building, and the story behind the Ulysses Universe trilogy.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Dispatches
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Blog
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Mythology, world building, the books, and the odd behind-the-scenes
            look at how you turn a 3,000-year-old poem into a space opera.
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
              All
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-ui text-sm font-semibold text-text-secondary hover:text-gold px-3 py-1.5 rounded-full border border-border/50 hover:border-gold/30 transition-colors shrink-0"
              >
                {cat}
              </Link>
            ))}
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
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void-dark/40 hidden lg:block" />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-ui text-xs uppercase tracking-wider text-gold/70">
                      {featured.category}
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

      {/* Post Grid */}
      {rest.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-[1200px] px-6">
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
    </>
  );
}
