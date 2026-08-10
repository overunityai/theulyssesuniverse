// GENERATED FILE - DO NOT EDIT BY HAND.
// Source of truth: theartofwar/web/_partials/nav.json
// Regenerate:     python3 theartofwar/scripts/build_nav.py --emit-ts
//
// The same JSON stamps the nav into game.theulyssesuniverse.com, so the two
// surfaces cannot drift. Edit the JSON, rerun, commit both repos.

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  submenu?: ReadonlyArray<{
    label: string;
    href: string;
    description?: string;
    external?: boolean;
    /** Optional group heading rendered above this item in dropdown/drawer. */
    section?: string;
  }>;
};

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  {
    "label": "Books",
    "href": "/books",
    "submenu": [
      {
        "label": "All Books",
        "href": "/books",
        "description": "Index",
        "section": "Index"
      },
      {
        "label": "The Blinding",
        "href": "/books/the-blinding",
        "description": "Book I",
        "section": "The Trilogy"
      },
      {
        "label": "The Void Between",
        "href": "/books/the-void-between",
        "description": "Book II",
        "section": "The Trilogy"
      },
      {
        "label": "The Return",
        "href": "/books/the-return",
        "description": "Book III",
        "section": "The Trilogy"
      },
      {
        "label": "Free Chapter",
        "href": "/free-chapter",
        "description": "Read now",
        "section": "Start here"
      },
      {
        "label": "Reading Group",
        "href": "/reading-group",
        "description": "Guide",
        "section": "Start here"
      }
    ]
  },
  {
    "label": "Games",
    "href": "https://game.theulyssesuniverse.com/",
    "external": true,
    "submenu": [
      {
        "label": "All Games",
        "href": "https://game.theulyssesuniverse.com/",
        "external": true,
        "description": "Index",
        "section": "Index"
      },
      {
        "label": "The Odyssey",
        "href": "https://game.theulyssesuniverse.com/odyssey",
        "external": true,
        "description": "The Long Way Home",
        "section": "Play now"
      },
      {
        "label": "ECHOS",
        "href": "https://game.theulyssesuniverse.com/echos",
        "external": true,
        "description": "In production",
        "section": "Coming"
      },
      {
        "label": "Roadmap",
        "href": "https://game.theulyssesuniverse.com/roadmap",
        "external": true,
        "description": "What's next",
        "section": "Coming"
      }
    ]
  },
  {
    "label": "Free Games",
    "href": "https://game.theulyssesuniverse.com/free-games",
    "external": true,
    "submenu": [
      {
        "label": "All Free Games",
        "href": "https://game.theulyssesuniverse.com/free-games",
        "external": true,
        "description": "Index",
        "section": "Index"
      },
      {
        "label": "The Daily Glyph",
        "href": "https://game.theulyssesuniverse.com/daily-glyph",
        "external": true,
        "description": "Deduction",
        "section": "Daily"
      },
      {
        "label": "Bow Contest",
        "href": "https://game.theulyssesuniverse.com/bow",
        "external": true,
        "description": "Archery",
        "section": "Original"
      },
      {
        "label": "Pantheon Descends",
        "href": "https://game.theulyssesuniverse.com/invaders",
        "external": true,
        "description": "Invaders",
        "section": "Arcade"
      },
      {
        "label": "Poseidon's Hunt",
        "href": "https://game.theulyssesuniverse.com/poseidons-hunt",
        "external": true,
        "description": "Galaxian",
        "section": "Arcade"
      },
      {
        "label": "Echo's Vigil",
        "href": "https://game.theulyssesuniverse.com/echos-vigil",
        "external": true,
        "description": "Maze",
        "section": "Arcade"
      },
      {
        "label": "Penelope's Vigil",
        "href": "https://game.theulyssesuniverse.com/penelopes-vigil",
        "external": true,
        "description": "Missiles",
        "section": "Arcade"
      },
      {
        "label": "The Salvage Run",
        "href": "https://game.theulyssesuniverse.com/salvage-run",
        "external": true,
        "description": "Asteroids",
        "section": "Arcade"
      },
      {
        "label": "The Pantheon Wall",
        "href": "https://game.theulyssesuniverse.com/pantheon-wall",
        "external": true,
        "description": "Breakout",
        "section": "Arcade"
      },
      {
        "label": "The Tessera Game",
        "href": "https://game.theulyssesuniverse.com/tessera",
        "external": true,
        "description": "Othello",
        "section": "Strategy"
      },
      {
        "label": "Fleet of Olympus",
        "href": "https://game.theulyssesuniverse.com/fleet-of-olympus",
        "external": true,
        "description": "Battleship",
        "section": "Strategy"
      },
      {
        "label": "The Pantheon Gambit",
        "href": "https://game.theulyssesuniverse.com/pantheon-gambit",
        "external": true,
        "description": "Chess",
        "section": "Strategy"
      },
      {
        "label": "The Long Game",
        "href": "https://game.theulyssesuniverse.com/long-game",
        "external": true,
        "description": "Backgammon",
        "section": "Strategy"
      }
    ]
  },
  {
    "label": "Universe",
    "href": "/universe",
    "submenu": [
      {
        "label": "The Universe",
        "href": "/universe",
        "description": "Index",
        "section": "Index"
      },
      {
        "label": "Characters",
        "href": "/universe/characters",
        "description": "Who's who",
        "section": "Explore"
      },
      {
        "label": "The Odyssey Ship",
        "href": "/universe/odyssey",
        "description": "Deck plans",
        "section": "Explore"
      },
      {
        "label": "Journey Map",
        "href": "/universe/journey",
        "description": "The route",
        "section": "Explore"
      },
      {
        "label": "Glossary",
        "href": "/universe/glossary",
        "description": "Terms",
        "section": "Explore"
      }
    ]
  },
  {
    "label": "Blog",
    "href": "/blog"
  },
  {
    "label": "About",
    "href": "/about",
    "submenu": [
      {
        "label": "About",
        "href": "/about",
        "description": "The project",
        "section": "Index"
      },
      {
        "label": "Get Involved",
        "href": "https://game.theulyssesuniverse.com/get-involved",
        "external": true,
        "description": "Join in",
        "section": "Connect"
      },
      {
        "label": "Newsletter",
        "href": "/newsletter",
        "description": "Subscribe",
        "section": "Connect"
      },
      {
        "label": "Press",
        "href": "/press",
        "description": "Media kit",
        "section": "Connect"
      },
      {
        "label": "Contact",
        "href": "/contact",
        "description": "Get in touch",
        "section": "Connect"
      }
    ]
  }
] as const;

