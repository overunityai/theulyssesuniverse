import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { BOOKS_DATA } from "@/lib/books";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Trilogy",
  description:
    "The Ulysses Universe trilogy - a space opera reimagining of Homer's Odyssey. Three books, 129,120 words, one epic journey home across the cosmos.",
};

const accentColors: Record<string, { border: string; text: string; glow: string }> = {
  gold: {
    border: "border-gold/40",
    text: "text-gold",
    glow: "hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]",
  },
  purple: {
    border: "border-purple/40",
    text: "text-purple",
    glow: "hover:shadow-[0_0_40px_rgba(74,0,128,0.15)]",
  },
  red: {
    border: "border-red/40",
    text: "text-red",
    glow: "hover:shadow-[0_0_40px_rgba(255,51,51,0.15)]",
  },
};

export default function BooksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Books", url: `${SITE_URL}/books` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            The Ulysses Universe
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-wide mb-6">
            The Trilogy
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-4">
            Three books. 129,120 words across 90 chapters. A space opera
            reimagining of Homer's Odyssey that spans gods, galaxies, and the
            long road home.
          </p>
          <p className="font-ui text-sm text-text-tertiary uppercase tracking-wider">
            The trilogy should be read in order
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Book Sections */}
      {BOOKS_DATA.map((book, index) => {
        const accent = accentColors[book.accentColor] || accentColors.gold;
        const isEven = index % 2 === 1;

        return (
          <section
            key={book.slug}
            id={book.slug}
            className={`relative py-20 md:py-28 ${isEven ? "bg-void-dark/30" : ""}`}
          >
            <div className="mx-auto max-w-[1200px] px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? "lg:direction-rtl" : ""}`}>
                {/* Cover placeholder */}
                <div className={`${isEven ? "lg:order-2" : ""}`}>
                  <div
                    className={`aspect-[2/3] max-w-sm mx-auto bg-void-mid border ${accent.border} rounded-lg flex items-center justify-center transition-all duration-500 ${accent.glow}`}
                  >
                    <div className="text-center px-8">
                      <p className="font-ui text-xs uppercase tracking-[0.2em] text-text-tertiary mb-3">
                        Book {book.number}
                      </p>
                      <h3 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
                        {book.title}
                      </h3>
                      <p className={`font-ui text-sm uppercase tracking-wider ${accent.text}`}>
                        The Ulysses Universe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? "lg:order-1" : ""}`}>
                  <p className={`font-ui text-sm uppercase tracking-[0.15em] ${accent.text} mb-2`}>
                    Book {book.number}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
                    {book.title}
                  </h2>
                  <p className="font-body text-lg text-text-secondary italic mb-6">
                    {book.hook}
                  </p>

                  {/* Description paragraphs */}
                  {book.description.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="font-body text-text-secondary leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 mt-6 mb-6">
                    <span className="font-ui text-xs uppercase tracking-wider text-text-tertiary bg-void-dark px-3 py-1.5 rounded border border-border">
                      {book.wordCount.toLocaleString()} words
                    </span>
                    <span className="font-ui text-xs uppercase tracking-wider text-text-tertiary bg-void-dark px-3 py-1.5 rounded border border-border">
                      {book.chapters} chapters
                    </span>
                    <span className="font-ui text-xs uppercase tracking-wider text-text-tertiary bg-void-dark px-3 py-1.5 rounded border border-border">
                      Space Opera
                    </span>
                    <span className="font-ui text-xs uppercase tracking-wider text-text-tertiary bg-void-dark px-3 py-1.5 rounded border border-border">
                      Mythology Retelling
                    </span>
                  </div>

                  {/* Pull quote */}
                  <blockquote className="border-l-2 border-gold/40 pl-4 my-6">
                    <p className="font-body text-text-primary italic">
                      &ldquo;{book.pullQuote}&rdquo;
                    </p>
                  </blockquote>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button href={book.buyLinks.amazonUK} external>
                      Amazon UK
                    </Button>
                    <Button href={book.buyLinks.amazonUS} external variant="secondary">
                      Amazon US
                    </Button>
                    <Button href={`/books/${book.slug}`} variant="tertiary">
                      Full details &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <GreekKeyDivider />

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
            Ready to board the Odyssey?
          </h2>
          <p className="font-body text-text-secondary max-w-lg mx-auto mb-8">
            Start with Chapter 1 of The Blinding - free. No strings. Just
            ancient gods, hostile space, and a crew that won't quit.
          </p>
          <Button href="/free-chapter" size="lg">
            Read Chapter 1 Free
          </Button>
        </div>
      </section>
    </>
  );
}
