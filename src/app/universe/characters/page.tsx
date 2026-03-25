import type { Metadata } from "next";
import Image from "next/image";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { Button } from "@/components/ui/Button";
import { CHARACTERS_DATA } from "@/lib/characters";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Characters",
  description:
    "Meet the crew of the Odyssey - Ulysses, Telemachus, Thea Sato, Echo, Athena, and Penelope. Character profiles from the Ulysses Universe trilogy.",
};

const accentMap: Record<string, { border: string; text: string; bg: string }> = {
  gold: { border: "border-gold/30", text: "text-gold", bg: "from-gold/10" },
  blue: { border: "border-blue/30", text: "text-blue", bg: "from-blue/10" },
  purple: { border: "border-purple/30", text: "text-purple", bg: "from-purple/10" },
};

export default function CharactersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Universe", url: `${SITE_URL}/universe` },
          { name: "Characters", url: `${SITE_URL}/universe/characters` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            The Universe
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Characters
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Six people (and one AI) carrying the weight of Homer's greatest
            story across the stars. None of them asked for this. All of them are
            stuck with it.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Character Profiles */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 space-y-20">
          {CHARACTERS_DATA.map((character, index) => {
            const accent = accentMap[character.accentColor] || accentMap.gold;
            const isEven = index % 2 === 1;

            return (
              <div
                key={character.slug}
                id={character.slug}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 items-start ${isEven ? "" : ""}`}>
                  {/* Character portrait */}
                  <div className={`${isEven ? "lg:order-2" : ""}`}>
                    <div
                      className={`relative aspect-[3/4] bg-void-mid border ${accent.border} rounded-lg overflow-hidden`}
                    >
                      <Image
                        src={character.imagePath}
                        alt={`${character.name} - ${character.role}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-2 ${isEven ? "lg:order-1" : ""}`}>
                    <p className={`font-ui text-sm uppercase tracking-[0.15em] ${accent.text} mb-2`}>
                      {character.role}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-6">
                      {character.name}
                    </h2>
                    <p className="font-body text-text-secondary leading-relaxed text-base mb-6">
                      {character.description}
                    </p>

                    {/* Relationships */}
                    <div className="bg-void-dark border border-border rounded-lg p-5">
                      <h3 className="font-ui font-semibold text-xs uppercase tracking-[0.1em] text-text-tertiary mb-3">
                        Key Relationships
                      </h3>
                      <ul className="space-y-1.5">
                        {character.relationships.map((rel) => (
                          <li
                            key={rel}
                            className="font-body text-sm text-text-secondary"
                          >
                            <span className={`${accent.text} mr-2`}>&bull;</span>
                            {rel}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <GreekKeyDivider />

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4">
            See them in action
          </h2>
          <p className="font-body text-text-secondary max-w-md mx-auto mb-8">
            Meet the crew yourself. The trilogy is available for pre-order now.
          </p>
          <Button href="https://www.amazon.co.uk/dp/B0GNFQM4FN" size="lg" external>
            Pre-Order Today
          </Button>
        </div>
      </section>
    </>
  );
}
