import type { BookMeta } from "@/types";

export const BOOKS_DATA: BookMeta[] = [
  {
    slug: "the-blinding",
    title: "The Blinding",
    number: 1,
    hook: "To save his son, Ulysses blinded a god. Now the entire pantheon wants him dead.",
    description:
      "Admiral Ulysses Theron stole his son from a god and ran. Ten years later, the Odyssey limps through hostile space - hull failing, supplies gone, 108 souls frozen in data suspension. The gods of the Pantheon want him dead. Poseidon, whose son he blinded, wants him to suffer first.\n\nHis crew: a seventeen-year-old son who feels everyone's pain. A bronze robot who quotes human idioms she doesn't understand. A woman pulled from an escape pod with violet eyes and no past. And Athena - a rogue AI goddess whispering through his ship's systems, offering help that always comes with a price.\n\nTo get home to Ithaca Station - and to Penelope, the wife holding their world together against an army of political rivals - Ulysses will have to outrun gods, outwit a prison AI that hasn't had visitors in 47 years, and survive a void that breaks ships and minds alike.",
    wordCount: 44916,
    chapters: 28,
    accentColor: "gold",
    characterImage: "/images/characters/ulysses-photo-portrait.webp",
    buyLinks: {
      amazonUS: "https://www.amazon.com/gp/product/B0GNGQFR6C",
      amazonUK: "https://www.amazon.co.uk/dp/B0GNGQFR6C",
    },
    pullQuote: "You'll reach home. You'll wish you hadn't.",
  },
  {
    slug: "the-void-between",
    title: "The Void Between",
    number: 2,
    hook: "The deeper they travel, the more the Void takes.",
    description:
      "The gods aren't finished with Ulysses Theron. Ithaca is still years away. The crew is fractured. And in the spaces between stars, something ancient is stirring - something that makes the Pantheon's gods look like children playing with fire.\n\nWhile Ulysses navigates Circe's domain, the Siren fields, and a six-headed nightmare called Scylla, his wife Penelope fights a different war. On Ithaca Station, 108 suitors circle her position like sharks, and her alliances are running out faster than her patience.",
    wordCount: 39632,
    chapters: 30,
    accentColor: "purple",
    characterImage: "/images/characters/thea-photo-portrait.webp",
    buyLinks: {
      amazonUS: "https://www.amazon.com/gp/product/B0GNG5KLKC",
      amazonUK: "https://www.amazon.co.uk/dp/B0GNG5KLKC",
    },
    pullQuote: "In the Void, your memories are the first thing to go. Your name is the last.",
  },
  {
    slug: "the-return",
    title: "The Return",
    number: 3,
    hook: "Coming home was supposed to end the war. It started a new one.",
    description:
      "Twenty years. That's how long Penelope waited. Ulysses is finally coming home. But Ithaca Station has changed. The suitors control the docks. The gods are at war with each other. And the curse Calypso whispered - \"You'll reach home. You'll wish you hadn't\" - is about to come true.",
    wordCount: 44572,
    chapters: 32,
    accentColor: "red",
    characterImage: "/images/characters/penelope-photo-portrait.webp",
    buyLinks: {
      amazonUS: "https://www.amazon.com/gp/product/B0GNGQCS91",
      amazonUK: "https://www.amazon.co.uk/dp/B0GNGQCS91",
    },
    pullQuote: "Home isn't where you left it. It's what you build from the wreckage.",
  },
];

export function getBookBySlug(slug: string): BookMeta | undefined {
  return BOOKS_DATA.find((book) => book.slug === slug);
}
