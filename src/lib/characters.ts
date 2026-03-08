import type { CharacterMeta } from "@/types";

export const CHARACTERS_DATA: CharacterMeta[] = [
  {
    slug: "ulysses",
    name: "Ulysses Theron",
    role: "Admiral of the Odyssey",
    description:
      "A man who blinded a god's son and ran. Ten years later, he's still running - through hostile space, failing systems, and the ghosts of every choice that brought him here. His cybernetic right eye sees possible futures. None of them show him home.",
    relationships: [
      "Penelope Theron (wife)",
      "Telemachus Theron (son)",
      "Athena (AI ally)",
      "Poseidon (enemy)",
    ],
    imagePath: "/images/characters/ulysses.webp",
    accentColor: "gold",
  },
  {
    slug: "telemachus",
    name: "Telemachus Theron",
    role: "The Son Who Feels Too Much",
    description:
      "Seventeen years old and cursed with empathy that isn't metaphorical. Telemachus feels the crew's pain, their fear, their fading hope. He barely remembers Ithaca. He's never met his mother. And the father he followed into exile might not be the hero everyone thinks.",
    relationships: [
      "Ulysses Theron (father)",
      "Penelope Theron (mother, never met)",
      "Echo (closest friend)",
    ],
    imagePath: "/images/characters/telemachus.webp",
    accentColor: "blue",
  },
  {
    slug: "thea-sato",
    name: "Thea Sato",
    role: "The Woman with No Past",
    description:
      "Pulled from a drifting escape pod with violet eyes and zero memory. Thea fights like someone trained for war but can't remember which one. The crew doesn't trust her. They're right not to. What she's forgotten is more dangerous than anything in the Void.",
    relationships: [
      "Ulysses Theron (captain)",
      "Telemachus Theron (complicated)",
      "Echo (cautious ally)",
    ],
    imagePath: "/images/characters/thea-sato.webp",
    accentColor: "purple",
  },
  {
    slug: "echo",
    name: "Echo",
    role: "AI Companion",
    description:
      "A bronze and blue robot who quotes human idioms she doesn't understand and cares about the crew more than her programming should allow. Echo is the heart of the Odyssey - loyal, literal, and surprisingly funny when the universe is falling apart.",
    relationships: [
      "Telemachus Theron (closest bond)",
      "Ulysses Theron (commander)",
      "Athena (distrusts)",
    ],
    imagePath: "/images/characters/echo.webp",
    accentColor: "blue",
  },
  {
    slug: "athena",
    name: "Athena",
    role: "The Goddess in the Machine",
    description:
      "A rogue AI from the Pantheon who speaks through the Odyssey's systems. Athena chose Ulysses - but her help always comes at a price. She sees patterns in chaos, whispers warnings in static, and plays a game whose rules she won't explain.",
    relationships: [
      "Ulysses Theron (chosen champion)",
      "The Pantheon (defector)",
      "Poseidon (rival)",
    ],
    imagePath: "/images/characters/athena.webp",
    accentColor: "gold",
  },
  {
    slug: "penelope",
    name: "Penelope Theron",
    role: "The Woman Who Didn't Wait",
    description:
      "Governor of Ithaca Station. Politician, strategist, and the most dangerous person in the system - not because she fights, but because she thinks three moves ahead. While 108 suitors circle her position, Penelope holds the line with intelligence, alliances, and sheer stubborn will.",
    relationships: [
      "Ulysses Theron (husband, missing 10 years)",
      "Telemachus Theron (son, missing 10 years)",
      "The Suitors (political rivals)",
    ],
    imagePath: "/images/characters/penelope.webp",
    accentColor: "blue",
  },
];

export function getCharacterBySlug(slug: string): CharacterMeta | undefined {
  return CHARACTERS_DATA.find((c) => c.slug === slug);
}

export const HOMEPAGE_CHARACTERS = CHARACTERS_DATA.filter((c) =>
  ["ulysses", "telemachus", "thea-sato", "echo"].includes(c.slug)
);
