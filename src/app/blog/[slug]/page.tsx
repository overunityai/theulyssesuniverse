import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { TrustBar } from "@/components/blog/TrustBar";
import { InlineTOC } from "@/components/blog/InlineTOC";
import { KeyTakeaways } from "@/components/blog/KeyTakeaways";
import { FAQSection } from "@/components/blog/FAQSection";
import { AuthorBio } from "@/components/blog/AuthorBio";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const ogImage = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;
  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastUpdated || post.date,
      authors: [post.author],
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

// Extract headings from markdown content for TOC
function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}

// Custom MDX components with heading anchors
function createMDXComponents() {
  const makeHeading = (level: 2 | 3) => {
    const HeadingComponent = ({ children }: { children?: React.ReactNode }) => {
      const text = typeof children === "string" ? children : String(children || "");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      const Tag = level === 2 ? "h2" : "h3";
      return (
        <Tag id={id} className="scroll-mt-24">
          <a href={`#${id}`} className="hover:text-gold transition-colors">
            {children}
          </a>
        </Tag>
      );
    };
    HeadingComponent.displayName = `Heading${level}`;
    return HeadingComponent;
  };

  return {
    h2: makeHeading(2),
    h3: makeHeading(3),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(slug, 3);
  const hasFaq = !!(post.faq && post.faq.length > 0);
  const hasKeyTakeaways = !!(post.keyTakeaways && post.keyTakeaways.length > 0);

  const { content: renderedContent } = await compileMDX({
    source: post.content,
    components: createMDXComponents(),
  });

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.category, url: `${SITE_URL}/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}` },
          { name: post.title, url: `${SITE_URL}/blog/${slug}` },
        ])}
      />

      <article className="relative pt-28 pb-16 md:pt-36">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.category, href: `/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}` },
              { label: post.title },
            ]}
          />

          {/* Header */}
          <header className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-ui text-xs uppercase tracking-wider text-gold/70">
                {post.category}
              </span>
              <span className="text-border">-</span>
              <span className="font-ui text-xs text-text-tertiary">
                {post.readingTime} min read
              </span>
              {post.lastUpdated && (
                <>
                  <span className="text-border">-</span>
                  <span className="font-ui text-xs text-text-tertiary">
                    Updated {formatDate(post.lastUpdated)}
                  </span>
                </>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-wide mb-6">
              {post.title}
            </h1>
            <p className="font-body text-lg text-text-secondary mb-6">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-void-mid border border-border flex items-center justify-center">
                  <span className="font-ui text-xs text-gold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-ui text-sm text-text-primary">
                    {post.author}
                  </p>
                  <p className="font-ui text-xs text-text-tertiary">
                    {formatDate(post.date)}
                  </p>
                </div>
              </div>
              <ShareButtons title={post.title} slug={slug} />
            </div>
          </header>

          {/* Hero image */}
          <div className="relative aspect-[21/9] bg-void-mid rounded-lg overflow-hidden mb-12 max-w-3xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Trust bar */}
          <div className="max-w-3xl">
            <TrustBar />
          </div>

          {/* Inline TOC */}
          <div className="max-w-3xl">
            <InlineTOC
              headings={headings}
              hasFaq={hasFaq}
              hasKeyTakeaways={hasKeyTakeaways}
            />
          </div>

          {/* Content + TOC sidebar grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
            {/* Article body */}
            <div className="prose prose-invert prose-gold max-w-none">
              {renderedContent}

              {/* Key takeaways - after main content, before FAQ */}
              {hasKeyTakeaways && (
                <KeyTakeaways items={post.keyTakeaways!} />
              )}

              {/* FAQ section */}
              {hasFaq && (
                <FAQSection items={post.faq!} />
              )}
            </div>

            {/* TOC sidebar (desktop) */}
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p className="font-ui text-xs uppercase tracking-[0.15em] text-gold/60 mb-4">
                    Contents
                  </p>
                  <ul className="space-y-2 border-l border-border/30">
                    {headings
                      .filter((h) => h.level === 2)
                      .map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className="block font-body text-sm pl-4 -ml-px border-l border-transparent text-text-tertiary hover:text-text-secondary hover:border-text-tertiary transition-colors"
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    {hasKeyTakeaways && (
                      <li>
                        <a
                          href="#key-takeaways"
                          className="block font-body text-sm pl-4 -ml-px border-l border-transparent text-text-tertiary hover:text-text-secondary hover:border-text-tertiary transition-colors"
                        >
                          Key takeaways
                        </a>
                      </li>
                    )}
                    {hasFaq && (
                      <li>
                        <a
                          href="#faq"
                          className="block font-body text-sm pl-4 -ml-px border-l border-transparent text-text-tertiary hover:text-text-secondary hover:border-text-tertiary transition-colors"
                        >
                          FAQ
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </aside>
            )}
          </div>

          {/* Author bio */}
          <div className="max-w-3xl">
            <AuthorBio />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border/30 max-w-3xl">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-ui text-xs text-text-tertiary bg-void-dark px-3 py-1.5 rounded-full border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share bottom */}
          <div className="mt-8 max-w-3xl">
            <ShareButtons title={post.title} slug={slug} />
          </div>
        </div>
      </article>

      <GreekKeyDivider />

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="font-display text-2xl text-text-primary tracking-wide mb-8">
              Keep reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-void-dark border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-gold/20"
                >
                  <div className="relative aspect-[16/9] bg-void-mid overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-ui text-xs uppercase tracking-wider text-gold/70">
                      {rp.category}
                    </span>
                    <h3 className="font-display text-lg text-text-primary tracking-wide mt-2 mb-2 group-hover:text-gold transition-colors">
                      {rp.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary line-clamp-3">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <GreekKeyDivider />

      {/* Email CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-4">
            Don't miss the next dispatch
          </h2>
          <p className="font-body text-text-secondary mb-8">
            New articles on mythology, space opera, and the making of the Ulysses
            Universe. No spam. Unsubscribe whenever.
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