export type NavCta = {
  label: string;
  href: string;
  style: string;
  external?: boolean;
};

export const NAV_CTA: ReadonlyArray<NavCta> = [
  {
    "label": "Play Free",
    "href": "https://game.theulyssesuniverse.com/odyssey",
    "style": "primary",
    "external": true
  },
  {
    "label": "Buy the Trilogy",
    "href": "https://www.amazon.co.uk/dp/B0GNFQM4FN",
    "style": "secondary",
    "external": true
  }
] as const;

export type FooterLink = { label: string; href: string; external?: boolean };
export type SiteFooter = {
  columns: ReadonlyArray<{ heading: string; links: ReadonlyArray<FooterLink> }>;
  social: ReadonlyArray<FooterLink>;
  legal: ReadonlyArray<FooterLink>;
  copyright: string;
  note: string;
};

export const SITE_FOOTER: SiteFooter = {
  "columns": [
    {
      "heading": "Books",
      "links": [
        {
          "label": "The Ulysses Universe",
          "href": "/"
        },
        {
          "label": "The Trilogy",
          "href": "/books"
        },
        {
          "label": "The Blinding",
          "href": "/books/the-blinding"
        },
        {
          "label": "The Void Between",
          "href": "/books/the-void-between"
        },
        {
          "label": "The Return",
          "href": "/books/the-return"
        },
        {
          "label": "Free Chapter",
          "href": "/free-chapter"
        },
        {
          "label": "Reading Group",
          "href": "/reading-group"
        }
      ]
    },
    {
      "heading": "Games",
      "links": [
        {
          "label": "All Games",
          "href": "https://game.theulyssesuniverse.com/",
          "external": true
        },
        {
          "label": "The Odyssey",
          "href": "https://game.theulyssesuniverse.com/odyssey",
          "external": true
        },
        {
          "label": "ECHOS",
          "href": "https://game.theulyssesuniverse.com/echos",
          "external": true
        },
        {
          "label": "Free Games",
          "href": "https://game.theulyssesuniverse.com/free-games",
          "external": true
        },
        {
          "label": "Roadmap",
          "href": "https://game.theulyssesuniverse.com/roadmap",
          "external": true
        },
        {
          "label": "Get Involved",
          "href": "https://game.theulyssesuniverse.com/get-involved",
          "external": true
        }
      ]
    },
    {
      "heading": "Universe",
      "links": [
        {
          "label": "The Universe",
          "href": "/universe"
        },
        {
          "label": "Characters",
          "href": "/universe/characters"
        },
        {
          "label": "The Odyssey Ship",
          "href": "/universe/odyssey"
        },
        {
          "label": "Journey Map",
          "href": "/universe/journey"
        },
        {
          "label": "Glossary",
          "href": "/universe/glossary"
        }
      ]
    },
    {
      "heading": "More",
      "links": [
        {
          "label": "About",
          "href": "/about"
        },
        {
          "label": "Blog",
          "href": "/blog"
        },
        {
          "label": "Press",
          "href": "/press"
        },
        {
          "label": "Contact",
          "href": "/contact"
        },
        {
          "label": "Newsletter",
          "href": "/newsletter"
        }
      ]
    }
  ],
  "social": [
    {
      "label": "YouTube",
      "href": "https://www.youtube.com/@ulyssesuniverse",
      "external": true
    },
    {
      "label": "Substack",
      "href": "https://theulyssesuniverse.substack.com",
      "external": true
    },
    {
      "label": "RSS",
      "href": "https://game.theulyssesuniverse.com/rss.xml",
      "external": true
    }
  ],
  "legal": [
    {
      "label": "Privacy Policy",
      "href": "/privacy"
    },
    {
      "label": "Brand",
      "href": "/brand"
    }
  ],
  "copyright": "Ulysses Universe. All rights reserved.",
  "note": "The Ulysses Universe is an original work inspired by Homer's Odyssey."
} as const;
