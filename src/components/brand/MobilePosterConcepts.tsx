"use client";

import Image from "next/image";
import { BOOKS_DATA } from "@/lib/books";
import { SITE_TAGLINE } from "@/lib/constants";

const accentMap: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  gold: {
    text: "text-gold",
    border: "border-gold",
    bg: "bg-gold",
    glow: "rgba(212, 175, 55, 0.4)",
  },
  purple: {
    text: "text-purple",
    border: "border-purple",
    bg: "bg-purple",
    glow: "rgba(74, 0, 128, 0.4)",
  },
  red: {
    text: "text-red",
    border: "border-red",
    bg: "bg-red",
    glow: "rgba(255, 51, 51, 0.4)",
  },
};

/* -------------------------------------------------
   Concept 1: Cinematic Single-Book Poster
   Character portrait fills frame, title & tagline
   at bottom. Movie-poster style.
   ------------------------------------------------- */
function PosterCinematic() {
  const book = BOOKS_DATA[0]; // The Blinding
  const accent = accentMap[book.accentColor] || accentMap.gold;

  return (
    <div className="relative aspect-[9/16] bg-void-black rounded-lg overflow-hidden border border-border">
      {/* Character portrait - dominant */}
      <Image
        src={book.characterImage}
        alt=""
        fill
        sizes="375px"
        className="object-cover object-top opacity-30"
        aria-hidden="true"
      />

      {/* Gradient: dark bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-void-black/50 via-transparent to-transparent z-10" />

      {/* Top badge */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-8">
        <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-gold/60">
          A Ulysses Universe Novel
        </p>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-center">
        {/* Greek key line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />

        <p className={`font-ui text-xs uppercase tracking-[0.2em] ${accent.text} mb-2`}>
          Book {book.number}
        </p>
        <h3 className="font-display text-4xl text-text-primary tracking-wider mb-3">
          {book.title}
        </h3>
        <p className="font-body text-sm text-text-secondary/80 italic max-w-[260px] mx-auto mb-6 leading-relaxed">
          {book.hook}
        </p>

        {/* Author */}
        <p className="font-ui text-xs uppercase tracking-[0.15em] text-text-tertiary">
          Sotiris Spyrou
        </p>
      </div>

      {/* Subtle accent glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl z-[5]"
        style={{ background: accent.glow }}
      />
    </div>
  );
}

/* -------------------------------------------------
   Concept 2: Trilogy Stack
   All 3 books stacked vertically, showing the
   full series. Social media / story format.
   ------------------------------------------------- */
function PosterTrilogyStack() {
  return (
    <div className="relative aspect-[9/16] bg-void-black rounded-lg overflow-hidden border border-border flex flex-col">
      {/* Top section - series branding */}
      <div className="flex-shrink-0 pt-8 pb-4 text-center z-20 relative">
        <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-gold/50 mb-2">
          The Complete Trilogy
        </p>
        <h3 className="font-display text-2xl text-text-primary tracking-wider">
          The Ulysses Universe
        </h3>
        <p className="font-body text-xs text-text-secondary/70 italic mt-2 px-8">
          {SITE_TAGLINE}
        </p>
      </div>

      {/* Three book panels */}
      <div className="flex-1 flex flex-col gap-1 px-4 pb-4 z-20 relative">
        {BOOKS_DATA.map((book) => {
          const accent = accentMap[book.accentColor] || accentMap.gold;
          return (
            <div
              key={book.slug}
              className={`relative flex-1 rounded overflow-hidden border ${accent.border}/20`}
            >
              {/* Character watermark */}
              <Image
                src={book.characterImage}
                alt=""
                fill
                sizes="340px"
                className="object-cover object-top opacity-20"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-void-dark/80 via-void-dark/40 to-void-dark/80 z-10" />

              {/* Book info */}
              <div className="relative z-20 flex items-center h-full px-4">
                <div>
                  <p className={`font-ui text-[10px] uppercase tracking-[0.2em] ${accent.text}/70`}>
                    Book {book.number}
                  </p>
                  <h4 className="font-display text-lg text-text-primary tracking-wide">
                    {book.title}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="flex-shrink-0 pb-6 text-center z-20 relative">
        <p className="font-ui text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
          Available now on Amazon
        </p>
      </div>

      {/* Background star dots */}
      <div className="absolute inset-0 z-0 opacity-30 star-field" />
    </div>
  );
}

/* -------------------------------------------------
   Concept 3: Minimalist Typographic
   Pure typography + gold accents. No images.
   Clean, bold, high-end. Think A24 movie poster.
   ------------------------------------------------- */
function PosterTypographic() {
  return (
    <div className="relative aspect-[9/16] bg-void-black rounded-lg overflow-hidden border border-border flex flex-col items-center justify-center text-center px-8">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Vertical gold accent line */}
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent mb-8" />

      {/* Series label */}
      <p className="font-ui text-[10px] uppercase tracking-[0.4em] text-gold/50 mb-6">
        The Ulysses Universe
      </p>

      {/* Title stack */}
      <div className="space-y-1 mb-8">
        <h3 className="font-display text-3xl text-text-primary tracking-wider">
          The Blinding
        </h3>
        <div className="w-8 h-px bg-gold/30 mx-auto my-3" />
        <h3 className="font-display text-3xl text-text-primary/60 tracking-wider">
          The Void Between
        </h3>
        <div className="w-8 h-px bg-gold/20 mx-auto my-3" />
        <h3 className="font-display text-3xl text-text-primary/40 tracking-wider">
          The Return
        </h3>
      </div>

      {/* Tagline */}
      <p className="font-body text-sm text-text-secondary/70 italic max-w-[240px] leading-relaxed mb-8">
        {SITE_TAGLINE}
      </p>

      {/* Author */}
      <p className="font-ui text-xs uppercase tracking-[0.2em] text-gold/40 mb-4">
        Sotiris Spyrou
      </p>

      {/* Vertical line bottom */}
      <div className="w-px h-16 bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-gold/20" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-gold/20" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-gold/20" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-gold/20" />
    </div>
  );
}

/* -------------------------------------------------
   Concept 4: Quote / Tagline Poster
   Bold pull-quote + character fade. Atmospheric.
   Great for social media engagement.
   ------------------------------------------------- */
function PosterQuote() {
  const book = BOOKS_DATA[2]; // The Return
  const accent = accentMap[book.accentColor] || accentMap.gold;

  return (
    <div className="relative aspect-[9/16] bg-void-black rounded-lg overflow-hidden border border-border">
      {/* Character portrait - very faded */}
      <Image
        src={book.characterImage}
        alt=""
        fill
        sizes="375px"
        className="object-cover object-center opacity-15"
        aria-hidden="true"
      />

      {/* Heavy overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/80 to-void-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-void-black/60 via-transparent to-transparent z-10" />

      {/* Content - centred */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-10">
        {/* Opening quote mark */}
        <span className="font-display text-6xl text-gold/20 leading-none mb-2">&ldquo;</span>

        {/* Quote */}
        <blockquote className="mb-6">
          <p className="font-display text-2xl text-text-primary tracking-wide leading-relaxed italic">
            {book.pullQuote}
          </p>
        </blockquote>

        {/* Closing quote mark */}
        <span className="font-display text-6xl text-gold/20 leading-none rotate-180 mb-8">&ldquo;</span>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-6" />

        {/* Book info */}
        <p className={`font-ui text-xs uppercase tracking-[0.2em] ${accent.text}/70 mb-1`}>
          Book {book.number}
        </p>
        <p className="font-display text-lg text-text-primary tracking-wider mb-1">
          {book.title}
        </p>
        <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
          The Ulysses Universe
        </p>
      </div>

      {/* Subtle red glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl z-[5]"
        style={{ background: accent.glow, opacity: 0.3 }}
      />
    </div>
  );
}

/* -------------------------------------------------
   Exported gallery component
   ------------------------------------------------- */
export function MobilePosterConcepts() {
  return (
    <div>
      <p className="font-body text-sm text-text-tertiary mb-8">
        9:16 aspect ratio. Designed for Instagram Stories, phone wallpapers, and
        social media. Screenshot at mobile resolution for best results.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Concept 1: Cinematic */}
        <div>
          <h3 className="font-ui text-xs uppercase tracking-wider text-gold/60 mb-3">
            Concept 1: Cinematic
          </h3>
          <PosterCinematic />
        </div>

        {/* Concept 2: Trilogy Stack */}
        <div>
          <h3 className="font-ui text-xs uppercase tracking-wider text-gold/60 mb-3">
            Concept 2: Trilogy Stack
          </h3>
          <PosterTrilogyStack />
        </div>

        {/* Concept 3: Typographic */}
        <div>
          <h3 className="font-ui text-xs uppercase tracking-wider text-gold/60 mb-3">
            Concept 3: Typographic
          </h3>
          <PosterTypographic />
        </div>

        {/* Concept 4: Quote */}
        <div>
          <h3 className="font-ui text-xs uppercase tracking-wider text-gold/60 mb-3">
            Concept 4: Quote
          </h3>
          <PosterQuote />
        </div>
      </div>
    </div>
  );
}
