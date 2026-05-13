import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Journey Map",
  description:
    "Follow the Odyssey's path from Troy Station to Ithaca. Every stop, every danger, every myth reimagined in space.",
};

const journeyStops = [
  {
    number: 1,
    name: "Troy Station",
    homer: "Troy",
    description:
      "Where the war ended and Ulysses' real journey began. He made a choice here that put him on the wrong side of a god.",
    accent: "text-red",
  },
  {
    number: 2,
    name: "Polyphemus Station",
    homer: "Cyclops' Island",
    description:
      "An abandoned prison run by a rogue AI with one golden eye on every screen. Ulysses blinded that eye. Poseidon never forgave him.",
    accent: "text-gold",
  },
  {
    number: 3,
    name: "Aeolus Relay",
    homer: "Aeolus' Island",
    description:
      "A communications relay that offered the crew a shortcut home. The crew's distrust turned a gift into a curse.",
    accent: "text-blue",
  },
  {
    number: 4,
    name: "Circe's Domain",
    homer: "Aeaea",
    description:
      "A region where reality gets flexible. Circe transforms what passes through - ships, systems, sometimes people.",
    accent: "text-purple",
  },
  {
    number: 5,
    name: "The Siren Fields",
    homer: "Sirens' Island",
    description:
      "Not sound. Data. Dense, irresistible data streams that pull ships off course and minds apart.",
    accent: "text-blue",
  },
  {
    number: 6,
    name: "Scylla Passage",
    homer: "Scylla & Charybdis",
    description:
      "Six heads. Six targeting systems. A nightmare guarding a passage no sane captain would attempt.",
    accent: "text-red",
  },
  {
    number: 7,
    name: "Calypso's Reach",
    homer: "Ogygia",
    description:
      "Seven years of offered paradise. A prison disguised as peace. The hardest place to leave because you almost don't want to.",
    accent: "text-purple",
  },
  {
    number: 8,
    name: "Ithaca Station",
    homer: "Ithaca",
    description:
      "Home. But twenty years changes everything. The suitors control the docks. Penelope holds on. And the curse follows Ulysses through the gates.",
    accent: "text-gold",
  },
];

export default function JourneyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Universe", url: `${SITE_URL}/universe` },
          { name: "Journey Map", url: `${SITE_URL}/universe/journey` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            The Universe
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Journey Map
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Homer mapped the journey in wine-dark seas. We mapped it in
            starlight. Every stop the Odyssey makes echoes a chapter from the
            original epic.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Journey Timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-blue/30 to-gold/40" />

            <div className="space-y-12">
              {journeyStops.map((stop) => (
                <div key={stop.number} className="relative pl-16 md:pl-20">
                  {/* Node */}
                  <div className="absolute left-3 md:left-5 top-1 w-6 h-6 rounded-full bg-void-dark border-2 border-gold/50 flex items-center justify-center">
                    <span className="font-ui text-[10px] font-semibold text-gold">
                      {stop.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-void-dark border border-border rounded-lg p-6 transition-all duration-300 hover:border-gold/20">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-display text-xl text-text-primary tracking-wide">
                        {stop.name}
                      </h3>
                      <span className="font-ui text-xs uppercase tracking-wider text-text-tertiary">
                        Homer: {stop.homer}
                      </span>
                    </div>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      {stop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4">
            The journey starts here
          </h2>
          <p className="font-body text-text-secondary max-w-md mx-auto mb-8">
            The Blinding is live now. Start the journey on Amazon.
          </p>
          <Button href="https://www.amazon.co.uk/dp/B0GNFQM4FN" size="lg" external>
            Buy Book One Today
          </Button>
        </div>
      </section>
    </>
  );
}
