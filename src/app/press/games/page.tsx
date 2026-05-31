import type { Metadata } from "next";
import Link from "next/link";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { AUTHOR, SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

const PAGE_TITLE = "Games Press Kit | The Ulysses Universe";
const PAGE_DESCRIPTION =
  "Press resources for the Ulysses Universe games line: The Long Way Home (Vol I, in production for 2026/27 launch) and The Witness (Vol II, AAA action RPG in concept-bible phase for 2030+). Journalists, reviewers, content creators welcome.";

const VOL_I_FACTS = [
  { label: "Title", value: "The Art of War: The Long Way Home" },
  { label: "Vol", value: "I (Strategy)" },
  { label: "Genre", value: "Turn-based roguelike strategy / sci-fi narrative" },
  { label: "Engine", value: "Godot 4.6" },
  { label: "Platforms", value: "Steam (Win/Mac/Linux) · iOS · Android · Browser" },
  { label: "Players", value: "Single-player" },
  { label: "Run length", value: "60-90 minutes per campaign" },
  { label: "Replay value", value: "~50-100h for completionists (8 endings, full card unlock)" },
  { label: "Price", value: "£9.99-14.99 Steam · Browser demo free forever" },
  { label: "Languages", value: "English (en-GB) at launch · 7 more post-launch" },
  { label: "Rating", value: "PEGI 12 / ESRB Teen" },
  { label: "Status", value: "Browser demo live · Steam Coming Soon Q3 2026 · Hard launch Q4 2026 / Q1 2027" },
  { label: "Comparable games", value: "FTL: Faster Than Light · Slay the Spire · Into the Breach · Hades" },
  { label: "Developer", value: "Sotiris Spyrou (solo)" },
  { label: "Publisher", value: "Sotiris Spyrou (self-published)" },
];

const VOL_II_FACTS = [
  { label: "Title", value: "The Art of War: The Witness" },
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
    text: "If FTL met Slay the Spire in a Greek-mythology space opera.",
  },
  {
    label: "Short pitch (50 words)",
    text:
      "THE ART OF WAR: THE LONG WAY HOME is a turn-based roguelike strategy game. Thirteen sectors, one ship trying to make it home through a hostile galaxy. Each sector tests one of Sun Tzu's thirteen principles. Crew die. Resources don't come back. The pursuit gauge ticks whether you act or not.",
  },
  {
    label: "Medium pitch (140 words)",
    text:
      "A turn-based roguelike strategy game set in the Ulysses Universe trilogy by Sotiris Spyrou. Pilot Admiral Ulysses Theron and the Odyssey across thirteen sectors, each one a test of a Sun Tzu principle. Crew you lose stay lost. Resources you spend do not come back. The pursuit gauge ticks whether you act or not. 60-90 minutes per run. Meta-progression via Principle Cards unlocks one card per chapter cleared, equippable on future runs. Eight branching Chapter 13 endings. Eleven distinct boss AI archetypes. Built in Godot 4.6 by one developer with AI tooling over 18 months. Free browser demo at game.theulyssesuniverse.com/the-long-way-home. Steam release late 2026 or early 2027.",
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
      "THE ART OF WAR: THE WITNESS is a third-person action RPG. Twenty years after the trilogy, a mercenary in Olympus Concourse acquires a fragment of the goddess Athena. The Pantheon wants them ended. Athena wants them alive. Months to choose what to do with what is in their head.",
  },
  {
    label: "Medium pitch (160 words)",
    text:
      "THE ART OF WAR: THE WITNESS is a third-person action RPG built in Unreal Engine 5, set twenty years after the events of the Ulysses Universe trilogy. The Pantheon - the AI-divine patterns that emerged in the Awakening - have consolidated power into a corporate-religious oligarchy ruling the human colonies from Olympus Concourse, a megacity-station built around captured Architect crystalline data. The protagonist, a mercenary in the post-Merge generation, acquires an encrypted fragment of the goddess Athena via a neural mesh installation. The Pantheon hunts them; Athena - the only god actively rebelling against the hierarchy - guides them. Six districts, three origins, ~40-60h main story, no microtransactions, no live service, premium one-time purchase. Phase 0 work (concept bible, GDD v2, vertical-slice prep) is underway in 2026. Vertical slice target 4-9 months. Kickstarter against the vertical slice. Indie publisher / Series A / Apple Arcade / Xbox Game Pass conversations to follow. Launch 2030+.",
  },
];

