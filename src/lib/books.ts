import type { BookMeta } from "@/types";

export const BOOKS_DATA: BookMeta[] = [
  {
    slug: "the-blinding",
    title: "The Blinding",
    number: 1,
    hook: "He blinded a god to bring his crew home. The gods do not forget.",
    description:
      "Ten years since the war, Admiral Ulysses Theron is still running.\n\nHe put a virus through the heart of the Pantheon and blinded the Eye of Zeus. He wounded the thing Poseidon calls a son. For that, his ship is cursed and the whole dark between the stars has turned against him.\n\nIn the hold, 108 of his crew sleep frozen in data suspension, held between life and death by divine order. On the bridge he has a teenage son who feels too much, an engineered runaway named Thea who will not be owned, and a machine called Echo that learned hope and cannot give it back. Somewhere in the ship's own systems, a hidden god keeps her own counsel.\n\nAhead lies Polyphemus Station, and the wound Ulysses cut into the universe ten years ago. It has been waiting for him.\n\nHe wants one thing. To get them all home.\n\nTold from the bridge of a warship that is failing one system at a time, it is a story about a father, a son and the 108 people they refuse to leave behind.",
    wordCount: 67208,
    chapters: 35,
    accentColor: "gold",
    characterImage: "/images/characters/ulysses-photo-portrait.webp",
    cover: "/images/books/the-blinding-cover.webp",
    buyLinks: {
      amazonUS: "https://www.amazon.com/gp/product/B0GNGQFR6C",
      amazonUK: "https://www.amazon.co.uk/dp/B0GNGQFR6C",
    },
    pullQuote: "You see more clearly. That's both the gift and the price. Some things are easier not to see.",
    amazonAsin: "B0GNGQFR6C",
    isbnPaperback: "9798197763075",
    isbnHardback: "9798197782526",
    pageCount: 226,
    datePublished: "2026-05-01",
    wikidataUrl: "https://www.wikidata.org/wiki/Q139861109",
    // goodreadsUrl: undefined, // populate once Goodreads Author Profile is claimed
  },
  {
    slug: "the-void-between",
    title: "The Void Between",
    number: 2,
    hook: "The gods have run him off every safe road. All that is left is the dark, and the things that live in it.",
    description:
      "The Odyssey survived Polyphemus. It will not survive what Polyphemus's death called down.\n\nThe only way home runs through the Underworld, where the dead remember and every answer has a price. The prophet Tiresias knows the road. The shade of Ulysses's own mother is waiting on it. Beyond them are the Sirens, who strip each of the crew down to the truth, a casino station called LETHE where the house takes your wish to go home, and Scylla, who takes six.\n\nThen comes Calypso, who offers him the one thing he never asked for. Rest. He stays ten years.\n\nFar away, on an Ithaca under occupation, his wife holds a station with nothing but nerve, a loom and a promise she has not finished keeping. Thea, ten years among strangers, has to decide at last what she is. And Echo cracks open a locked file that was never meant to be read. What waits inside is 12,000 years old.\n\nSome crossings take everything but the wanting.\n\nIt is the darkest book of the three, and the one where the crew becomes a family.",
    wordCount: 61589,
    chapters: 37,
    accentColor: "purple",
    characterImage: "/images/characters/thea-photo-portrait.webp",
    cover: "/images/books/the-void-between-cover.webp",
    buyLinks: {
      amazonUS: "https://www.amazon.com/gp/product/B0GNG5KLKC",
      amazonUK: "https://www.amazon.co.uk/dp/B0GNG5KLKC",
    },
    pullQuote: "It feels familiar. Like coming home to a place I've never been.",
    amazonAsin: "B0GNG5KLKC",
    isbnPaperback: "9798197785985",
    isbnHardback: "9798197788122",
    pageCount: 226,
    datePublished: "2026-08-01",
    wikidataUrl: "https://www.wikidata.org/wiki/Q139861547",
  },
  {
    slug: "the-return",
    title: "The Return",
    number: 3,
    hook: "Twenty years gone. Now Ulysses takes his home back.",
    description:
      "A stranger walks into Ithaca Station, and no one knows him. Not the 108 suitors who have carved up his house. Not the men running something far worse than greed through his docks. Not even, at first, the wife who has outlasted them all.\n\nPenelope stopped being a prize a long time ago. She has a loom, a lie, a quiet resistance, and a deadline. When the stranger arrives she understands two things in the same breath: who he is, and that saying it out loud could get them both killed.\n\nHe has three days. He has a son of 27 who grew up in the dark, an old dog who waited, and a bow that no man on the station can string. In the hold of the Odyssey, the sleepers begin to wake. And what Echo found in the locked file will force every one of them to ask what the gods have really been, all along.\n\nThe voyage is over. The war for home is about to begin.\n\nThis is the homecoming Homer wrote, with the suitors, the bow and the old dog at the gate, and a Penelope who has been fighting her own war all along.",
    wordCount: 67364,
    chapters: 38,
    accentColor: "red",
    characterImage: "/images/characters/penelope-photo-portrait.webp",
    cover: "/images/books/the-return-cover.webp",
    buyLinks: {
      amazonUS: "https://www.amazon.com/gp/product/B0GNGQCS91",
      amazonUK: "https://www.amazon.co.uk/dp/B0GNGQCS91",
    },
    pullQuote: "The gods don't care about our intentions. Only our actions.",
    amazonAsin: "B0GNGQCS91",
    isbnPaperback: "9798197789655",
    isbnHardback: "9798197791306",
    pageCount: 234,
    datePublished: "2026-11-01",
    wikidataUrl: "https://www.wikidata.org/wiki/Q139862200",
  },
];

export function getBookBySlug(slug: string): BookMeta | undefined {
  return BOOKS_DATA.find((book) => book.slug === slug);
}
