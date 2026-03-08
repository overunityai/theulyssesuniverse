import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { CopyHex } from "@/components/ui/CopyHex";

export const metadata: Metadata = {
  title: "Brand Assets",
  description: "Internal brand assets and guidelines for the Ulysses Universe.",
  robots: {
    index: false,
    follow: false,
  },
};

const colours = [
  { name: "Void Black", hex: "#0A0A0F", desc: "Primary background" },
  { name: "Void Dark", hex: "#12121A", desc: "Card backgrounds" },
  { name: "Void Mid", hex: "#1A1A2E", desc: "Elevated surfaces" },
  { name: "Gold", hex: "#D4AF37", desc: "Primary accent" },
  { name: "Gold Light", hex: "#E8C766", desc: "Hover states" },
  { name: "Gold Dim", hex: "#8B7023", desc: "Muted gold" },
  { name: "Blue", hex: "#00D4FF", desc: "Secondary accent" },
  { name: "Purple", hex: "#4A0080", desc: "Tertiary accent" },
  { name: "Red", hex: "#FF3333", desc: "Danger/warning" },
  { name: "Text Primary", hex: "#E8E6E3", desc: "Body text" },
  { name: "Text Secondary", hex: "#9A9A9A", desc: "Supporting text" },
  { name: "Text Tertiary", hex: "#666666", desc: "Muted text" },
  { name: "Border", hex: "#2A2A3A", desc: "Borders/dividers" },
];

const typography = [
  {
    name: "Cinzel",
    weight: "700 (Bold)",
    usage: "Display headings, titles, character names",
    class: "font-display",
    link: "https://fonts.google.com/specimen/Cinzel",
  },
  {
    name: "Rajdhani",
    weight: "400, 600",
    usage: "UI labels, navigation, buttons, metadata",
    class: "font-ui",
    link: "https://fonts.google.com/specimen/Rajdhani",
  },
  {
    name: "Inter",
    weight: "Variable (300-700)",
    usage: "Body text, descriptions, long-form content",
    class: "font-body",
    link: "https://fonts.google.com/specimen/Inter",
  },
  {
    name: "JetBrains Mono",
    weight: "400",
    usage: "Code, ship designations, technical data",
    class: "font-mono",
    link: "https://fonts.google.com/specimen/JetBrains+Mono",
  },
];

const guidelines = {
  do: [
    "Use the gold accent sparingly - it's for emphasis, not decoration",
    "Maintain the dark palette across all materials",
    "Use Cinzel for headings, never for body text",
    "Keep the cinematic, atmospheric tone",
    "Reference Greek mythology and space opera equally",
  ],
  dont: [
    "Don't use bright or pastel backgrounds",
    "Don't substitute the font stack with system fonts",
    "Don't use the gold colour for large background fills",
    "Don't crop character art - use full compositions",
    "Don't use Comic Sans. Ever. For anything.",
  ],
};

export default function BrandPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="inline-flex items-center gap-2 font-ui text-xs uppercase tracking-wider text-red/80 bg-red/10 px-3 py-1.5 rounded-full border border-red/20 mb-6">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
            Internal use only - not indexed
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Brand Assets
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Colours, typography, logos, and guidelines for the Ulysses Universe
            brand. Quick access for social accounts, content creation, and
            partner materials.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Logo Downloads */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-8">
            Logo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-void-dark border border-border rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
              <span className="font-display text-2xl text-gold tracking-wider">
                The Ulysses Universe
              </span>
              <p className="font-ui text-xs text-text-tertiary mt-4">
                Logo assets coming soon
              </p>
            </div>
            <div className="bg-text-primary border border-border rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
              <span className="font-display text-2xl text-void-black tracking-wider">
                The Ulysses Universe
              </span>
              <p className="font-ui text-xs text-void-mid mt-4">
                Light background variant
              </p>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Colour Palette */}
      <section className="py-16 md:py-20 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-8">
            Colour Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {colours.map((colour) => (
              <CopyHex key={colour.hex} colour={colour} />
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Typography */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-8">
            Typography
          </h2>
          <div className="space-y-6">
            {typography.map((font) => (
              <div
                key={font.name}
                className="bg-void-dark border border-border rounded-lg p-6"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className={`${font.class} text-2xl text-text-primary`}>
                    {font.name}
                  </h3>
                  <a
                    href={font.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-ui text-xs text-gold/60 hover:text-gold transition-colors"
                  >
                    Google Fonts &rarr;
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 font-ui text-xs text-text-tertiary">
                  <span>Weight: {font.weight}</span>
                  <span>-</span>
                  <span>Usage: {font.usage}</span>
                  <span>-</span>
                  <span>Class: <code className="font-mono text-gold/60">{font.class}</code></span>
                </div>
                <div className={`${font.class} text-lg text-text-secondary mt-4`}>
                  The quick brown fox jumps over the lazy dog. 0123456789
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Guidelines */}
      <section className="py-16 md:py-20 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-8">
            Brand Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-void-dark border border-gold/20 rounded-lg p-6">
              <h3 className="font-display text-lg text-gold tracking-wide mb-4">
                Do
              </h3>
              <ul className="space-y-2">
                {guidelines.do.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm text-text-secondary">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-void-dark border border-red/20 rounded-lg p-6">
              <h3 className="font-display text-lg text-red tracking-wide mb-4">
                Don't
              </h3>
              <ul className="space-y-2">
                {guidelines.dont.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm text-text-secondary">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red shrink-0 mt-0.5">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
