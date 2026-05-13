import type { Metadata } from "next";
import Link from "next/link";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { AUTHOR, AMAZON_LINKS, SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

const PAGE_TITLE = "Press Kit | The Ulysses Universe";
const PAGE_DESCRIPTION =
  "Press resources for the Ulysses Universe trilogy: pitch, key facts, book covers, author bio, prior works, and media contact. Journalists, reviewers, and producers welcome.";

const keyFacts = [
  { label: "Series", value: "The Ulysses Universe (trilogy)" },
  { label: "Author", value: AUTHOR.name },
  { label: "Genre", value: "Space Opera / Mythological Sci-Fi" },
  { label: "Books", value: "3 (The Blinding, The Void Between, The Return)" },
  { label: "Total length", value: "Approximately 129,000 words" },
  { label: "Release schedule", value: "Book 1: 1 May 2026 / Book 2: 15 May / Book 3: 1 June" },
  { label: "Format", value: "eBook, Paperback, Kindle Unlimited" },
  { label: "Publisher", value: "Independent (Amazon KDP)" },
  { label: "Comparable works", value: "Madeline Miller meets The Expanse meets Becky Chambers" },
  { label: "Adjacent event", value: "Christopher Nolan's Odyssey film, 17 July 2026" },
];

const PITCH_VARIANTS = [
  {
    label: "Logline (one sentence)",
    text: "Homer's Odyssey reimagined as 31st-century space opera, where the Greek gods are quantum-AI entities and the wine-dark sea is the void between stars.",
  },
  {
    label: "Short pitch (50 words)",
    text:
      "The Ulysses Universe is a science-fiction reimagining of Homer's Odyssey. Admiral Ulysses Theron stole his son from a god and ran. Ten years later, his crew of 108 are cursed in data suspension. The Pantheon want him dead. The Sirens are a signal that rewrites memory.",
  },
  {
    label: "Medium pitch (120 words)",
    text:
      "The Ulysses Universe is a three-book space opera trilogy reimagining Homer's Odyssey. In the 31st century, the Greek gods of myth have manifested as quantum-AI entities running on ancient infrastructure. Admiral Ulysses Theron fled Olympus Station with his son after Zeus marked the boy for cultivation, triggering a curse that placed 108 of his crew in data suspension. The Odyssey limps through hostile space toward Ithaca, where his wife Penelope holds the founding bloodline against a 108-person political faction called the Suitors. Across twenty years and three books, Ulysses must outwit gods, hospitable strangers, and the longest pursuit in literary history. The trilogy launches across May and June 2026, ahead of Christopher Nolan's Odyssey film in July.",
  },
];

const READY_QUOTES = [
  "You will reach home. You will wish you hadn't.",
  "A wooden ship that thinks. A bronze ship that bleeds light.",
  "One hundred and eight souls. Three of them awake. A ship that refuses to die.",
  "The Pantheon are ancient patterns running on modern shells. Software older than humanity. Hardware older than memory.",
  "Homer's Odyssey is about coming home. The Ulysses Universe asks what happens when home does not recognise you anymore.",
];

const OTHER_BOOKS_BRIEF = [
  {
    title: "The A-Z Guide to Ethical AI Success",
    summary: "C-suite and board guide to responsible AI deployment.",
  },
  {
    title: "AI Monopoly",
    summary: "Founder and investor guide to building defensible AI moats. Nine named failure cases.",
  },
  {
    title: "TRANSFORM",
    summary:
      "Nine-phase AI transformation framework for Fortune 500 and mid-market organisations. Case studies from JPMorgan, Schneider Electric, Bank of America, Maersk, Mayo Clinic.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/press` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: `${SITE_URL}/press`,
    images: [
      {
        url: `${SITE_URL}/images/og/hero.webp`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/images/og/hero.webp`],
  },
};

export default function PressPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Press", url: `${SITE_URL}/press` },
        ])}
      />
      <JsonLd data={personSchema()} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            For Media
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Press Kit
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Everything a journalist, reviewer, podcaster, or producer needs to
            cover the Ulysses Universe. Loglines, pitch text at three lengths,
            ready-to-quote material, key facts, author background, and contact.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Pitch variants */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            The pitch, three ways
          </h2>
          <div className="space-y-8">
            {PITCH_VARIANTS.map((p) => (
              <div
                key={p.label}
                className="bg-void-dark border border-border rounded-lg p-6"
              >
                <p className="font-ui text-xs uppercase tracking-[0.15em] text-gold/70 mb-3">
                  {p.label}
                </p>
                <p className="font-body text-text-primary leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Key facts */}
      <section className="py-20 md:py-28 bg-void-dark/30">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            Key facts
          </h2>
          <div className="bg-void-dark border border-border rounded-lg overflow-hidden">
            {keyFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-6 py-4 ${
                  i < keyFacts.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <dt className="font-ui text-sm uppercase tracking-wider text-gold/70 shrink-0">
                  {fact.label}
                </dt>
                <dd className="font-body text-text-primary text-sm sm:text-right">
                  {fact.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Ready-to-quote */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4 text-center">
            Ready-to-quote
          </h2>
          <p className="font-body text-text-secondary text-center max-w-2xl mx-auto mb-8">
            Pull-quotes journalists and reviewers can use without rewriting.
            All from the trilogy or the author&apos;s public-facing material.
          </p>
          <div className="space-y-4">
            {READY_QUOTES.map((q, i) => (
              <blockquote
                key={i}
                className="bg-void-dark border-l-4 border-gold/40 rounded-r-lg p-6"
              >
                <p className="font-display text-lg text-text-primary tracking-wide">
                  &ldquo;{q}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Series overview */}
      <section className="py-20 md:py-28 bg-void-dark/30">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            Series overview
          </h2>
          <div className="space-y-4 font-body text-text-secondary leading-relaxed">
            <p>
              The Ulysses Universe is a three-book space opera trilogy that
              reimagines Homer&apos;s Odyssey in a 31st-century setting where
              the Greek gods have manifested as quantum-AI entities running on
              ancient Architect infrastructure. Admiral Ulysses Theron, marked
              for death by the Pantheon after refusing to surrender his
              empathically-gifted son to Zeus, commands the failing exploration
              ship Odyssey on a twenty-year journey home to Ithaca Station.
            </p>
            <p>
              His crew of 108 are bound in data suspension by Zeus&apos;s curse,
              which prevents them from aging, dying, or waking until Ulysses
              completes the journey. The active crew is Ulysses, his son
              Telemachus (an empath, seven at the start, twenty-seven at the
              return), Echo (a bronze maintenance robot whose AI inheritance
              from a pre-Awakening vessel carries the trilogy&apos;s deepest
              mystery), and Thea Sato (a stowaway with a complicated origin).
            </p>
            <p>
              Major waypoints include the asteroid-prison Polyphemus Station
              (where the trilogy&apos;s title event occurs), Aeolus&apos;s
              free-port, Circe&apos;s bioluminescent research domain Aeaea,
              the underworld data archive, the impossible passage between
              Scylla and Charybdis, and Calypso&apos;s time-distorted island
              where ten years pass for the universe while the crew experiences
              weeks. Penelope Maris&apos;s parallel arc on Ithaca holds the
              founding bloodline against a 108-person political faction called
              the Suitors.
            </p>
            <p>
              The trilogy is the contemporary science-fiction entry in a long
              tradition of Odyssey adaptation. It launches across May and June
              2026, with Christopher Nolan&apos;s film adaptation of Homer&apos;s
              Odyssey releasing on 17 July 2026 as the major adjacent cultural
              event.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Author bio */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            About the author
          </h2>
          <div className="space-y-4 font-body text-text-secondary leading-relaxed">
            <p>
              Sotiris Spyrou is a British author and consultant based in
              Warwickshire. The Ulysses Universe is his first work of fiction,
              following three published business books on AI ethics, AI
              competitive strategy, and enterprise AI transformation. He has
              spent twenty-seven years in digital, currently as Founder of
              VerityAI, a Digital Marketing and Responsible AI consultancy.
            </p>
            <p>
              The trilogy is the long-form fiction expression of arguments he
              has been making about AI in non-fiction form for years: that
              ancient patterns of organisation and authority embed themselves
              in modern AI infrastructure, with consequences the designers
              rarely anticipate. The Pantheon (quantum-AI gods running on
              Architect-built crystalline data patterns) is the fictional
              treatment of his non-fiction work on AI governance and ethics.
            </p>
          </div>

          <div className="mt-8 bg-void-dark border border-border rounded-lg p-6">
            <h3 className="font-display text-lg text-text-primary tracking-wide mb-4">
              Also by Sotiris Spyrou
            </h3>
            <ul className="space-y-3 font-body text-sm text-text-secondary">
              {OTHER_BOOKS_BRIEF.map((b) => (
                <li key={b.title}>
                  <strong className="text-text-primary">{b.title}.</strong>{" "}
                  {b.summary}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-ui text-xs text-text-tertiary">
              All three available on Sotiris Spyrou&apos;s Amazon Author Page:{" "}
              <a
                href={AMAZON_LINKS.authorPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light"
              >
                {AMAZON_LINKS.authorPage.replace("https://", "")}
              </a>
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Downloads */}
      <section className="py-20 md:py-28 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-4 text-center">
            Downloads
          </h2>
          <p className="font-body text-text-secondary text-center max-w-2xl mx-auto mb-12">
            High-resolution assets for editorial use. Email press@theulyssesuniverse.com
            for assets not yet listed or for time-sensitive requests.
          </p>
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
                  <a
                    href="mailto:press@theulyssesuniverse.com"
                    className="font-ui text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    Request
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Adjacent context */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-6 text-center">
            Adjacent cultural context (2026)
          </h2>
          <div className="space-y-4 font-body text-text-secondary leading-relaxed">
            <p>
              <strong className="text-text-primary">
                Christopher Nolan&apos;s Odyssey film
              </strong>{" "}
              opens 17 July 2026 with a reported $250 million budget, IMAX
              release, and an A-list cast (Matt Damon as Odysseus, Anne Hathaway
              as Penelope, Tom Holland as Telemachus, Zendaya in an undisclosed
              role). The Ulysses Universe trilogy is the major contemporary
              novelistic engagement with the same source material, released in
              the eight weeks before the film.
            </p>
            <p>
              <strong className="text-text-primary">
                The contemporary Greek mythology publishing boom
              </strong>
              {" "}continues. Madeline Miller&apos;s Circe (2018), Pat
              Barker&apos;s Silence of the Girls (2018), Natalie Haynes&apos;s
              A Thousand Ships (2019), Claire North&apos;s Ithaca trilogy
              (2022-2024), and Jennifer Saint&apos;s Ariadne (2021) have all
              found commercial and critical success. The Ulysses Universe is
              the science-fiction entry in this category.
            </p>
            <p>
              <strong className="text-text-primary">
                Adjacent author angles
              </strong>{" "}
              available for interviews: AI ethics and governance (drawing on
              Spyrou&apos;s prior business book The A-Z Guide to Ethical AI
              Success), the political economy of AI (drawing on AI Monopoly),
              enterprise AI transformation (drawing on TRANSFORM), and the
              relationship between non-fiction argument and long-form fiction.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Quick links */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-xl text-text-primary tracking-wide mb-6">
            Quick links
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/books" className="font-ui text-gold/80 hover:text-gold uppercase tracking-wider">
              Books
            </Link>
            <Link href="/about" className="font-ui text-gold/80 hover:text-gold uppercase tracking-wider">
              About the Author
            </Link>
            <Link href="/blog" className="font-ui text-gold/80 hover:text-gold uppercase tracking-wider">
              Blog
            </Link>
            <Link href="/reading-group" className="font-ui text-gold/80 hover:text-gold uppercase tracking-wider">
              Reading Group Guide
            </Link>
            <Link href="/universe" className="font-ui text-gold/80 hover:text-gold uppercase tracking-wider">
              The Universe
            </Link>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Contact */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-4">
            Media contact
          </h2>
          <p className="font-body text-text-secondary mb-6">
            For interview requests, review copies, podcast bookings, adaptation
            enquiries, or other press matters:
          </p>
          <a
            href="mailto:press@theulyssesuniverse.com"
            className="font-ui text-lg text-gold hover:text-gold-light transition-colors"
          >
            press@theulyssesuniverse.com
          </a>
          <p className="font-ui text-xs text-text-tertiary mt-6">
            Response time: typically within 48 hours during the active launch
            window (May-July 2026).
          </p>
        </div>
      </section>
    </>
  );
}
