import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { GLOSSARY_DATA, GLOSSARY_LETTERS } from "@/lib/glossary";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Glossary - Terms and Technology",
  description:
    "The Merge, The Void, Data Suspension, The Pantheon - every key term from the Ulysses Universe trilogy explained.",
};

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Universe", url: `${SITE_URL}/universe` },
          { name: "Glossary", url: `${SITE_URL}/universe/glossary` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            The Universe
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Glossary
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Every term, technology, and location from the Ulysses Universe.
            Because when gods are AIs and sleep is data, you might need a
            reference guide.
          </p>
        </div>
      </section>

      {/* Letter nav */}
      <div className="sticky top-16 z-30 bg-void-black/90 backdrop-blur-md border-b border-border/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="flex gap-2 py-3 overflow-x-auto scrollbar-hide" aria-label="Glossary letters">
            {GLOSSARY_LETTERS.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="font-ui text-sm font-semibold text-text-secondary hover:text-gold transition-colors px-2 py-1 shrink-0"
              >
                {letter}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <GreekKeyDivider />

      {/* Terms */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {GLOSSARY_LETTERS.map((letter) => {
            const terms = GLOSSARY_DATA.filter(
              (t) => t.term[0].toUpperCase() === letter
            ).sort((a, b) => a.term.localeCompare(b.term));

            if (terms.length === 0) return null;

            return (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-32 mb-12">
                <h2 className="font-display text-3xl text-gold/60 mb-6 border-b border-border/30 pb-2">
                  {letter}
                </h2>
                <div className="space-y-8">
                  {terms.map((term) => (
                    <div key={term.term}>
                      <h3 className="font-display text-xl text-text-primary tracking-wide mb-2">
                        {term.term}
                      </h3>
                      <p className="font-body text-text-secondary leading-relaxed text-sm">
                        {term.definition}
                      </p>
                      {term.relatedTerms && term.relatedTerms.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {term.relatedTerms.map((related) => (
                            <span
                              key={related}
                              className="font-ui text-xs text-text-tertiary bg-void-dark px-2 py-1 rounded border border-border/50"
                            >
                              {related}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
