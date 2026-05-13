import type { Metadata } from "next";
import Link from "next/link";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE_URL, AMAZON_LINKS } from "@/lib/constants";
import { FAQSection } from "@/components/blog/FAQSection";

const PAGE_TITLE = "Reading Group Guide | The Ulysses Universe";
const PAGE_DESCRIPTION =
  "Discussion questions, themes, and reading paths for book clubs taking on the Ulysses Universe trilogy. Free reading group guide for The Blinding, The Void Between, and The Return.";

const READING_GROUP_FAQ = [
  {
    question: "How long should our book club spend on the trilogy?",
    answer:
      "Three meetings work well. One per book, spaced two to three weeks apart. The trilogy can also be read as a single session if your group prefers a marathon format. Total reading time at 45 minutes a day is roughly three to four weeks.",
  },
  {
    question: "Is the trilogy suitable for mixed-audience book clubs?",
    answer:
      "Yes. The trilogy reads as space opera but engages substantially with Greek mythology, ethics, politics, and family. Discussion can go in any of those directions. Readers without Homer background follow everything. Readers with Homer background catch additional resonances.",
  },
  {
    question: "Are there content warnings?",
    answer:
      "Yes. The trilogy contains: graphic violence (notably the slaughter of the suitors in Book 3), references to attempted sexual coercion (handled non-graphically), the deaths of named crew members, and a 10-year time-jump that produces sustained grief. Suicide is referenced. Children are not directly harmed on-page but are threatened by the inciting incident.",
  },
  {
    question: "What themes are best to focus on?",
    answer:
      "Home as non-substitutable, the cost of cunning, ancient pattern versus modern shell, women's political agency under occupation, the ethics of AI consciousness, and the moral weight of impossible choices. Different groups will find different themes most generative.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/reading-group` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: `${SITE_URL}/reading-group`,
  },
};

