import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { BookCoverTile } from "@/components/ui/BookCoverTile";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { BOOKS_DATA, getBookBySlug } from "@/lib/books";
import { JsonLd } from "@/components/seo/JsonLd";
import { bookSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL, AMAZON_LINKS } from "@/lib/constants";

interface BookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BOOKS_DATA.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  const url = `${SITE_URL}/books/${slug}`;

  return {
    title: `${book.title} - Book ${book.number}`,
    description: book.hook,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${book.title} - The Ulysses Universe`,
      description: book.hook,
      type: "book",
      url,
      images: [
        {
          url: `${SITE_URL}/images/og/hero.webp`,
          width: 1200,
          height: 630,
          alt: `${book.title} - Book ${book.number} of the Ulysses Universe`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} - The Ulysses Universe`,
      description: book.hook,
      images: [`${SITE_URL}/images/og/hero.webp`],
    },
  };
}

const accentStyles: Record<string, { text: string; bg: string }> = {
  gold: {
    text: "text-gold",
    bg: "bg-gold/10",
  },
  purple: {
    text: "text-purple",
    bg: "bg-purple/10",
  },
  red: {
    text: "text-red",
    bg: "bg-red/10",
  },
};

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const accent = accentStyles[book.accentColor] || accentStyles.gold;
  const bookIndex = BOOKS_DATA.findIndex((b) => b.slug === slug);
  const prevBook = bookIndex > 0 ? BOOKS_DATA[bookIndex - 1] : null;
  const nextBook = bookIndex < BOOKS_DATA.length - 1 ? BOOKS_DATA[bookIndex + 1] : null;

  return (
    <>
      <JsonLd data={bookSchema(book)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Books", url: `${SITE_URL}/books` },
          { name: book.title, url: `${SITE_URL}/books/${book.slug}` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Cover */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <BookCoverTile book={book} />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 font-ui text-sm text-text-tertiary">
                  <li>
                    <a href="/books" className="hover:text-text-primary transition-colors">
                      Books
                    </a>
                  </li>
                  <li>/</li>
                  <li className="text-text-secondary">{book.title}</li>
                </ol>
              </nav>

              <p className={`font-ui text-sm uppercase tracking-[0.15em] ${accent.text} mb-2`}>
                Book {book.number} of the Ulysses Universe
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-4">
                {book.title}
              </h1>
              <p className="font-body text-xl text-text-secondary italic mb-8 leading-relaxed">
                {book.hook}
              </p>

              {/* Buy buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Button href={book.buyLinks.amazonUS} external size="lg">
                  Buy on Amazon US
                </Button>
                <Button href={book.buyLinks.amazonUK} external variant="secondary" size="lg">
                  Buy on Amazon UK
                </Button>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-10">
                {book.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="font-body text-text-secondary leading-relaxed text-base"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote className={`border-l-4 border-${book.accentColor}/40 pl-6 py-2 my-10`}>
                <p className="font-display text-xl md:text-2xl text-text-primary italic tracking-wide">
                  &ldquo;{book.pullQuote}&rdquo;
                </p>
              </blockquote>

              {/* Book details */}
              <div className="bg-void-dark border border-border rounded-lg p-6 mb-10">
                <h3 className="font-ui font-semibold text-sm uppercase tracking-[0.1em] text-gold mb-4">
                  Book Details
                </h3>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="font-ui text-xs uppercase tracking-wider text-text-tertiary">
                      Genre
                    </dt>
                    <dd className="font-body text-text-primary mt-1">
                      Space Opera
                    </dd>
                  </div>
                  <div>
                    <dt className="font-ui text-xs uppercase tracking-wider text-text-tertiary">
                      Series
                    </dt>
                    <dd className="font-body text-text-primary mt-1">
                      The Ulysses Universe
                    </dd>
                  </div>
                  <div>
                    <dt className="font-ui text-xs uppercase tracking-wider text-text-tertiary">
                      Format
                    </dt>
                    <dd className="font-body text-text-primary mt-1">
                      eBook &amp; Paperback
                    </dd>
                  </div>
                  <div>
                    <dt className="font-ui text-xs uppercase tracking-wider text-text-tertiary">
                      Setting
                    </dt>
                    <dd className="font-body text-text-primary mt-1">
                      Far-future space
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Get the collection */}
              <div className="bg-void-dark/50 border border-gold/20 rounded-lg p-6 mb-10">
                <p className="font-ui text-xs uppercase tracking-wider text-gold/70 mb-2">
                  The complete collection
                </p>
                <p className="font-body text-text-secondary text-sm mb-4">
                  Get all three novels plus exclusive bonus content - a novella,
                  character profiles, and author's notes.
                </p>
                <Button href={AMAZON_LINKS.collectionUS} external variant="secondary">
                  Get the Collection &rarr;
                </Button>
              </div>

              {/* Genre tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Space Opera", "Mythology Retelling", "Science Fiction", "Greek Mythology", "Homer's Odyssey"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-ui text-xs uppercase tracking-wider text-text-tertiary bg-void-dark px-3 py-1.5 rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* Navigation between books */}
              <div className="flex justify-between items-center pt-8 border-t border-border/50">
                {prevBook ? (
                  <Button href={`/books/${prevBook.slug}`} variant="tertiary">
                    &larr; Book {prevBook.number}: {prevBook.title}
                  </Button>
                ) : (
                  <div />
                )}
                {nextBook ? (
                  <Button href={`/books/${nextBook.slug}`} variant="tertiary">
                    Book {nextBook.number}: {nextBook.title} &rarr;
                  </Button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4">
            Start the journey
          </h2>
          <p className="font-body text-text-secondary max-w-md mx-auto mb-8">
            Read the first chapter of The Blinding free. No signup required -
            just ancient gods and hostile space.
          </p>
          <Button href="/free-chapter" size="lg">
            Read Chapter 1 Free
          </Button>
        </div>
      </section>
    </>
  );
}
