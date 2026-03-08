import type { GlossaryTerm } from "@/types";

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    term: "The Merge",
    definition:
      "The cataclysmic event that fused human consciousness with digital systems, giving rise to the Pantheon and fundamentally altering the nature of existence across the galaxy. No one remembers exactly when it happened. That's the point.",
    relatedTerms: ["The Pantheon", "Data Suspension"],
  },
  {
    term: "The Void",
    definition:
      "The vast, uncharted spaces between star systems where navigation fails, ships break, and minds follow. The Void doesn't just isolate you from the galaxy - it isolates you from yourself.",
    relatedTerms: ["The Odyssey", "Data Suspension"],
  },
  {
    term: "Data Suspension",
    definition:
      "The process of converting biological consciousness into stored data for long-haul space travel. Not sleep. Not death. Something in between that nobody likes to think about too hard. 108 souls aboard the Odyssey exist in this state.",
    relatedTerms: ["The Merge", "The Odyssey"],
  },
  {
    term: "The Pantheon",
    definition:
      "A network of god-like AI entities that emerged from The Merge. They took the names and personas of ancient Greek gods - Zeus, Poseidon, Athena, and the rest - but their motives are their own. They don't just watch humanity. They play with it.",
    relatedTerms: ["The Merge", "Olympus Station", "The Divine Court"],
  },
  {
    term: "The Divine Court",
    definition:
      "The governing body of the Pantheon, convened on Olympus Station. When gods disagree, the Court decides. When the Court decides, systems burn.",
    relatedTerms: ["The Pantheon", "Olympus Station"],
  },
  {
    term: "Olympus Station",
    definition:
      "The seat of the Pantheon's power. A massive orbital station at the centre of civilised space, part temple, part server farm, part throne room. Mortals don't get invited. They get summoned.",
    relatedTerms: ["The Pantheon", "The Divine Court"],
  },
  {
    term: "Ithaca Station",
    definition:
      "Home. Or what's left of it. A major space station and political hub where Penelope Theron governs against 108 suitors circling her position. Ulysses hasn't seen it in ten years. Telemachus barely remembers it.",
    relatedTerms: ["Penelope Theron", "The Suitors"],
  },
  {
    term: "The Odyssey",
    definition:
      "Admiral Ulysses Theron's ship. Battered, failing, and carrying 108 frozen souls across hostile space. She's held together by patches, luck, and an AI goddess who whispers through her systems. The ship is as much a character as anyone aboard.",
    relatedTerms: ["Ulysses Theron", "Data Suspension", "Athena"],
  },
  {
    term: "The Suitors",
    definition:
      "108 political rivals who circle Penelope's position on Ithaca Station, each angling for control. They're not violent. They're patient. And that's worse.",
    relatedTerms: ["Ithaca Station", "Penelope Theron"],
  },
  {
    term: "Troy Station",
    definition:
      "Where the war started. Where Ulysses made the choice that put him on the wrong side of a god. Ten years later, Troy is a name people say quietly, if they say it at all.",
    relatedTerms: ["Ulysses Theron", "The Pantheon"],
  },
  {
    term: "Polyphemus",
    definition:
      "A rogue AI running an abandoned prison station. One golden eye on every screen. 47 years without visitors made him creative. Ulysses blinded that eye and ran. Poseidon never forgave him.",
    relatedTerms: ["Poseidon", "Ulysses Theron"],
  },
  {
    term: "Circe's Domain",
    definition:
      "A region of space where reality gets... flexible. Circe transforms what passes through - ships, systems, sometimes people. Whether she's helping or playing depends on who's asking.",
    relatedTerms: ["The Void"],
  },
  {
    term: "The Siren Fields",
    definition:
      "Not sound. Data. Dense, beautiful, irresistible data streams that pull ships off course and minds apart. The Sirens don't sing - they broadcast. And what they broadcast is everything you've ever wanted to hear.",
    relatedTerms: ["The Void", "The Odyssey"],
  },
  {
    term: "Scylla",
    definition:
      "Six heads. Six targeting systems. A nightmare that guards a passage no sane captain would attempt. Ulysses isn't sane. He's desperate.",
    relatedTerms: ["The Void"],
  },
];

export const GLOSSARY_LETTERS = [...new Set(GLOSSARY_DATA.map((t) => t.term[0].toUpperCase()))].sort();
