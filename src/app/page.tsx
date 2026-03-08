import { Button } from "@/components/ui/Button";
import { BookCard } from "@/components/ui/BookCard";
import { CharacterCard } from "@/components/ui/CharacterCard";
import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { NolanHook } from "@/components/ui/NolanHook";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { BOOKS_DATA } from "@/lib/books";
import { HOMEPAGE_CHARACTERS } from "@/lib/characters";

export default function HomePage() {
  return (
    <>
      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/40 via-void-black/70 to-void-black z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-6">
            A space opera trilogy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary tracking-[0.02em] leading-[1.1] mb-6">
            Homer&apos;s Odyssey.{" "}
            <span className="gold-gradient-text">Reimagined Among the Stars.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            A space opera trilogy that transforms ancient myth into an epic
            journey across the cosmos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/books" size="lg">
              Get the Books
            </Button>
            <Button href="/free-chapter" variant="secondary" size="lg">
              Read Chapter 1 Free
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-6 h-6 text-text-tertiary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ============ SECTION 2: NOLAN HOOK ============ */}
      <NolanHook />

      {/* ============ SECTION 3: THE TRILOGY ============ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
              The Ulysses Universe
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
              The Trilogy
            </h2>
            <p className="font-body text-text-secondary max-w-xl mx-auto">
              Three books. 129,120 words. One epic journey home across hostile
              space, fractured loyalties, and the wrath of digital gods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOKS_DATA.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/books" variant="secondary">
              Explore the Complete Trilogy
            </Button>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ============ SECTION 4: UNIVERSE TEASER ============ */}
      <section className="relative py-24 md:py-32 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
              Meet the crew
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
              The Universe
            </h2>
            <p className="font-body text-text-secondary max-w-xl mx-auto">
              A blind admiral. An empathic son. A woman with no past. A robot
              with too much heart. Meet the crew of the Odyssey.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HOMEPAGE_CHARACTERS.map((character) => (
              <CharacterCard key={character.slug} character={character} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/universe" variant="secondary">
              Explore the Universe
            </Button>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ============ SECTION 5: REVIEWS ============ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
              Early readers
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide">
              What Readers Say
            </h2>
          </div>

          <ReviewCarousel />
        </div>
      </section>

      {/* ============ SECTION 6: EMAIL CAPTURE ============ */}
      <section className="relative py-24 md:py-32 bg-void-dark/50">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Decorative border */}
          <div className="relative border border-gold/20 rounded-2xl p-8 md:p-16 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />

            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl text-gold tracking-wide mb-4">
                Board the Odyssey
              </h2>
              <p className="font-body text-text-secondary max-w-md mx-auto">
                Get Chapter 1 of The Blinding free and join the crew. Launch
                updates, exclusive content, and behind-the-scenes access.
              </p>
            </div>

            <EmailCapture />
          </div>
        </div>
      </section>
    </>
  );
}
