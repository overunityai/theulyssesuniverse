import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BookCard } from "@/components/ui/BookCard";
import { CharacterCard } from "@/components/ui/CharacterCard";
import { EmailCapture } from "@/components/ui/EmailCapture";
import { NolanHook } from "@/components/ui/NolanHook";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { BOOKS_DATA } from "@/lib/books";
import { HOMEPAGE_CHARACTERS } from "@/lib/characters";
import { AMAZON_LINKS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/og/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/60 via-void-black/75 to-void-black z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-6">
            A space opera trilogy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary tracking-[0.02em] leading-[1.1] mb-6">
            Homer&apos;s Odyssey.{" "}
            <span className="gold-gradient-text">Reimagined Among the Stars.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
            What if the Greek gods were AI? What if the wine-dark sea was the
            void between stars? What if the greatest journey home became the
            most dangerous voyage in the galaxy?
          </p>
          <p className="font-mono text-xs text-text-tertiary mb-10 tracking-widest uppercase">
            Three books. One battered ship. The longest way home in the galaxy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/books" size="lg">
              Get the Books
            </Button>
            <Button href="https://www.amazon.co.uk/dp/B0GNFQM4FN" variant="secondary" size="lg" external>
              Buy Book One Today
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

      {/* ============ SECTION 3: THE PITCH ============ */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-gold/60 mb-8">
            The premise
          </p>
          <blockquote className="font-body text-xl md:text-2xl text-text-primary leading-relaxed mb-8">
            Admiral Ulysses Theron stole his son from a god and ran. Ten years
            later, the <span className="text-gold">Odyssey</span> limps through
            hostile space - hull failing, supplies gone, 108 souls frozen in
            data suspension. The gods of the Pantheon want him dead.{" "}
            <span className="text-gold">Poseidon</span>, whose son he blinded,
            wants him to suffer first.
          </blockquote>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-text-tertiary uppercase tracking-wider">
            <span>Greek mythology</span>
            <span className="text-gold/40">/</span>
            <span>Artificial intelligence</span>
            <span className="text-gold/40">/</span>
            <span>Space opera</span>
            <span className="text-gold/40">/</span>
            <span>Family</span>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ============ SECTION 4: THE TRILOGY ============ */}
      <section className="relative py-24 md:py-32 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
              The Ulysses Universe
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
              The Trilogy
            </h2>
            <p className="font-body text-text-secondary max-w-xl mx-auto">
              Three books. One epic journey home across hostile space, fractured
              loyalties, and the wrath of digital gods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOKS_DATA.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>

          <div className="text-center mt-12 flex flex-wrap gap-4 justify-center">
            <Button href={AMAZON_LINKS.collectionUS} external>
              Get the Complete Trilogy
            </Button>
            <Button href="/books" variant="secondary">
              Explore All Books
            </Button>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ============ SECTION 5: UNIVERSE TEASER ============ */}
      <section className="relative py-24 md:py-32">
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

      {/* ============ SECTION 6: PULL QUOTES ============ */}
      <section className="relative py-24 md:py-32 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
              From the pages
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide">
              Words from the Void
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-void-dark border border-border rounded-lg p-8 text-center">
              <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="w-6 h-6 text-gold/30 mx-auto mb-4">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <blockquote className="font-body text-text-primary text-sm leading-relaxed italic mb-4">
                You'll reach home. You'll wish you hadn't.
              </blockquote>
              <p className="font-ui text-xs text-gold/60 uppercase tracking-wider">
                Calypso - The Blinding
              </p>
            </div>

            <div className="bg-void-dark border border-border rounded-lg p-8 text-center">
              <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="w-6 h-6 text-gold/30 mx-auto mb-4">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <blockquote className="font-body text-text-primary text-sm leading-relaxed italic mb-4">
                In the Void, your memories are the first thing to go. Your name
                is the last.
              </blockquote>
              <p className="font-ui text-xs text-gold/60 uppercase tracking-wider">
                The Void Between
              </p>
            </div>

            <div className="bg-void-dark border border-border rounded-lg p-8 text-center">
              <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="w-6 h-6 text-gold/30 mx-auto mb-4">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <blockquote className="font-body text-text-primary text-sm leading-relaxed italic mb-4">
                Home isn't where you left it. It's what you build from the
                wreckage.
              </blockquote>
              <p className="font-ui text-xs text-gold/60 uppercase tracking-wider">
                The Return
              </p>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* ============ SECTION 7: WHO THIS IS FOR ============ */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
              If you love
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide">
              This is for you
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { title: "The Expanse", desc: "Hard sci-fi with heart" },
              { title: "Circe", desc: "Myth retold, humanised" },
              { title: "Battlestar Galactica", desc: "Humanity on the edge" },
              { title: "Children of Time", desc: "AI and evolution" },
              { title: "Homer's Odyssey", desc: "The original epic" },
              { title: "Blade Runner", desc: "What makes us human" },
              { title: "Mass Effect", desc: "Space opera done right" },
              { title: "Hades (game)", desc: "Greek myth, reimagined" },
            ].map((comp) => (
              <div
                key={comp.title}
                className="bg-void-dark border border-border/50 rounded-lg p-4 text-center hover:border-gold/30 transition-colors"
              >
                <p className="font-display text-sm text-text-primary mb-1">
                  {comp.title}
                </p>
                <p className="font-body text-xs text-text-tertiary">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 8: EMAIL CAPTURE ============ */}
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
