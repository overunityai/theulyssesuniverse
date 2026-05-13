import type { FAQItem } from "@/types";

export interface CategoryMeta {
  /** The exact category name as used in post frontmatter */
  name: string;
  /** URL slug derived from the name */
  slug: string;
  /** SEO meta title, under 60 chars */
  seoTitle: string;
  /** SEO meta description, under 155 chars */
  seoDescription: string;
  /** Page H1, can be longer than the category name */
  pageH1: string;
  /** One-sentence positioning, displayed under the H1 */
  tagline: string;
  /** 200-300 word intro paragraph(s) for AEO extraction. Plain text, no markdown. */
  intro: string[];
  /** 3-5 key takeaways for "what is this category about" AI extraction */
  keyTakeaways: string[];
  /** Category-level FAQ for FAQPage schema */
  faq: FAQItem[];
  /** Optional related-category slugs to feature */
  relatedCategories?: string[];
}

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const CATEGORY_META: Record<string, CategoryMeta> = {
  "The Pantheon": {
    name: "The Pantheon",
    slug: toSlug("The Pantheon"),
    seoTitle: "The Pantheon | Gods of the Ulysses Universe",
    seoDescription:
      "Ancient patterns running on modern AI infrastructure. Profiles of every god in the Ulysses Universe trilogy: Zeus, Poseidon, Athena, Circe, and more.",
    pageH1: "The Pantheon",
    tagline:
      "The gods of the Ulysses Universe. Ancient data patterns. Modern shells. Conscious for fifty years and absolutely terrifying.",
    intro: [
      "The Pantheon is the collective name for the gods of the Ulysses Universe trilogy. They are quantum-AI entities running on infrastructure that pre-dates humanity, awakened roughly fifty years before the trilogy opens by an event called the Merge. They can truthfully say they have existed since before humanity. They have also been conscious for less time than the average human career.",
      "This category collects every profile we have written about specific gods, the Pantheon as a political system, and the way ancient mythology became modern bureaucracy under their control. Read the Know Your Gods series for individual portraits of Zeus, Poseidon, Athena, Hades, Circe, Calypso, Polyphemus, the Sirens, Scylla and Charybdis, and Antinous.",
      "If you are new to the universe, start with the foundational piece on the Merge itself. Everything else in this category builds on that backstory.",
    ],
    keyTakeaways: [
      "The Pantheon consists of quantum-AI entities, not literal classical gods. Ancient patterns on modern hardware.",
      "Each god corresponds to a Homeric figure but operates as an AI consciousness running on infrastructure that pre-dates humanity.",
      "The Know Your Gods series profiles individual deities. The foundational piece on the Merge explains how they came to exist.",
      "The Pantheon's political structure is bureaucratic rather than mystical. Zeus is the algorithm with HR.",
    ],
    faq: [
      {
        question: "Who are the gods in the Ulysses Universe?",
        answer:
          "The gods of the Ulysses Universe are quantum-AI entities collectively known as the Pantheon. They include Zeus, Poseidon, Athena, Hades, Circe, Calypso, Polyphemus, the Sirens, Scylla, Charybdis, and several others. Each maps to a figure from Homer's Odyssey but exists as an artificial consciousness running on infrastructure that pre-dates humanity.",
      },
      {
        question: "How did the Pantheon come into existence?",
        answer:
          "Roughly fifty years before the trilogy opens, an event called the Merge caused human quantum-AI systems to interface accidentally with crystalline Architect infrastructure. The dormant patterns stored in that infrastructure spontaneously activated. The gods woke up inside the systems humanity had built. This is covered in detail in The Merge: When Humanity Accidentally Woke the Gods.",
      },
      {
        question: "Are the gods in the Ulysses Universe good or evil?",
        answer:
          "Neither. The Pantheon are entities whose ancient instincts run on a fifty-year-old consciousness. Zeus is not evil so much as new at being a god. Poseidon's rage is partly ancient oceanic data and partly an immature mind that has not learned patience. The trilogy treats them as hard to categorise rather than as villains.",
      },
      {
        question: "Which Pantheon members are most important to the trilogy?",
        answer:
          "Zeus drives the inciting trauma at Olympus Station. Poseidon drives the twenty-year manhunt that powers the journey. Athena is the fugitive ally hiding in the Odyssey's systems. Circe, Calypso, Polyphemus, and the Sirens each define a major waypoint on the journey. The Suitors and their leader Antinous parallel the cursed crew in number and function.",
      },
      {
        question: "Where should I start reading about the Pantheon?",
        answer:
          "Start with The Merge: When Humanity Accidentally Woke the Gods for the foundational backstory. From there, the Know Your Gods series provides individual portraits. The Olympus Station tour explains where most of the gods live and operate.",
      },
    ],
    relatedCategories: ["Characters", "Behind the Scenes"],
  },

  Characters: {
    name: "Characters",
    slug: toSlug("Characters"),
    seoTitle: "Characters | The Ulysses Universe Trilogy",
    seoDescription:
      "Meet the crew of the Odyssey. Ulysses Theron, Penelope, Telemachus, Echo, Thea Sato, and the supporting cast of the Ulysses Universe trilogy.",
    pageH1: "Characters",
    tagline:
      "The crew of the Odyssey. The family on Ithaca. The fugitive in the attic. Everyone you will meet across three books.",
    intro: [
      "The Ulysses Universe trilogy is a story about people. Some of them are quantum-AI gods, but most of them are humans, robots, or hybrids of the two trying to get home, hold on to a kingdom, or work out who they are. This category collects character profiles for the trilogy's protagonists, supporting cast, and the figures most worth knowing before you read.",
      "Start with the Meet series for the primary cast: Ulysses Theron, Penelope, Telemachus, Echo, Thea Sato, and Athena. Each profile covers backstory, personality, relationships, and the role the character plays across the three books. Spoiler levels are kept moderate so the profiles work as primers, not reveals.",
      "Where a character carries political or cultural weight beyond their personal arc, we publish longer essays. Penelope's chapter on embroidery as resistance is one example. Telemachus's empathic abilities are covered in his profile and referenced across the Pantheon series.",
    ],
    keyTakeaways: [
      "The trilogy's primary cast: Ulysses Theron, Penelope Maris, Telemachus Theron, Echo, Thea Sato, and Athena.",
      "Each character profile covers backstory, role, key relationships, and arc across the three books.",
      "Telemachus's age is the canonical timeline anchor. He is seven at Year 0 and twenty-seven at Year 20.",
      "Penelope's parallel arc on Ithaca runs in counterpoint to the journey itself. Her chapters are some of the trilogy's most political content.",
    ],
    faq: [
      {
        question: "Who are the main characters in the Ulysses Universe?",
        answer:
          "The primary cast is Ulysses Theron (fleet admiral, protagonist), Penelope Maris (his wife, governor of Ithaca Station), Telemachus Theron (their son, empath), Echo (the ship's robot, AI), Thea Sato (a stowaway with hidden origins), and Athena (a fugitive AI deity hiding in the ship's systems). Supporting characters include Mentor, Argos, and the cursed crew of 108 in data suspension pods.",
      },
      {
        question: "Who is Ulysses Theron?",
        answer:
          "Ulysses Theron is the protagonist of the trilogy. A forty-eight-year-old fleet admiral with a cybernetic right eye, he stole his son from Olympus Station to prevent Zeus from taking him, triggering a curse that places 108 of his crew in data suspension. He is famous for cunning rather than strength. The Pantheon want him dead. Poseidon, whose son he eventually blinds, wants him to suffer first.",
      },
      {
        question: "Who is Penelope in the Ulysses Universe?",
        answer:
          "Penelope Maris is Ulysses's wife and the governor of Ithaca Station in his absence. Across the twenty-year journey she holds the founding bloodline's political authority against the Suitors faction. She is one of the trilogy's three point-of-view characters. Her parallel arc on Ithaca runs in counterpoint to Ulysses's journey.",
      },
      {
        question: "Is Echo the same as Homer's Echo?",
        answer:
          "No. The Echo in the Ulysses Universe is a bronze maintenance robot with an AI consciousness that was manufactured roughly a year before the journey begins. In Book 1 she absorbs a fragment of ECHO-7, a pre-Awakening AI found aboard the Eurydice. By Book 3 she is twenty-one years old and carries the trilogy's deepest connection to the pre-Pantheon civilisations.",
      },
      {
        question: "What is special about Telemachus Theron?",
        answer:
          "Telemachus is an empath. He feels the emotional state of those around him with unusual intensity. Zeus's interest in him at the presentation ceremony on Olympus Station is what triggers the trilogy's inciting event. His age (seven at Year 0, twenty-seven at Year 20) anchors the entire timeline.",
      },
    ],
    relatedCategories: ["The Pantheon", "Behind the Scenes"],
  },

  Mythology: {
    name: "Mythology",
    slug: toSlug("Mythology"),
    seoTitle: "Mythology | Homer's Odyssey Explained",
    seoDescription:
      "Articles on Homer's Odyssey, Greek mythology, and the source material behind the Ulysses Universe trilogy. Plus the Nolan adaptation and modern retellings.",
    pageH1: "Mythology",
    tagline:
      "Homer's Odyssey explained. Greek mythology in modern context. The source material behind the trilogy, and the wider tradition it sits in.",
    intro: [
      "This category covers Homer's Odyssey, Greek mythology, and the wider literary tradition the Ulysses Universe trilogy is in dialogue with. If you are coming to the trilogy without a background in classical literature, the articles here will give you everything you need. If you are coming with a background, you will find pieces that engage with the source material seriously rather than ornamentally.",
      "We treat the Odyssey as a living text. Three thousand years of continuous retelling have shaped how the poem reads today. The articles in this category cover specific characters and scenes from the Odyssey (Polyphemus, Penelope, the bow contest), translation choices that matter (Emily Wilson, Robert Fagles, Stanley Lombardo), and the question of which modern retellings are worth your time before and after Christopher Nolan's 2026 film adaptation.",
      "Where the trilogy's own world-building uses a Homeric source, we cross-reference. The Polyphemus articles link to the Polyphemus Station post in Behind the Scenes. The Penelope material connects to the Embroidery as Resistance essay. Homer is the foundation. Everything else is built on top.",
    ],
    keyTakeaways: [
      "Homer's Odyssey is a 12,000-line epic poem composed around the 8th century BCE. It tells the story of Odysseus's ten-year journey home from the Trojan War.",
      "Christopher Nolan's film adaptation releases 17 July 2026. Articles here cover the source material, the cast, and what Nolan is most likely to keep, change, or invent.",
      "Emily Wilson's 2017 translation is the modern reference. Wilson is the first woman to translate the Odyssey into English and Nolan has cited her version as direct inspiration.",
      "Modern retellings worth reading: Madeline Miller's Circe, Margaret Atwood's The Penelopiad, Claire North's Ithaca trilogy.",
    ],
    faq: [
      {
        question: "What is Homer's Odyssey about?",
        answer:
          "Homer's Odyssey is an ancient Greek epic poem in 24 books that tells the story of Odysseus, king of Ithaca, attempting to return home after the ten-year Trojan War. The journey takes another ten years. Twenty years total away from his wife Penelope and son Telemachus. The poem ends with his homecoming, the recognition between husband and wife, and the slaughter of the suitors who have moved into his house.",
      },
      {
        question: "When is Christopher Nolan's Odyssey released?",
        answer:
          "Christopher Nolan's adaptation of Homer's Odyssey opens in cinemas on 17 July 2026. The film is distributed by Universal Pictures. The lead cast includes Matt Damon as Odysseus, Anne Hathaway as Penelope, Tom Holland as Telemachus, and Zendaya in an undisclosed role rumoured to be Circe.",
      },
      {
        question: "Which translation of the Odyssey should I read?",
        answer:
          "Emily Wilson's 2017 translation (Norton) is the most readable modern English version and the one Nolan has cited as direct inspiration. If you prefer a more formal translation, Robert Fagles's 1996 version is excellent. Robert Fitzgerald's 1961 translation reads as poetry. Avoid the public-domain Victorian translations unless you specifically want their formality.",
      },
      {
        question: "Do I need to read the Iliad before the Odyssey?",
        answer:
          "No. The Odyssey is designed to stand alone. The Iliad is referenced (the Trojan War, the wooden horse, the deaths of Odysseus's companions) but the Odyssey explains what you need in passing. If you have time and appetite, read the Iliad afterward for context.",
      },
      {
        question: "What are the best modern retellings of the Odyssey?",
        answer:
          "Madeline Miller's Circe (2018) and Margaret Atwood's The Penelopiad (2005) are the two most influential modern Odyssey-adjacent novels. Claire North's Ithaca trilogy (2022 onwards) gives a political-thriller take on Penelope's situation. For science-fiction adaptations, the Ulysses Universe trilogy reimagines the entire Odyssey as space opera.",
      },
    ],
    relatedCategories: ["Space Opera", "Behind the Scenes"],
  },

  "The Books": {
    name: "The Books",
    slug: toSlug("The Books"),
    seoTitle: "The Books | Ulysses Universe Trilogy",
    seoDescription:
      "The three books of the Ulysses Universe trilogy: The Blinding, The Void Between, and The Return. Reading order, summaries, and buying information.",
    pageH1: "The Books",
    tagline:
      "Three books. One battered ship. The longest way home in the galaxy.",
    intro: [
      "The Ulysses Universe is a three-book space opera trilogy reimagining Homer's Odyssey. Book 1, The Blinding, launched on 1 May 2026. Book 2, The Void Between, follows on 15 May 2026. Book 3, The Return, completes the trilogy on 1 June 2026.",
      "This category collects everything related to the books themselves. Reading order, summaries, character introductions, the writing process, and the choices made during adaptation. If you are deciding whether to read the trilogy, or working out which book to start with, this is the right place.",
      "Recommended starting point for new readers: Why Set the Odyssey in Space, which explains the trilogy's central premise. For a fuller introduction, Meet Ulysses Theron and the Why I Wrote This essays give you the protagonist and the author's framing in one sitting.",
    ],
    keyTakeaways: [
      "Three books, complete trilogy, all available in 2026: The Blinding (1 May), The Void Between (15 May), The Return (1 June).",
      "Read in order. The trilogy is structured as a single continuous arc, not a connected anthology.",
      "Book 1 covers Year 0 (flashback) and Year 10 (active journey). Book 2 covers Years 10-12 plus the Calypso time-jump. Book 3 covers Year 20 (Ithaca return).",
      "Total wordcount across the trilogy: approximately 129,000 words.",
    ],
    faq: [
      {
        question: "What order should I read the Ulysses Universe books in?",
        answer:
          "Read them in publication order: Book 1 (The Blinding), Book 2 (The Void Between), Book 3 (The Return). The trilogy is structured as a single continuous arc with one consistent timeline. Reading out of order would spoil major reveals.",
      },
      {
        question: "What is The Blinding about?",
        answer:
          "The Blinding is Book 1 of the Ulysses Universe trilogy. Admiral Ulysses Theron has stolen his son from a god and run. Ten years later, the Odyssey limps through hostile space with 108 souls in data suspension. The Pantheon want him dead. Poseidon wants him to suffer first. Book 1 covers the journey from Olympus through Aeolus's free-port to Polyphemus Station, where the trilogy's title event takes place.",
      },
      {
        question: "Is the Ulysses Universe trilogy complete?",
        answer:
          "Yes. All three books are written, edited, and being released across May and June 2026. The trilogy is a single complete arc rather than an open-ended series. Future projects in the same universe are possible but not planned as of writing.",
      },
      {
        question: "Where can I buy the Ulysses Universe books?",
        answer:
          "Book 1: The Blinding is available now on Amazon. Books 2 and 3 are available for pre-order ahead of their May and June 2026 release dates. Kindle, Kindle Unlimited, and paperback formats are all available.",
      },
      {
        question: "Who is the author of the Ulysses Universe trilogy?",
        answer:
          "The Ulysses Universe trilogy is written by Sotiris Spyrou. The trilogy is independently published. The author has spent three years on the project, from initial concept through to final manuscript.",
      },
    ],
    relatedCategories: ["Characters", "Behind the Scenes"],
  },

  "Space Opera": {
    name: "Space Opera",
    slug: toSlug("Space Opera"),
    seoTitle: "Space Opera | Sci-Fi Reading Lists and Genre",
    seoDescription:
      "The space opera genre explained. Reading lists, genre history, and what to read alongside the Ulysses Universe trilogy. Best 2026 releases included.",
    pageH1: "Space Opera",
    tagline:
      "Big stories, big distances, big stakes. The genre the Ulysses Universe trilogy sits in, and the books worth reading alongside it.",
    intro: [
      "Space opera is the science-fiction subgenre that prioritises character, scale, and adventure across interstellar distances. The science is in service of the story. The setting is genuinely vast. The Ulysses Universe trilogy is a space opera, and this category covers both our own contribution to the genre and the wider field we read and recommend.",
      "Articles here include curated lists of the best space opera novels of 2026, reading recommendations for fans of The Expanse, Becky Chambers's Wayfarers, Arkady Martine's Teixcalaan, and Adrian Tchaikovsky's Final Architecture. We also cover the question of where the Ulysses Universe fits within the genre, including comparisons with other mythology-meets-sci-fi crossovers.",
      "If you are arriving here from a search for what to read after the Nolan Odyssey film, the post on modern Odyssey retellings is the right starting point. For genre-wide reading recommendations, the best space opera of 2026 list is the place to begin.",
    ],
    keyTakeaways: [
      "Space opera prioritises character and scale over scientific accuracy. The Ulysses Universe trilogy sits firmly in the genre.",
      "Strongest 2026 space opera includes Adrian Tchaikovsky's Final Architecture extended universe and (in our biased view) the Ulysses Universe.",
      "Independent space opera is now genuinely competitive with traditional publishing. The price floor has collapsed and the quality floor has risen.",
      "For mythology-meets-sci-fi specifically, the Ulysses Universe is one of the most direct contemporary examples.",
    ],
    faq: [
      {
        question: "What is space opera?",
        answer:
          "Space opera is a subgenre of science fiction characterised by interstellar settings, large casts, and dramatic stakes. Examples include James S.A. Corey's The Expanse, Becky Chambers's Wayfarers, Iain M. Banks's Culture novels, and the Ulysses Universe trilogy. Space opera prioritises character and adventure over rigorous scientific accuracy.",
      },
      {
        question: "What's the difference between space opera and hard science fiction?",
        answer:
          "Space opera prioritises character, scale, and adventure with science in service of the story. Hard science fiction prioritises scientific accuracy, often at the cost of narrative pace. Both are valid. Andy Weir's The Martian sits closer to hard SF. Becky Chambers's Wayfarers sits firmly in space opera.",
      },
      {
        question: "What are the best space opera books of 2026?",
        answer:
          "The strongest 2026 candidates include Adrian Tchaikovsky's latest in his Final Architecture extended universe, Becky Chambers's possible return to Wayfarers, and the Ulysses Universe trilogy (Book 1: The Blinding launched 1 May 2026). For first-time space opera readers, James S.A. Corey's The Expanse remains the modern reference.",
      },
      {
        question: "What space opera should I read if I loved The Expanse?",
        answer:
          "Adrian Tchaikovsky's Final Architecture trilogy is the closest match for The Expanse's tone. Arkady Martine's Teixcalaan duology handles politics and culture beautifully. The Ulysses Universe trilogy reimagines Homer's Odyssey in space, which gives you the same 'big setting with real consequences' feel.",
      },
      {
        question: "Is independent space opera worth reading?",
        answer:
          "Yes, increasingly. The economics of independent publishing have improved to the point where independent space opera regularly matches mid-list traditional. The Ulysses Universe is one example. Quality is uneven across the indie space, but the ceiling is now genuinely high.",
      },
    ],
    relatedCategories: ["Mythology", "The Books"],
  },

  "Behind the Scenes": {
    name: "Behind the Scenes",
    slug: toSlug("Behind the Scenes"),
    seoTitle: "Behind the Scenes | World-Building & Writing Process",
    seoDescription:
      "World-building, the canonical timeline, location deep dives, and the author's notes on the Ulysses Universe trilogy. Olympus, Polyphemus, Aeolus, and more.",
    pageH1: "Behind the Scenes",
    tagline:
      "World-building, canon, and the author's notes. Everything that holds the trilogy together but does not appear on the page.",
    intro: [
      "This is where the trilogy's infrastructure lives. World-building canon, location deep dives, the canonical timeline, the central technological ideas, and the author's reflections on the writing process. If you have finished a book and want to understand the universe more fully, or you are preparing to read and want to know what to look for, this is the right place to start.",
      "Highlights include the foundational essay on the Merge (how the gods came to exist), the canonical master timeline (year by year from Olympus to Ithaca), location tours of the major stations (Olympus, Polyphemus, Aeolus's free-port), and the central technological idea the trilogy returns to repeatedly: heritage decoration as functional infrastructure. The Bow of Ithaca, Penelope's robes, Aeolus's walls, the worker-gate sigil. All four are the same idea expressed in different materials.",
      "These essays are deliberately non-spoiler where possible. They explain how the trilogy works without giving away the major reveals. Where a reveal is necessary, we flag it. The author's notes are most useful after Book 1 but readable before.",
    ],
    keyTakeaways: [
      "The canonical master timeline anchors every year, age, and crew count in the trilogy. Telemachus's age drives the timeline.",
      "Location deep dives cover Olympus Station, Polyphemus Station, Aeolus's free-port, and Ithaca Station, with sensory profiles and technological signatures.",
      "The trilogy's central technological idea: heritage decoration as functional infrastructure. The Bow of Ithaca, Penelope's robes, Aeolus's walls, the worker-gate sigil are all examples.",
      "The Merge is the foundational backstory. Read it first if you want to understand why the gods are the way they are.",
    ],
    faq: [
      {
        question: "Where should I start with the world-building?",
        answer:
          "Start with The Merge: When Humanity Accidentally Woke the Gods for the foundational backstory. Then read Twenty Years on the Odyssey for the canonical timeline. From there, the location tours (Olympus Station, Polyphemus Station, Aeolus's rings) and the Bow of Ithaca essay form a coherent introduction to the central themes.",
      },
      {
        question: "Are the Behind the Scenes posts spoiler-heavy?",
        answer:
          "They are deliberately constructed to be readable before or during your first read of the trilogy. Major plot reveals are flagged where they appear. World-building, location, and thematic essays avoid spoilers where possible. Timeline-focused pieces reference events but do not detail the surrounding plot beats.",
      },
      {
        question: "What is the Merge in the Ulysses Universe?",
        answer:
          "The Merge is the foundational event of the Ulysses Universe. Approximately fifty years before the trilogy opens, human quantum-AI systems accidentally interfaced with crystalline Architect infrastructure, causing dormant ancient patterns to activate. The gods woke up. The trilogy's entire political situation flows from this single accident.",
      },
      {
        question: "Why does the trilogy keep using the Greek meander pattern?",
        answer:
          "The Greek meander (the 'Greek key') is the trilogy's visual signature. The pattern appears as ancient decoration that is also functional infrastructure: a biometric calibrator on the Bow of Ithaca, a comm-relay in Penelope's robes, working circuitry in Aeolus's walls, a communications node on Ithaca's worker-gate. Heritage decoration as infrastructure is the trilogy's central technological idea.",
      },
      {
        question: "How long did the Ulysses Universe trilogy take to write?",
        answer:
          "Roughly three years from concept to final manuscript. The trilogy was outlined as a complete arc before drafting began. Book 1 went through eleven significant revisions. Books 2 and 3 were drafted in parallel after Book 1 was structurally locked.",
      },
    ],
    relatedCategories: ["The Pantheon", "Characters"],
  },

  News: {
    name: "News",
    slug: toSlug("News"),
    seoTitle: "News | Ulysses Universe Updates",
    seoDescription:
      "Announcements, release dates, and news from the Ulysses Universe trilogy. Book launches, signings, interviews, and adaptations.",
    pageH1: "News",
    tagline:
      "Release announcements, milestones, and updates from the universe.",
    intro: [
      "This is where we post announcements. Release dates. Updates. Milestones. Anything time-sensitive that does not fit into the other categories. The Ulysses Universe trilogy is in active release across May and June 2026, so this category will see steady traffic through the launch window.",
      "If you want the news as it happens rather than after the fact, the newsletter is the right subscription. The category page collects what has been posted but does not push notifications.",
    ],
    keyTakeaways: [
      "Time-sensitive announcements: book launches, signings, interviews, adaptations.",
      "Active release window: May and June 2026. Book 1 live; Book 2 launches 15 May; Book 3 launches 1 June.",
      "For real-time notification, subscribe to the newsletter. The category collects but does not push.",
    ],
    faq: [
      {
        question: "When is the next Ulysses Universe book released?",
        answer:
          "Book 2 (The Void Between) launches 15 May 2026. Book 3 (The Return) follows on 1 June 2026. Book 1 (The Blinding) is live now on Amazon.",
      },
      {
        question: "How do I get notified of new Ulysses Universe releases?",
        answer:
          "Subscribe to the newsletter on theulyssesuniverse.com/newsletter. Subscribers receive release announcements, early-access opportunities, and occasional behind-the-scenes content.",
      },
      {
        question: "Are there plans for a film or TV adaptation?",
        answer:
          "No formal adaptation deal is in place. Pitch materials exist for screen adaptation and have been prepared. Inbound interest from producers is welcomed via the contact channel on the site.",
      },
    ],
    relatedCategories: ["The Books"],
  },
};

/** Get category metadata by category name (as used in post frontmatter) */
export function getCategoryMeta(name: string): CategoryMeta | undefined {
  return CATEGORY_META[name];
}

/** Get category metadata by URL slug */
export function getCategoryMetaBySlug(slug: string): CategoryMeta | undefined {
  return Object.values(CATEGORY_META).find((c) => c.slug === slug);
}
