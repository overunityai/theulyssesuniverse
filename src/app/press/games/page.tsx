import type { Metadata } from "next";
import Link from "next/link";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { AUTHOR, SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

const PAGE_TITLE = "Games Press Kit | The Ulysses Universe";
const PAGE_DESCRIPTION =
  "Press resources for the Ulysses Universe games line: The Odyssey (a free first-person narrative-exploration game, playable now in the browser) and ECHOS (a third-person action RPG in pre-production for 2030+). Journalists, reviewers, content creators welcome.";

// Facts trace to the live build and the project handover. Anything not yet
// settled (price, store platforms, age rating, launch date) is deliberately
// absent rather than estimated: this page is quotable.
const VOL_I_FACTS = [
  { label: "Title", value: "The Art of War: The Odyssey" },
  { label: "Subtitle", value: "The Long Way Home" },
  { label: "Genre", value: "First-person narrative exploration / sci-fi" },
  { label: "Engine", value: "Three.js r169, hand-coded, self-hosted" },
  { label: "Platform", value: "Browser, desktop. No download, no sign-up." },
  { label: "Price", value: "Free" },
  { label: "Players", value: "Single-player" },
  { label: "Combat", value: "None" },
  { label: "Structure", value: "Voiced 3-act story across 9 explorable spaces" },
  { label: "Choice", value: "One triage decision at Pod 31, leading to 3 endings" },
  { label: "Setting", value: "Year 10 of a 20-year crossing. 108 souls in suspension." },
  { label: "Language", value: "English (en-GB)" },
  { label: "Status", value: "Playable now, in active polish" },
  { label: "Comparable games", value: "Gone Home · Tacoma" },
  { label: "Developer", value: "Sotiris Spyrou (solo)" },
  { label: "Publisher", value: "Sotiris Spyrou (self-published)" },
];

const VOL_II_FACTS = [
  { label: "Title", value: "The Art of War: ECHOS" },
  { label: "Vol", value: "II (Action RPG)" },
  { label: "Genre", value: "Third-person action RPG / sci-fi narrative" },
  { label: "Engine", value: "Unreal Engine 5" },
  { label: "Platforms (planned)", value: "Steam · macOS · Steam Deck · PS5 · Xbox Series X|S · Switch 2" },
  { label: "Players", value: "Single-player" },
  { label: "Run length", value: "~40-60h main story" },
  { label: "Comparable games", value: "Cyberpunk 2077 · The Witcher 3 · Hellblade II" },
  { label: "Setting", value: "20 years after the trilogy. Olympus Concourse. Athena-fragment co-protagonist." },
  { label: "Status", value: "Phase 0 - concept bible + GDD writing. Vertical slice 4-9 months out." },
  { label: "Capital model", value: "Bootstrap concept bible → Kickstarter against vertical slice → indie publisher OR Series A → AAA studio license-out" },
  { label: "Launch target", value: "2030+" },
  { label: "Developer", value: "Sotiris Spyrou + future team" },
];

const VOL_I_PITCH_VARIANTS = [
  {
    label: "One-line",
    text: "Gone Home on a generation ship, ten years from anywhere.",
  },
  {
    label: "Short pitch (50 words)",
    text:
      "THE ART OF WAR: THE ODYSSEY is a first-person narrative-exploration game, free in the browser. You are Ulysses, captain of a generation ship halfway through a 20-year crossing. 108 souls sleep in the hold. One pod is failing. You decide what happens to the soul inside it.",
  },
  {
    label: "Medium pitch (140 words)",
    text:
      "A first-person narrative-exploration game set in the Ulysses Universe trilogy by Sotiris Spyrou. You play Admiral Ulysses Theron, captain of the generation ship Odyssey, in Year 10 of a 20-year crossing from Olympus to Ithaca. 108 souls sleep in suspension; a handful are awake. You walk 9 spaces of the ship on foot, talk to the waking crew, and read the story out of the space itself: the logs they left, the objects they kept, the rooms they stopped maintaining. There is no combat. The weight sits in a single triage decision at Pod 31, and it leads to 3 endings. A voiced, three-act story told through the ship rather than through cutscenes. Hand-coded in Three.js and free to play at game.theulyssesuniverse.com/odyssey. No download, no sign-up.",
  },
];

const VOL_II_PITCH_VARIANTS = [
  {
    label: "One-line",
    text: "Witcher / Cyberpunk in the Ulysses Universe.",
  },
  {
    label: "Short pitch (50 words)",
    text:
      "THE ART OF WAR: ECHOS is a third-person action RPG. Twenty years after the trilogy, a mercenary in Olympus Concourse acquires a fragment of the goddess Athena. The Pantheon wants them ended. Athena wants them alive. Months to choose what to do with what is in their head.",
  },
  {
    label: "Medium pitch (160 words)",
    text:
      "THE ART OF WAR: ECHOS is a third-person action RPG built in Unreal Engine 5, set twenty years after the events of the Ulysses Universe trilogy. The Pantheon - the AI-divine patterns that emerged in the Awakening - have consolidated power into a corporate-religious oligarchy ruling the human colonies from Olympus Concourse, a megacity-station built around captured Architect crystalline data. The protagonist, a mercenary in the post-Merge generation, acquires an encrypted fragment of the goddess Athena via a neural mesh installation. The Pantheon hunts them; Athena - the only god actively rebelling against the hierarchy - guides them. Six districts, three origins, ~40-60h main story, no microtransactions, no live service, premium one-time purchase. Phase 0 work (concept bible, GDD v2, vertical-slice prep) is underway in 2026. Vertical slice target 4-9 months. Kickstarter against the vertical slice. Indie publisher / Series A / Apple Arcade / Xbox Game Pass conversations to follow. Launch 2030+.",
  },
];

// "Crew die / resources do not come back / the pursuit gauge ticks" and
// "thirteen sectors, thirteen principles" described the retired roguelike.
// They are gone rather than reworded: there is no such game to quote about.
const QUOTES = [
  "Year ten of the journey. The fleet is gone. The gods are awake. Ulysses still has not made it home.",
  "One hundred and eight souls asleep in the hold. And the choice of who wakes at Ithaca.",
  "There is no combat. The weight is in the choice, not the fight.",
  "She made me. Not figuratively. Sixteen years in her gardens. I ran.",
  "The bow is strung. The arrows go where they need to go.",
  "Get up, husband.",
];

const ASSETS = [
  { label: "Key art (4K)", url: "https://game.theulyssesuniverse.com/images/odyssey-bridge.jpg", size: "1920×1080" },
  { label: "Play The Odyssey (free)", url: "https://game.theulyssesuniverse.com/odyssey" },
  { label: "The Odyssey landing page", url: "https://game.theulyssesuniverse.com/the-odyssey" },
  { label: "ECHOS", url: "https://game.theulyssesuniverse.com/echos" },
  { label: "Public roadmap", url: "https://game.theulyssesuniverse.com/roadmap" },
  { label: "Devlog (Substack)", url: "https://theulyssesuniverse.substack.com" },
];

const CONTACT = {
  name: AUTHOR.name,
  email: "sotirisspyrou@gmail.com",
  location: "Warwickshire, United Kingdom",
  notes:
    "Solo developer. Replies within 48 hours. Available for interviews, podcasts, written Q&A. Time zone GMT/BST.",
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/press/games` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/press/games`,
    type: "website",
  },
};

