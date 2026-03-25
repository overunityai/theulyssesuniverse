import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Odyssey - Ship Specifications",
  description:
    "Explore the Odyssey - Admiral Ulysses Theron's ship. Bridge, Crew Chamber, Engine Room specs and lore from the Ulysses Universe trilogy.",
};

const shipSpecs = [
  { label: "Class", value: "Horizon-class deep-space cruiser" },
  { label: "Commander", value: "Admiral Ulysses Theron" },
  { label: "Crew (active)", value: "12" },
  { label: "Crew (suspended)", value: "108 souls in data suspension" },
  { label: "AI Systems", value: "Echo (companion), Athena (embedded)" },
  { label: "Status", value: "Hull failing. Systems patched. Still flying." },
  { label: "Mission", value: "Get home. Don't die." },
];

const locations = [
  {
    name: "The Bridge",
    description:
      "Where Ulysses sits in the captain's chair and makes impossible choices. Holographic displays show star charts that don't match reality anymore. Athena's voice comes through the speakers here - sometimes helpful, sometimes cryptic, always watching.",
    accent: "gold",
  },
  {
    name: "The Crew Chamber",
    description:
      "108 suspension pods line the walls in concentric rings, each holding a frozen soul. Telemachus comes here when the empathy gets too loud - the suspended crew don't feel anything, and the silence is the closest thing to peace he's got.",
    accent: "blue",
  },
  {
    name: "The Engine Room",
    description:
      "Echo's domain. She patches what she can, reports what she can't, and quotes human idioms at the machinery as if encouragement might fix a cracked fuel line. The engines haven't run at full capacity in three years. They don't need to. They just need to run.",
    accent: "blue",
  },
];

const accentColors: Record<string, string> = {
  gold: "border-gold/30 text-gold",
  blue: "border-blue/30 text-blue",
};

export default function OdysseyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Universe", url: `${SITE_URL}/universe` },
          { name: "The Odyssey", url: `${SITE_URL}/universe/odyssey` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            The Universe
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            The Odyssey
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            She's battered, patched, and held together by luck and an AI goddess
            whispering through her systems. But she's still flying. And 120
            souls depend on her staying that way.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Ship Specs */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
              Ship Specifications
            </h2>
            <div className="bg-void-dark border border-border rounded-lg overflow-hidden">
              {shipSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-start px-6 py-4 ${
                    i < shipSpecs.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <dt className="font-ui text-sm uppercase tracking-wider text-gold/70 shrink-0 mr-4">
                    {spec.label}
                  </dt>
                  <dd className="font-body text-text-primary text-sm text-right">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Key Locations */}
      <section className="py-20 md:py-28 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-12 text-center">
            Key Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className={`bg-void-dark border ${
                  accentColors[loc.accent]?.split(" ")[0] || "border-border"
                } rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]`}
              >
                <h3 className="font-display text-xl text-text-primary tracking-wide mb-4">
                  {loc.name}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {loc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4">
            Step aboard
          </h2>
          <p className="font-body text-text-secondary max-w-md mx-auto mb-8">
            Step aboard the Odyssey. The trilogy is available for pre-order now.
          </p>
          <Button href="https://www.amazon.co.uk/dp/B0GNFQM4FN" size="lg" external>
            Pre-Order Today
          </Button>
        </div>
      </section>
    </>
  );
}