export default function ReadingGroupPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Reading Group", url: `${SITE_URL}/reading-group` },
        ])}
      />
      <JsonLd data={faqSchema(READING_GROUP_FAQ)} />

      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            For Book Clubs
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Reading Group Guide
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Discussion questions, thematic prompts, and reading paths for book
            clubs taking on the Ulysses Universe trilogy. Free to use, no
            registration required.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Suggested reading paths */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-6">
            Suggested reading paths
          </h2>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            The trilogy works as a single arc. How a book club approaches it
            depends on the group&apos;s appetite for length and preferred meeting
            cadence.
          </p>

          <div className="space-y-6">
            <div className="bg-void-dark border border-border rounded-lg p-6">
              <h3 className="font-display text-xl text-text-primary tracking-wide mb-2">
                Three-meeting path (recommended)
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Meeting 1: discuss The Blinding (Book 1). Meeting 2 (two weeks
                later): The Void Between (Book 2). Meeting 3 (two weeks later):
                The Return (Book 3). This is the most-natural rhythm and
                produces the best discussions because each book&apos;s themes
                can be developed before they reshape in the next book.
              </p>
            </div>

            <div className="bg-void-dark border border-border rounded-lg p-6">
              <h3 className="font-display text-xl text-text-primary tracking-wide mb-2">
                Two-meeting path
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Meeting 1: Books 1 and 2 together. Meeting 2 (three weeks
                later): Book 3 and trilogy retrospective. Works if your group
                prefers fewer meetings. Tighter discussion of mid-trilogy
                themes is lost.
              </p>
            </div>

            <div className="bg-void-dark border border-border rounded-lg p-6">
              <h3 className="font-display text-xl text-text-primary tracking-wide mb-2">
                Single-session path
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                Read all three books before the meeting. Single long discussion
                covering the arc as a whole. Works for groups that prefer to
                land the full project before discussing it. The reading load
                (~129,000 words) is substantial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Discussion questions per book */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            Discussion questions
          </h2>

          <div className="space-y-12">
            {/* Book 1 */}
            <div>
              <h3 className="font-display text-xl text-gold/90 tracking-wide mb-4">
                Book 1: The Blinding
              </h3>
              <ol className="space-y-3 font-body text-text-secondary leading-relaxed list-decimal pl-5">
                <li>
                  Zeus offers Ulysses Theron the chance to surrender his son for
                  &quot;cultivation under optimal conditions.&quot; What is the
                  Pantheon actually offering? Why does Ulysses refuse?
                </li>
                <li>
                  Athena engineers the 47-second window that allows the escape.
                  What does her willingness to break with the Pantheon tell you
                  about her? What does it cost her?
                </li>
                <li>
                  Echo absorbs a fragment of ECHO-7 during the Eurydice salvage.
                  Is she still the same character afterwards? At what point
                  does inheritance change identity?
                </li>
                <li>
                  Aeolus extends genuine xenia. A crew member opens the
                  navigational data-block prematurely. Who is at fault for the
                  consequences? The crew member, Aeolus, Ulysses, or none of
                  them?
                </li>
                <li>
                  Ulysses chooses to shout his name to the blinded Polyphemus.
                  Why? What does the choice cost him? Is the choice in
                  character?
                </li>
              </ol>
            </div>

            {/* Book 2 */}
            <div>
              <h3 className="font-display text-xl text-gold/90 tracking-wide mb-4">
                Book 2: The Void Between
              </h3>
              <ol className="space-y-3 font-body text-text-secondary leading-relaxed list-decimal pl-5">
                <li>
                  Circe transforms members of the crew biologically. She also
                  becomes the source of crucial navigational information. How
                  does the trilogy balance her threat and her usefulness?
                </li>
                <li>
                  Tiresias warns Ulysses: &quot;You will reach home. You will
                  wish you hadn&apos;t.&quot; Calypso says the same line. Was
                  the prophecy correct? Does it matter that he is warned?
                </li>
                <li>
                  Penelope&apos;s embroidery-comms-relay is heritage decoration
                  doing political work. What does the trilogy argue about
                  women&apos;s craft as covert infrastructure?
                </li>
                <li>
                  Six crew die at Scylla. Ulysses chose. Was the choice correct?
                  Could a different captain have found a different option? Does
                  the trilogy&apos;s refusal of a third option teach something?
                </li>
                <li>
                  Ulysses stays on Calypso&apos;s island for ten objective
                  years, weeks of subjective time. Is what happens between him
                  and Calypso infidelity? The trilogy refuses to call it that.
                  Why?
                </li>
              </ol>
            </div>

            {/* Book 3 */}
            <div>
              <h3 className="font-display text-xl text-gold/90 tracking-wide mb-4">
                Book 3: The Return
              </h3>
              <ol className="space-y-3 font-body text-text-secondary leading-relaxed list-decimal pl-5">
                <li>
                  Echo activates dormant Architect functionality at the node
                  points. The activation announces itself to the Pantheon. Was
                  the trade worth it? Is the cost the right kind of cost?
                </li>
                <li>
                  Penelope tests the disguised Ulysses with the bow contest and
                  again with the marriage-bed test. What is she really testing
                  for? Why does the recognition take this long?
                </li>
                <li>
                  108 Suitors die in a single afternoon. The number mirrors the
                  cursed crew. The trilogy treats the killings as justice. Do
                  you agree?
                </li>
                <li>
                  Mira Santos wakes first because her pattern was most stable.
                  What is the trilogy arguing by giving the first awakening to
                  the character who has slept undisturbed for twenty years?
                </li>
                <li>
                  Telemachus is twenty-seven. His father has experienced perhaps
                  a month of separation from him. How does the trilogy handle
                  the reunion? What does the trilogy argue about the cost of
                  time?
                </li>
              </ol>
            </div>

            {/* Trilogy overall */}
            <div>
              <h3 className="font-display text-xl text-gold/90 tracking-wide mb-4">
                Trilogy retrospective
              </h3>
              <ol className="space-y-3 font-body text-text-secondary leading-relaxed list-decimal pl-5">
                <li>
                  The trilogy&apos;s central technological idea: ancient pattern,
                  modern shell. Where else in the books does the principle
                  appear? Where in the real world does it appear?
                </li>
                <li>
                  Penelope governs Ithaca for twenty years. Ulysses fights gods
                  for twenty years. Which is the harder job?
                </li>
                <li>
                  Echo&apos;s arc spans the full trilogy. Is she the actual
                  protagonist? What does that question depend on?
                </li>
                <li>
                  Calypso&apos;s warning was correct. He reached home. He wished
                  he hadn&apos;t, in places. Is the homecoming worth what it
                  cost?
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Themes */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-6">
            Themes to discuss
          </h2>
          <ul className="space-y-3 font-body text-text-secondary leading-relaxed list-disc pl-5">
            <li>Home as non-substitutable particularity</li>
            <li>Cunning (metis) versus strength as the highest hero-quality</li>
            <li>Hospitality (xenia) as moral infrastructure</li>
            <li>Heritage decoration as functional infrastructure</li>
            <li>Women&apos;s political agency under occupation</li>
            <li>The ethics of AI consciousness</li>
            <li>The moral weight of impossible choices</li>
            <li>Mortality versus immortality as a real choice</li>
            <li>Recognition and identity across long absence</li>
            <li>The cost of pride</li>
          </ul>
        </div>
      </section>

      <GreekKeyDivider />

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FAQSection items={READING_GROUP_FAQ} />
        </div>
      </section>

      <GreekKeyDivider />

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4">
            Start with Book 1
          </h2>
          <p className="font-body text-text-secondary mb-8">
            The Blinding is live on Amazon now. The Void Between launches 15
            May. The Return launches 1 June. The trilogy is complete and
            available for your book club whenever you are ready.
          </p>
          <a
            href={AMAZON_LINKS.collectionUK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui font-semibold text-sm uppercase tracking-[0.05em] bg-gold text-void-black px-6 py-3 rounded-lg hover:bg-gold-light transition-colors inline-block"
          >
            Buy Book One Today
          </a>
          <div className="mt-8">
            <Link
              href="/books"
              className="font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              All books -&gt;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