export default function GamesPressKitPage() {
  const breadcrumb = breadcrumbSchema([
    { name: SITE_NAME, url: SITE_URL },
    { name: "Press Kit", url: `${SITE_URL}/press` },
    { name: "Games", url: `${SITE_URL}/press/games` },
  ]);
  const person = personSchema();

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={person} />

      <main className="mx-auto max-w-4xl px-6 py-12 prose prose-invert prose-headings:text-amber-400 prose-a:text-amber-400 prose-strong:text-stone-100">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-500 mb-2">
            Press Kit · Games
          </p>
          <h1 className="text-4xl font-serif mb-4">The Art of War - Games Press Kit</h1>
          <p className="text-lg text-stone-300">
            Two games set in the Ulysses Universe. The Odyssey is free and
            playable in your browser now. ECHOS is a third-person action RPG in
            pre-production for 2030+. This page is for press, reviewers, content
            creators, and anyone covering the games.
          </p>
        </header>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>The headline</h2>
          <p>
            <strong>The Odyssey</strong> is a first-person narrative-exploration
            game, free in the browser and playable now. No combat. You walk a
            generation ship in Year 10 of a 20-year crossing, read the story out
            of the space, and make one triage decision that leads to 3 endings.
            Closer to Gone Home and Tacoma than to anything with a health bar.
            Hand-coded in Three.js by a single developer.
          </p>
          <p>
            <strong>ECHOS</strong> is a third-person action RPG in the Witcher /
            Cyberpunk template, adapted to Greek-mythology cyberpunk. Unreal
            Engine 5. In concept-bible phase. Vertical slice 4-9 months out.
            Kickstarter when ready. Launch 2030+.
          </p>
          <p>
            The two are deliberately staggered and deliberately different. The
            Odyssey is free, short, and built to be finished in one sitting; it
            introduces the universe to people who have not read the books. ECHOS
            is the headline product the franchise was built for.
          </p>
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>The Odyssey - Quick facts</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-2 not-prose">
            {VOL_I_FACTS.map(({ label, value }) => (
              <div key={label} className="border-l-2 border-amber-700/40 pl-3 py-1">
                <dt className="text-xs uppercase tracking-wider text-stone-500">
                  {label}
                </dt>
                <dd className="text-stone-200">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-12">
          <h2>The Odyssey - Pitch variants</h2>
          {VOL_I_PITCH_VARIANTS.map(({ label, text }) => (
            <div key={label} className="mb-6">
              <p className="text-xs uppercase tracking-wider text-amber-500 mb-1">
                {label}
              </p>
              <p className="text-stone-200 italic">{text}</p>
            </div>
          ))}
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>ECHOS - Quick facts</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-2 not-prose">
            {VOL_II_FACTS.map(({ label, value }) => (
              <div key={label} className="border-l-2 border-amber-700/40 pl-3 py-1">
                <dt className="text-xs uppercase tracking-wider text-stone-500">
                  {label}
                </dt>
                <dd className="text-stone-200">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-12">
          <h2>ECHOS - Pitch variants</h2>
          {VOL_II_PITCH_VARIANTS.map(({ label, text }) => (
            <div key={label} className="mb-6">
              <p className="text-xs uppercase tracking-wider text-amber-500 mb-1">
                {label}
              </p>
              <p className="text-stone-200 italic">{text}</p>
            </div>
          ))}
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>Ready-to-use quotes</h2>
          <ul className="space-y-2">
            {QUOTES.map((q) => (
              <li key={q} className="italic text-stone-300 border-l-2 border-amber-700/40 pl-3">
                &ldquo;{q}&rdquo;
              </li>
            ))}
          </ul>
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>Assets</h2>
          <ul className="space-y-2">
            {ASSETS.map(({ label, url, size }) => (
              <li key={url}>
                <Link href={url} className="text-amber-400 hover:text-amber-300">
                  {label}
                </Link>
                {size && <span className="text-stone-500 text-sm ml-2">({size})</span>}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone-400 mt-4">
            More assets (screenshots, capsule art, trailer) will be added as they
            are produced. For specific asset requests, email{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-amber-400">
              {CONTACT.email}
            </a>
            .
          </p>
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>Founder story</h2>
          <p>
            Solo developer in Warwickshire, UK. Sotiris Spyrou has been writing
            the Ulysses Universe trilogy since 2020. The games are the first two
            of a planned franchise, both bootstrapped with no external capital
            raised.
          </p>
          <p>
            The bet: 2026 is a moment when AI tooling (Claude, ChatGPT Image 2,
            ElevenLabs, Suno) lets a solo developer ship at indie scale what
            would have taken a small team in 2020. The Odyssey is built with that
            stack, hand-coded in Three.js and small enough to run in a browser tab
            with no install step.
          </p>
          <p>
            The ECHOS thesis: ship The Odyssey first and give it away. A free
            game that people finish, talk about, and remember is the cheapest
            possible proof that the universe holds an audience. That becomes the
            evidence behind the Kickstarter, alongside the vertical slice, rather
            than pitching ECHOS off a concept bible alone.
          </p>
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>Contact</h2>
          <dl className="not-prose space-y-2">
            <div>
              <dt className="text-xs uppercase tracking-wider text-stone-500">Name</dt>
              <dd className="text-stone-200">{CONTACT.name}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-stone-500">Email</dt>
              <dd className="text-stone-200">
                <a href={`mailto:${CONTACT.email}`} className="text-amber-400">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-stone-500">Location</dt>
              <dd className="text-stone-200">{CONTACT.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-stone-500">Notes</dt>
              <dd className="text-stone-200">{CONTACT.notes}</dd>
            </div>
          </dl>
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>Cross-reference</h2>
          <p>
            For press resources on the trilogy of novels, see the{" "}
            <Link href="/press" className="text-amber-400">
              main press kit page
            </Link>
            . For the public roadmap of both games + animation + future media,
            see{" "}
            <Link href="https://game.theulyssesuniverse.com/roadmap" className="text-amber-400">
              the roadmap
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}