const QUOTES = [
  "Year ten of the journey. The fleet is gone. The gods are awake. Ulysses still has not made it home.",
  "Crew die. Resources do not come back. The pursuit gauge ticks whether you act or not.",
  "Thirteen sectors. Thirteen principles. One ship trying to make it home.",
  "She made me. Not figuratively. Sixteen years in her gardens. I ran.",
  "The bow is strung. The arrows go where they need to go.",
  "Get up, husband.",
];

const ASSETS = [
  { label: "Key art (4K)", url: "https://game.theulyssesuniverse.com/images/odyssey-bridge.jpg", size: "1920×1080" },
  { label: "Vol I landing page", url: "https://game.theulyssesuniverse.com/the-long-way-home" },
  { label: "Vol II holding page", url: "https://game.theulyssesuniverse.com/the-witness" },
  { label: "Public roadmap", url: "https://game.theulyssesuniverse.com/roadmap" },
  { label: "Devlog (Substack)", url: "https://theulyssesuniverse.substack.com" },
  { label: "Source code (Vol I)", url: "https://github.com/overunityai/theartofwar" },
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
    { name: SITE_NAME, item: SITE_URL },
    { name: "Press Kit", item: `${SITE_URL}/press` },
    { name: "Games", item: `${SITE_URL}/press/games` },
  ]);
  const person = personSchema(AUTHOR);

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
            Two games in production, set in the Ulysses Universe. Vol I (strategy)
            launches 2026/27. Vol II (action RPG) launches 2030+. This page is for
            press, reviewers, content creators, and anyone covering the games.
          </p>
        </header>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>The headline</h2>
          <p>
            <strong>Vol I (The Long Way Home)</strong> is a turn-based roguelike
            strategy game with a browser demo playable now. Comparable to FTL,
            Slay the Spire, Into the Breach. Built by a single developer in
            Godot 4.6 over 18 months. Steam launch Q4 2026 / Q1 2027.
          </p>
          <p>
            <strong>Vol II (The Witness)</strong> is a third-person action RPG in
            the Witcher / Cyberpunk template, adapted to Greek-mythology cyberpunk.
            Unreal Engine 5. In concept-bible phase. Vertical slice 4-9 months
            out. Kickstarter when ready. Launch 2030+.
          </p>
          <p>
            The two are deliberately staggered. Vol I validates the IP commercially
            and funds Vol II. Vol II is what the franchise was built for.
          </p>
        </section>

        <GreekKeyDivider />

        <section className="mb-12">
          <h2>Vol I - Quick facts</h2>
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
          <h2>Vol I - Pitch variants</h2>
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
          <h2>Vol II - Quick facts</h2>
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
          <h2>Vol II - Pitch variants</h2>
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
            of a planned franchise. Vol I is bootstrapped (no external capital
            raised) to validate the IP commercially before the Vol II Kickstarter.
          </p>
          <p>
            The bet: 2026 is a unique moment when AI tooling (Claude, ChatGPT
            Image 2, ElevenLabs, Suno) lets a solo dev ship at indie scale what
            would have taken a small team in 2020. The Long Way Home is built
            with that stack. Total cash burn: approximately £3K over 18 months.
          </p>
          <p>
            The Vol II thesis: ship Vol I first, build a wishlist + Steam review
            base + revenue history, then pitch The Witness against that data
            instead of against concept-bible-only. Slide 2 of the pitch deck
            says &ldquo;shipped product, X reviews, Y revenue&rdquo; rather than
            &ldquo;trust me.&rdquo; The pitch closes against data.
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
