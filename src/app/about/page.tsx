import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { SOCIAL_LINKS, SITE_URL, AUTHOR } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sotiris Spyrou, creator of the Ulysses Universe trilogy - a space opera reimagining of Homer's Odyssey.",
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
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
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
            About
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
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-void-dark border border-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="font-display text-6xl text-text-primary/10">
                  S
                </span>
                <p className="font-ui text-xs text-text-tertiary mt-2">
                  Author photo coming soon
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl text-text-primary tracking-wide mb-6">
                {AUTHOR.name}
              </h2>
              <div className="space-y-4 font-body text-text-secondary leading-relaxed">
                <p>
                  Sotiris grew up on two things: Greek myths and science fiction.
                  His grandmother told him stories about Odysseus before he could
                  read, and he watched Star Wars before he could spell "galaxy."
                  The Ulysses Universe is what happens when you spend 20 years
                  wondering what those two worlds would look like combined.
                </p>
                <p>
                  The trilogy started as a question: what if the Greek gods weren't
                  supernatural beings but artificial intelligence? What if Poseidon
                  didn't send storms - he corrupted your navigation data? What if
                  the wine-dark sea was the void between stars?
                </p>
                <p>
                  Three books and 129,000 words later, the answer turned out to be
                  bigger than expected. The Ulysses Universe isn't just a retelling
                  of the Odyssey. It's a story about what it means to come home
                  when home doesn't recognise you anymore. About a father and son
                  learning to trust each other across impossible distances. About
                  an AI companion who quotes human idioms at broken machinery
                  because encouragement is the only tool she has left.
                </p>
                <p>
                  Sotiris writes from London. When he's not building fictional
                  worlds, he's probably arguing about the correct pronunciation
                  of "scone."
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
              modern London. And it works in the cold, indifferent expanse of
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
              Every adaptation changes the original. This one doesn't pretend
              otherwise. But the heart is the same. Always the heart.
            </p>
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
