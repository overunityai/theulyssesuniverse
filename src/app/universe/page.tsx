import Link from "next/link";
import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Universe",
  description:
    "Explore the Ulysses Universe - characters, ship specs, glossary, and journey map. Dive into the world of this space opera reimagining of Homer's Odyssey.",
};

const sections = [
  {
    title: "Characters",
    description:
      "Meet the crew of the Odyssey. A blind admiral, an empathic son, a woman with no past, and a robot with too much heart.",
    href: "/universe/characters",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "The Odyssey",
    description:
      "The ship itself is a character. Explore the bridge, crew chamber, and engine room of the most battered vessel in the galaxy.",
    href: "/universe/odyssey",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Glossary",
    description:
      "The Merge. The Void. Data Suspension. The Pantheon. Every term and technology explained.",
    href: "/universe/glossary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Journey Map",
    description:
      "Follow the Odyssey's path from Troy Station to Ithaca. Every stop, every danger, every myth reimagined.",
    href: "/universe/journey",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
];

export default function UniversePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Universe", url: `${SITE_URL}/universe` },
        ])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Explore
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-wide mb-6">
            The Universe
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Homer's Odyssey reimagined as a space opera. Ancient gods became AI
            networks. The wine-dark sea became the Void. And the journey home
            became something far more dangerous.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Section Cards */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-void-dark border border-border rounded-lg p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
              >
                <div className="text-gold/60 group-hover:text-gold transition-colors mb-4">
                  {section.icon}
                </div>
                <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3 group-hover:text-gold transition-colors">
                  {section.title}
                </h2>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {section.description}
                </p>
                <span className="inline-block mt-4 font-ui text-sm uppercase tracking-[0.05em] text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
