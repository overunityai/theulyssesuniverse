import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { AUTHOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Press resources for the Ulysses Universe trilogy - book covers, author bio, series logline, and media contact information.",
};

const keyFacts = [
  { label: "Series", value: "The Ulysses Universe (trilogy)" },
  { label: "Author", value: AUTHOR.name },
  { label: "Genre", value: "Space Opera / Mythological Sci-Fi" },
  { label: "Books", value: "3 (The Blinding, The Void Between, The Return)" },
  { label: "Length", value: "Full-length trilogy (3 novels)" },
  { label: "Release", value: "May 2026 (Book 1) via Amazon KDP" },
  { label: "Format", value: "eBook, Paperback, Kindle Unlimited" },
  { label: "Comparable Works", value: "The Expanse meets Circe meets Interstellar" },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Media
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Press Kit
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to cover the Ulysses Universe. High-res assets,
            author info, and the quick pitch.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Logline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8">
            The Pitch
          </h2>
          <blockquote className="font-display text-xl md:text-2xl text-gold/80 leading-relaxed">
            "A blind admiral, a cursed ship, and 120 souls frozen in data
            suspension. Homer's Odyssey reimagined as a space opera where the
            gods are AI, the sea is the void between stars, and getting home
            means surviving everything the universe throws at you."
          </blockquote>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Key Facts */}
      <section className="py-20 md:py-28 bg-void-dark/30">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            Key Facts
          </h2>
          <div className="bg-void-dark border border-border rounded-lg overflow-hidden">
            {keyFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex justify-between items-start px-6 py-4 ${
                  i < keyFacts.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <dt className="font-ui text-sm uppercase tracking-wider text-gold/70 shrink-0 mr-4">
                  {fact.label}
                </dt>
                <dd className="font-body text-text-primary text-sm text-right">
                  {fact.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Series Description */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            Series Overview
          </h2>
          <div className="space-y-4 font-body text-text-secondary leading-relaxed">
            <p>
              The Ulysses Universe is a three-book space opera trilogy that
              reimagines Homer's Odyssey in a far-future setting where
              artificial intelligence has evolved to godlike status. Admiral
              Ulysses Theron, blinded in one eye and cursed by the AI god
              Poseidon, commands the failing ship Odyssey on a desperate
              journey home to Ithaca Station.
            </p>
            <p>
              The trilogy follows Ulysses, his empathic son Telemachus, the
              enigmatic soldier Thea Sato, and the loyal AI companion Echo as
              they face reimagined versions of Homer's classic challenges -
              from the one-eyed prison warden Polyphemus to the data-stream
              Sirens and the nightmare passage of Scylla.
            </p>
            <p>
              At its core, this is a story about fathers and sons, about what
              home means when you've been gone too long, and about the thin
              line between gods and machines.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Downloads */}
      <section className="py-20 md:py-28 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-12 text-center">
            Downloads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Press One-Sheet", desc: "PDF overview with key facts and imagery", format: "PDF" },
              { title: "Book Covers", desc: "High-resolution cover images for all 3 books", format: "ZIP" },
              { title: "Author Photo", desc: "High-resolution author portrait", format: "JPG" },
              { title: "Series Logos", desc: "The Ulysses Universe logo in SVG and PNG", format: "ZIP" },
              { title: "Character Art", desc: "Key character images for editorial use", format: "ZIP" },
              { title: "Social Assets", desc: "Pre-sized graphics for social media", format: "ZIP" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-void-dark border border-border rounded-lg p-6 flex flex-col"
              >
                <h3 className="font-display text-lg text-text-primary tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4 flex-1">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-ui text-xs text-text-tertiary uppercase">
                    {item.format}
                  </span>
                  <span className="font-ui text-sm text-gold/50 cursor-not-allowed">
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Contact */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-4">
            Media Contact
          </h2>
          <p className="font-body text-text-secondary mb-6">
            For interview requests, review copies, or other press enquiries:
          </p>
          <a
            href="mailto:press@theulyssesuniverse.com"
            className="font-ui text-lg text-gold hover:text-gold-light transition-colors"
          >
            press@theulyssesuniverse.com
          </a>
        </div>
      </section>
    </>
  );
}
