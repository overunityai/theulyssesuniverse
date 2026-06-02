import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { SOCIAL_LINKS, SITE_URL, AUTHOR, AMAZON_LINKS } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/schema";

const OTHER_BOOKS = [
  {
    title: "The Substrate",
    subtitle: "Why Reality Is Computation and What That Means for Everything",
    tagline: "A popular science investigation of consciousness, simulation, and the limits of mind.",
    audience: "Popular science, philosophy of mind, AI thinkers",
    blurb:
      "What if reality at its deepest layer is not matter or energy, but information being processed? The Substrate makes the case that the universe is computation - and follows the idea through consciousness, free will, and the emerging behaviour of large AI systems. The philosophical groundwork that the Ulysses Universe trilogy plays out in fiction.",
    amazonUrl: "https://www.amazon.com/dp/B0H3JDJKLS/",
    cover: "/images/other-books/the-substrate.webp",
    wikidataUrl: "https://www.wikidata.org/wiki/Q140032551",
  },
  {
    title: "Ethical AI",
    subtitle: "Building Responsible AI Systems That Benefit Everyone",
    tagline: "A practical guide for boards and C-suites navigating responsible AI deployment.",
    audience: "C-suite, boards, business owners",
    blurb:
      "Twenty-six chapters covering the full alphabet of ethics-anchored AI implementation. Self-assessment templates, governance frameworks, and the questions every leader should be asking their AI vendors. Written for executives who need answers more than hype.",
    amazonUrl: "https://a.co/d/09Pc24e5",
    cover: "/images/other-books/ethical-ai.webp",
  },
  {
    title: "AI Monopoly",
    subtitle: "Strategic Advantage in the Age of Artificial Intelligence",
    tagline: "How AI startups build defensible moats - and why most fail to.",
    audience: "Founders, investors, operators",
    blurb:
      "Nine named failure cases from the 2024-2026 AI boom (Stability, Cohere, Adept, Inflection, Character.AI, and others) analysed for what their moats actually were and where they cracked. Includes a 90-day moat-build-and-assess programme with operator and investor versions, plus a term-sheet diligence checklist and board-level moat dashboard.",
    amazonUrl: "https://a.co/d/0g5lSbXl",
    cover: "/images/other-books/ai-monopoly.webp",
  },
  {
    title: "TRANSFORM",
    subtitle: "The Executive's Playbook for AI Transformation That Actually Works",
    tagline: "A nine-phase framework for AI transformation in Fortune 500 and mid-market organisations.",
    audience: "C-suite, transformation leaders, $6M+ AI budgets",
    blurb:
      "Real case studies from JPMorgan Chase (COIN, LLM Suite), Schneider Electric (EcoStruxure), Bank of America (Erica AI), Maersk, and Mayo Clinic. The TRANSFORM acrostic is a genuine nine-phase framework, not an arbitrary alphabet. Honest about failure rates: the BCG/MIT, Gartner, IDC, and RAND data all properly attributed.",
    amazonUrl: "https://a.co/d/05se3XSH",
    cover: "/images/other-books/transform.webp",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sotiris Spyrou, creator of the Ulysses Universe trilogy - a space opera reimagining of Homer's Odyssey. Founder of VerityAI, 27 years in digital.",
  openGraph: {
    title: "About Sotiris Spyrou - The Ulysses Universe",
    description:
      "Meet Sotiris Spyrou, creator of the Ulysses Universe trilogy. Founder of VerityAI. 27 years in digital.",
    type: "profile",
    url: "https://theulyssesuniverse.com/about",
    images: [
      {
        url: "https://theulyssesuniverse.com/images/og/ulysses-hero.webp",
        width: 1200,
        height: 1200,
        alt: "Sotiris Spyrou - author of the Ulysses Universe trilogy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sotiris Spyrou",
    description: "Creator of the Ulysses Universe trilogy. Founder of VerityAI.",
    images: ["https://theulyssesuniverse.com/images/og/ulysses-hero.webp"],
  },
};

const contactCards = [
  {
    title: "Press & Media",
    description:
      "Interview requests, review copies, and media enquiries.",
    email: "press@theulyssesuniverse.com",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    title: "Business & Licensing",
    description:
      "Adaptation rights, licensing enquiries, and partnerships.",
    email: "hello@theulyssesuniverse.com",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const socialLinks = [
  { name: "YouTube", href: SOCIAL_LINKS.youtube, icon: "YT" },
  { name: "Instagram", href: SOCIAL_LINKS.instagram, icon: "IG" },
  { name: "TikTok", href: SOCIAL_LINKS.tiktok, icon: "TK" },
  { name: "X", href: SOCIAL_LINKS.x, icon: "X" },
  { name: "Goodreads", href: SOCIAL_LINKS.goodreads, icon: "GR" },
  { name: "LinkedIn", href: "https://linkedin.com/in/sspyrou", icon: "LI" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Book",
          "@id": "https://theulyssesuniverse.com/about#book-the-substrate",
          name: "The Substrate",
          alternateName: "The Substrate: Why Reality Is Computation and What That Means for Everything",
          author: {
            "@type": "Person",
            name: AUTHOR.name,
            sameAs: "https://www.wikidata.org/wiki/Q139860657",
          },
          inLanguage: "en",
          datePublished: "2026",
          isbn: ["9798199688727", "9798199701624"],
          identifier: [
            { "@type": "PropertyValue", propertyID: "Amazon ASIN", value: "B0H3JDJKLS" },
            { "@type": "PropertyValue", propertyID: "ISBN_13", value: "9798199688727" },
            { "@type": "PropertyValue", propertyID: "ISBN_13", value: "9798199701624" },
          ],
          image: `${SITE_URL}/images/other-books/the-substrate.webp`,
          url: "https://www.amazon.com/dp/B0H3JDJKLS/",
          sameAs: [
            "https://www.wikidata.org/wiki/Q140032551",
            "https://www.amazon.com/dp/B0H3JDJKLS/",
          ],
          publisher: { "@type": "Organization", name: "Independently published" },
          bookFormat: ["https://schema.org/Paperback", "https://schema.org/Hardcover"],
          genre: "Popular Science",
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            The Author
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            About Me
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            The person behind the trilogy, and the story behind the story.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Bio Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Author photo */}
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/about/author-photo.jpeg"
                alt="Sotiris Spyrou - author of the Ulysses Universe trilogy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl text-text-primary tracking-wide mb-6">
                {AUTHOR.name}
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  I grew up on three things: Greek myths, science fiction, and the
                  rise of computers. My first computer was something called a TRS-80
                  from RadioShack. My second was an Atari ST. My culture instilled
                  stories about Odysseus before I could read, and I watched Star Wars
                  before I could spell "galaxy." The Ulysses Universe is what happens
                  when you spend 20 years wondering what those worlds would look like
                  combined.
                </p>
                <p>
                  The trilogy started as a question: what if the Greek gods weren't
                  supernatural beings but artificial intelligence? What if Poseidon
                  didn't send storms - he corrupted your navigation data? What if
                  the wine-dark sea was the void between stars?
                </p>
                <p>
                  Three books later, the answer turned out to be bigger than
                  expected. The Ulysses Universe isn't just a retelling
                  of the Odyssey. It's a story about what it means to come home
                  when home doesn't recognise you anymore. About a father and son
                  learning to trust each other across impossible distances. About
                  an AI companion who quotes human idioms at broken machinery
                  because encouragement is the only tool she has left.
                </p>
                <p>
                  I write from Warwickshire - Shakespeare's county. When I'm not
                  building fictional worlds, I'm probably doing my actual day job:
                  engaging in board-level conversations as Founder of{" "}
                  <a
                    href="https://linkedin.com/in/sspyrou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold/80 hover:text-gold transition-colors"
                  >
                    VerityAI
                  </a>{" "}
                  - a Digital Marketing and Responsible AI consultancy. 27 years in
                  digital. So yes, I know a thing or two about AI. Which is probably
                  why I gave it godhood and let it loose on humanity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* The Story Behind the Story */}
      <section className="py-20 md:py-28 bg-void-dark/30">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-8 text-center">
            The story behind the story
          </h2>
          <div className="space-y-4 font-body text-text-secondary leading-relaxed">
            <p>
              Homer's Odyssey is about the journey home. That's it. Strip away
              the cyclops and the sirens and the gods meddling in mortal affairs,
              and you've got a man who wants to see his family again.
            </p>
            <p>
              That's a universal story. It works in ancient Greece. It works in
              modern Britain. And it works in the cold, indifferent expanse of
              deep space - maybe better than anywhere else. Because space doesn't
              care if you make it home. There's no current to carry you, no
              wind to fill your sails. Just physics, failing systems, and the
              stubbornness to keep going.
            </p>
            <p>
              The Ulysses Universe takes Homer's framework and rebuilds it. Gods
              become AI networks. The Mediterranean becomes a vast sector of
              contested space called the Void. Odysseus becomes Admiral Ulysses
              Theron - blinded in one eye, cursed by a vindictive AI god, and
              desperately trying to get 120 souls home on a ship that's held
              together by luck and duct tape.
            </p>
            <p>
              The characters aren't carbon copies. Telemachus isn't just a
              dutiful son - he's an empath who can feel other people's emotions
              and it's destroying him. Penelope isn't waiting passively - she's
              fighting a political war against the Suitors who want to seize
              Ithaca Station. Echo isn't a faithful dog - she's a robot who
              understands humanity better than most humans do.
            </p>
            <p>
              This project started as a folly. Something to pass the time and
              unwind on a routine commute between London and Rugby. But it became
              a journey on its own. Three books. An entire universe of gods and
              monsters and broken ships and impossible choices. And now?
            </p>
            <p className="text-text-primary font-medium">
              Now I want to share it with you.
            </p>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Also by Sotiris - Business books backlist */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
              Also by Sotiris Spyrou
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
              Beyond the trilogy
            </h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              The Ulysses Universe is the fiction. Around it: a popular science
              book on the computational nature of reality, and three business
              books for executives navigating AI. Different forms, same
              underlying question - what happens when the patterns we build
              start running themselves?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {OTHER_BOOKS.map((book) => (
              <a
                key={book.title}
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-void-dark border border-border rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
              >
                <div className="relative aspect-[2/3] bg-void-mid overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={`${book.title} by Sotiris Spyrou - book cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-ui text-xs uppercase tracking-wider text-gold/70 mb-3">
                    {book.audience}
                  </p>
                  <h3 className="font-display text-xl text-text-primary tracking-wide mb-2 group-hover:text-gold transition-colors">
                    {book.title}
                  </h3>
                  <p className="font-body text-xs text-text-tertiary italic mb-3 leading-relaxed">
                    {book.subtitle}
                  </p>
                  <p className="font-body text-sm text-text-secondary italic mb-4 leading-relaxed">
                    {book.tagline}
                  </p>
                  <p className="font-body text-sm text-text-tertiary leading-relaxed mb-4 line-clamp-4 flex-1">
                    {book.blurb}
                  </p>
                  <p className="font-ui text-xs uppercase tracking-wider text-gold/70 mt-auto">
                    View on Amazon -&gt;
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={AMAZON_LINKS.authorPage}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              View all books on Amazon Author Central -&gt;
            </a>
          </div>

          {/* Companion book + game blueprint (Greek-key brand) */}
          <div className="mt-16 max-w-3xl mx-auto bg-void-dark border border-gold/10 rounded-lg p-8">
            <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
              <p className="font-ui text-xs uppercase tracking-[0.15em] text-gold/70">
                Trilogy companion + game blueprint
              </p>
              <span className="inline-flex items-center font-ui text-xs uppercase tracking-wider text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full">
                Game coming 2027
              </span>
            </div>
            <h3 className="font-display text-2xl text-text-primary tracking-wide mb-3">
              The Art of War: Ulysses Edition
            </h3>
            <p className="font-body text-text-secondary leading-relaxed mb-4">
              A companion volume to the Ulysses Universe trilogy that maps Sun
              Tzu&apos;s classical strategy framework onto Ulysses Theron&apos;s
              twenty-year campaign home. Same brand as the trilogy (Greek-key
              meander, bronze and deep blue). Aimed at readers who finished the
              trilogy and want to see the strategic logic underneath.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              The book is also the design blueprint for{" "}
              <strong className="text-text-primary">
                The Art of War
              </strong>{" "}
              - a video game launching in 2027 that turns the trilogy&apos;s
              strategic playbook into interactive form. Development is active.
              Build progress and dev-log are published at game.theulyssesuniverse.com.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://game.theulyssesuniverse.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui font-semibold text-sm uppercase tracking-[0.05em] bg-gold text-void-black px-5 py-2.5 rounded-lg hover:bg-gold-light transition-colors"
              >
                The Art of War - Coming 2027 -&gt;
              </a>
              <Link
                href="/books"
                className="inline-flex items-center font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
              >
                All Ulysses Universe books -&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Contact Cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-12 text-center">
            Get in touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-void-dark border border-border rounded-lg p-6"
              >
                <div className="text-gold/60 mb-4">{card.icon}</div>
                <h3 className="font-display text-xl text-text-primary tracking-wide mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4">
                  {card.description}
                </p>
                <a
                  href={`mailto:${card.email}`}
                  className="font-ui text-sm text-gold hover:text-gold-light transition-colors"
                >
                  {card.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Social Links */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-xl text-text-primary tracking-wide mb-6">
            Follow the journey
          </h2>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-void-dark border border-border rounded-lg flex items-center justify-center text-text-tertiary hover:text-gold hover:border-gold/30 transition-all"
                aria-label={link.name}
              >
                <span className="font-ui text-xs font-semibold">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
