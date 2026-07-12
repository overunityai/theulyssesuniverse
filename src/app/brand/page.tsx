import type { Metadata } from "next";
import Image from "next/image";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { CopyHex } from "@/components/ui/CopyHex";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "The Ulysses Universe brand guide. Colours, typography, the U-monogram logo system, icon set, seals, patterns, and usage rules for the deep navy and gold aesthetic.",
  alternates: { canonical: `${SITE_URL}/brand` },
  openGraph: {
    title: "Brand | The Ulysses Universe",
    description:
      "The Ulysses Universe brand guide. Colours, typography, logos, icons, seals, patterns, and usage rules.",
    type: "website",
    url: `${SITE_URL}/brand`,
    images: [
      {
        url: `${SITE_URL}/images/og/og-default.webp`,
        width: 1200,
        height: 630,
        alt: "The Ulysses Universe brand guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand | The Ulysses Universe",
    description: "The Ulysses Universe brand guide.",
    images: [`${SITE_URL}/images/og/og-default.webp`],
  },
};

/* ------------------------------------------------------------------ */
/* Brand colour palette (the documented brand colours, per the guide) */
/* ------------------------------------------------------------------ */
const brandColours = [
  { name: "Gold", hex: "#D4AF37", desc: "Primary mark colour" },
  { name: "Bronze", hex: "#B8860B", desc: "Aged gold, shadows" },
  { name: "Deep Navy", hex: "#0B1222", desc: "Primary background" },
  { name: "Slate", hex: "#1A2332", desc: "Cards, raised surfaces" },
  { name: "Light Gold", hex: "#F0C96A", desc: "Highlights, hover" },
];

/* ------------------------------------------------------------------ */
/* Shared inline-SVG marks                                            */
/* ------------------------------------------------------------------ */

// Greek-key (meander) circular border with a centred U monogram.
function MeanderUMark({ size = 120 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer + inner ring */}
      <circle cx="60" cy="60" r="56" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="60" cy="60" r="40" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      {/* Meander tiles around the ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const r = 48;
        const x = 60 + Math.cos(angle) * r;
        const y = 60 + Math.sin(angle) * r;
        const rot = (angle * 180) / Math.PI + 90;
        return (
          <path
            key={i}
            d="M-4 3h2v-4h4v4h2v-6h-8z"
            transform={`translate(${x} ${y}) rotate(${rot})`}
            stroke="#D4AF37"
            strokeWidth="0.9"
            fill="none"
          />
        );
      })}
      {/* U monogram */}
      <path
        d="M44 40v24a16 16 0 0 0 32 0V40"
        stroke="#D4AF37"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Plain U glyph (used in several submarks).
function UGlyph({
  stroke = "#D4AF37",
  width = 5,
}: {
  stroke?: string;
  width?: number;
}) {
  return (
    <path
      d="M44 40v24a16 16 0 0 0 32 0V40"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      fill="none"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Logo variation slots                                              */
/* ------------------------------------------------------------------ */
const logoVariations = [
  {
    name: "Stacked",
    file: "logo-stacked.svg",
    desc: "Mark above the wordmark. The default for square spaces and avatars.",
  },
  {
    name: "Horizontal",
    file: "logo-horizontal.svg",
    desc: "Mark left, wordmark right. For headers, footers, and wide banners.",
  },
  {
    name: "Wordmark",
    file: "logo-wordmark.svg",
    desc: "ULYSSES UNIVERSE set in the display face, no symbol.",
  },
  {
    name: "Symbol only",
    file: "symbol-only.svg",
    desc: "The U-in-meander mark on its own. For favicons and tight spaces.",
  },
];

/* ------------------------------------------------------------------ */
/* Submarks (inline SVG)                                             */
/* ------------------------------------------------------------------ */
function MeanderRingSubmark() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <circle cx="60" cy="60" r="54" stroke="#D4AF37" strokeWidth="2" fill="none" />
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const x = 60 + Math.cos(angle) * 48;
        const y = 60 + Math.sin(angle) * 48;
        const rot = (angle * 180) / Math.PI + 90;
        return (
          <path
            key={i}
            d="M-4 3h2v-4h4v4h2v-6h-8z"
            transform={`translate(${x} ${y}) rotate(${rot})`}
            stroke="#D4AF37"
            strokeWidth="0.9"
            fill="none"
          />
        );
      })}
    </svg>
  );
}

const submarks: { name: string; svg: React.ReactNode }[] = [
  {
    name: "U in meander circle",
    svg: <MeanderUMark size={88} />,
  },
  {
    name: "Gold filled disc U",
    svg: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
        <circle cx="60" cy="60" r="52" fill="#D4AF37" />
        <path
          d="M44 40v24a16 16 0 0 0 32 0V40"
          stroke="#0B1222"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Thin-circle U",
    svg: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
        <circle cx="60" cy="60" r="52" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <UGlyph />
      </svg>
    ),
  },
  {
    name: "Meander ring",
    svg: <MeanderRingSubmark />,
  },
  {
    name: "Plain U",
    svg: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
        <UGlyph width={7} />
      </svg>
    ),
  },
  {
    name: "U with trident flourishes",
    svg: (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
        <UGlyph />
        {/* Trident prongs rising from the bowl of the U */}
        <path d="M60 64v-30" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
        <path d="M48 40c0-6 4-10 12-10s12 4 12 10" stroke="#D4AF37" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M48 40v-8M72 40v-8M60 34v-8" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Icon set (12 inline line icons)                                  */
/* ------------------------------------------------------------------ */
type Icon = { name: string; svg: React.ReactNode };

const iconStroke = {
  stroke: "#D4AF37",
  strokeWidth: 1.8,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Icon[] = [
  {
    name: "Power",
    svg: <path d="M14 3 5 14h6l-1 7 9-11h-6z" {...iconStroke} />,
  },
  {
    name: "Protection",
    svg: <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z" {...iconStroke} />,
  },
  {
    name: "Wisdom",
    svg: (
      <>
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" {...iconStroke} />
        <circle cx="12" cy="12" r="2.6" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Command",
    svg: (
      <>
        <path d="M12 21V8" {...iconStroke} />
        <path d="M6 8c0-3 2.5-5 6-5s6 2 6 5" {...iconStroke} />
        <path d="M6 8V4M18 8V4M12 6V3" {...iconStroke} />
        <path d="M9 21h6" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Order",
    svg: (
      <>
        <circle cx="12" cy="12" r="3" {...iconStroke} />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Balance",
    svg: (
      <>
        <path d="M12 3v18M5 21h14" {...iconStroke} />
        <path d="M5 7h14" {...iconStroke} />
        <path d="M5 7 2 14a3 3 0 0 0 6 0z" {...iconStroke} />
        <path d="M19 7l-3 7a3 3 0 0 0 6 0z" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Journey",
    svg: (
      <>
        <path d="M3 16h18l-2 4H5z" {...iconStroke} />
        <path d="M12 16V5l6 4" {...iconStroke} />
        <path d="M12 16V8l-5 3" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Destiny",
    svg: (
      <>
        <circle cx="12" cy="12" r="9" {...iconStroke} />
        <path d="M12 5l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Portal",
    svg: (
      <path
        d="M12 12m0 0a2 2 0 0 1 4 0 4 4 0 0 1-8 0 6 6 0 0 1 12 0 8 8 0 0 1-16 0"
        {...iconStroke}
      />
    ),
  },
  {
    name: "Universe",
    svg: (
      <>
        <circle cx="12" cy="12" r="2" {...iconStroke} />
        <ellipse cx="12" cy="12" rx="10" ry="4" {...iconStroke} />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" {...iconStroke} />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Alliance",
    svg: (
      <>
        <path d="M3 12l4-4 4 3 3-1 4 4" {...iconStroke} />
        <path d="M11 11l2 2 2-1" {...iconStroke} />
        <path d="M3 12v4l4 2M21 14v3l-4 2" {...iconStroke} />
      </>
    ),
  },
  {
    name: "Legacy",
    svg: (
      <>
        <path d="M12 4c-4 2-6 7-5 13M12 4c4 2 6 7 5 13" {...iconStroke} />
        <path d="M7 17c1.5 1.5 3 2 5 2s3.5-.5 5-2" {...iconStroke} />
        <path d="M9 8l-2 1M15 8l2 1M8 12l-2 1M16 12l2 1" {...iconStroke} />
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Seals & badges (image slots)                                     */
/* ------------------------------------------------------------------ */
const seals = [
  {
    name: "Meander sunburst seal",
    file: "seal-meander-sunburst.svg",
    desc: "Meander ring with radiating rays around the central mark.",
  },
  {
    name: "Star wordmark seal",
    file: "seal-star-wordmark.svg",
    desc: "Circular wordmark wrapping a five-point star.",
  },
  {
    name: "Laurel monogram seal",
    file: "seal-laurel-monogram.svg",
    desc: "Laurel branches framing the U monogram.",
  },
  {
    name: "Laurel wreath",
    file: "seal-laurel-wreath.svg",
    desc: "Full laurel wreath, open at the top, for accolades.",
  },
  {
    name: "Roman-numeral seal",
    file: "seal-roman-numeral.svg",
    desc: "Volume numeral (I, II, III) inside a thin ring.",
  },
];

/* ------------------------------------------------------------------ */
/* Usage examples (image slots)                                     */
/* ------------------------------------------------------------------ */
const usageExamples = [
  { name: "Book cover", file: "usage-book-cover.jpg", ratio: "aspect-[2/3]" },
  { name: "Pennant / banner", file: "usage-pennant.jpg", ratio: "aspect-[3/4]" },
  { name: "Coin / medallion", file: "usage-medallion.jpg", ratio: "aspect-[2/3]" },
];

const usage = {
  do: [
    "Keep clear space around the mark equal to the height of the U",
    "Place the gold mark on deep navy or black backgrounds",
    "Use the meander border only at sizes where the tiles stay crisp",
    "Hold the gold to the five palette values, nothing brighter",
    "Drop to the symbol-only mark below 32px",
  ],
  dont: [
    "Don't recolour the mark outside the palette",
    "Don't stretch, skew, or squash the logo",
    "Don't set the gold mark on a pale or busy background",
    "Don't add drop shadows, bevels, or glows to the mark",
    "Don't rebuild the wordmark in a substitute font",
  ],
};

export default function BrandPage() {
  return (
    <div className="brand-grain">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Brand", url: `${SITE_URL}/brand` },
        ])}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Brand Guide
          </p>
          <div className="flex justify-center mb-6">
            <MeanderUMark size={120} />
          </div>
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-3 brand-etched">
            Ulysses Universe
          </h1>
          <p className="font-mono text-xs text-text-tertiary mb-6 tracking-widest uppercase">
            Deep navy. Tarnished gold. Old stories in new stars.
          </p>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            The marks, colours, and rules that hold the look together. Use these
            for covers, social accounts, partner materials, and anything that
            carries the name.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Colour Palette */}
      <section className="py-16 md:py-20 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3">
            Colour Palette
          </h2>
          <p className="font-body text-sm text-text-tertiary mb-8">
            Five values. Gold and bronze on deep navy, with a light gold for
            highlights. Tap any swatch to copy the hex.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {brandColours.map((colour) => (
              <CopyHex key={colour.hex} colour={colour} />
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Typography */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3">
            Typography
          </h2>
          <p className="font-body text-sm text-text-tertiary mb-8">
            Display headings carry the classical, carved-letter feel. Body text
            stays plain and readable.
          </p>

          <div className="brand-battered bg-void-dark border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-3 relative z-10">
              <h3 className="font-display text-2xl text-text-primary">
                Trajan Pro
              </h3>
              <span className="font-ui text-xs text-gold/60">Display / headings</span>
            </div>
            <p className="font-body text-sm text-text-secondary relative z-10 mb-5 max-w-2xl">
              The brand display face is Trajan Pro, a licensed Adobe font. It is
              not free to redistribute, so it is used in fixed artwork (covers,
              key logos) where the licence is held, not loaded as a live web
              font.
            </p>
            <div className="relative z-10 border-l-2 border-gold/40 pl-4 mb-6">
              <p className="font-ui text-xs uppercase tracking-[0.12em] text-gold mb-1">
                Web implementation
              </p>
              <p className="font-body text-sm text-text-secondary max-w-2xl">
                On this site the Trajan look is rendered with Cinzel, an open
                Google font built on the same Roman capital proportions. Cinzel
                is loaded through next/font and exposed as the{" "}
                <code className="font-mono text-gold/70">font-display</code>{" "}
                class. So every heading you see here is Cinzel standing in for
                Trajan Pro.
              </p>
            </div>
            <div className="font-display text-3xl md:text-4xl text-text-primary tracking-wide relative z-10">
              ULYSSES UNIVERSE
            </div>
            <div className="font-display text-lg text-text-secondary mt-3 relative z-10">
              The quick brown fox jumps over the lazy dog. 0123456789
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Logo System */}
      <section className="py-16 md:py-20 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3">
            Logo System
          </h2>
          <p className="font-body text-sm text-text-tertiary mb-8">
            The primary mark is a U monogram inside a Greek-key (meander)
            circular border, gold on deep navy, paired with the ULYSSES UNIVERSE
            wordmark. The sketches below are inline approximations. Final
            artwork loads from the image slots once exported.
          </p>

          {/* Primary logo */}
          <div className="brand-battered brand-crack bg-void-dark border border-gold/20 rounded-lg p-8 md:p-10 mb-8 flex flex-col items-center text-center">
            <div className="relative z-10 flex flex-col items-center gap-5">
              <MeanderUMark size={140} />
              <div className="font-display text-2xl md:text-3xl text-text-primary tracking-[0.15em]">
                ULYSSES UNIVERSE
              </div>
            </div>
            <div className="relative z-10 mt-8 w-full max-w-md">
              <Image
                src="/images/brand/logo-primary.svg"
                alt="Ulysses Universe primary logo"
                width={480}
                height={200}
                className="w-full h-auto opacity-95"
              />
            </div>
            <p className="font-ui text-xs text-text-tertiary mt-4 relative z-10">
              Primary logo - exported artwork: logo-primary.svg
            </p>
          </div>

          {/* Variations */}
          <h3 className="font-ui font-semibold text-xs uppercase tracking-[0.12em] text-gold mb-4">
            Variations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {logoVariations.map((v) => (
              <div
                key={v.name}
                className="brand-battered bg-void-dark border border-border rounded-lg p-6"
              >
                <div className="relative z-10 flex items-center justify-center bg-void-black/60 border border-border rounded-md h-32 mb-4 overflow-hidden">
                  <Image
                    src={`/images/brand/${v.file}`}
                    alt={`Ulysses Universe ${v.name} logo`}
                    width={320}
                    height={120}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
                <p className="font-ui text-sm text-text-primary font-semibold relative z-10">
                  {v.name}
                </p>
                <p className="font-body text-xs text-text-tertiary relative z-10 mt-1">
                  {v.desc}
                </p>
                <p className="font-mono text-[10px] text-gold/50 relative z-10 mt-2">
                  {v.file}
                </p>
              </div>
            ))}
          </div>

          {/* Submarks */}
          <h3 className="font-ui font-semibold text-xs uppercase tracking-[0.12em] text-gold mt-12 mb-4">
            Submarks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {submarks.map((s) => (
              <div
                key={s.name}
                className="brand-battered bg-void-dark border border-border rounded-lg p-4 flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-16 h-16 mb-3">{s.svg}</div>
                <p className="font-ui text-[11px] text-text-secondary relative z-10 leading-tight">
                  {s.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Icon Set */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3">
            Icon Set
          </h2>
          <p className="font-body text-sm text-text-tertiary mb-8">
            Twelve line icons in gold. One stroke weight, rounded joins. Each
            maps to a theme from the story.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {icons.map((icon) => (
              <div
                key={icon.name}
                className="brand-battered bg-void-dark border border-border rounded-lg p-5 flex flex-col items-center text-center transition-colors hover:border-gold/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={40}
                  height={40}
                  className="w-10 h-10 relative z-10 mb-3"
                  aria-hidden="true"
                >
                  {icon.svg}
                </svg>
                <p className="font-ui text-xs text-text-secondary relative z-10">
                  {icon.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Seals & Badges */}
      <section className="py-16 md:py-20 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3">
            Seals &amp; Badges
          </h2>
          <p className="font-body text-sm text-text-tertiary mb-8">
            Five seal styles for editions, accolades, and stamps. Artwork loads
            from the image slots once exported.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {seals.map((seal) => (
              <div
                key={seal.name}
                className="brand-battered bg-void-dark border border-border rounded-lg p-5 flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-24 h-24 mb-4 flex items-center justify-center bg-void-black/50 border border-border rounded-full overflow-hidden">
                  <Image
                    src={`/images/brand/${seal.file}`}
                    alt={`Ulysses Universe ${seal.name}`}
                    width={120}
                    height={120}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <p className="font-ui text-xs text-text-primary font-semibold relative z-10 leading-tight">
                  {seal.name}
                </p>
                <p className="font-body text-[11px] text-text-tertiary relative z-10 mt-1.5 leading-snug">
                  {seal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Patterns & Borders */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3">
            Patterns &amp; Borders
          </h2>
          <p className="font-body text-sm text-text-tertiary mb-8">
            Four repeating elements for frames, dividers, and fills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Greek-key border */}
            <div className="brand-battered bg-void-dark border border-border rounded-lg p-6">
              <p className="font-ui text-sm text-text-primary font-semibold relative z-10 mb-4">
                Greek-key border
              </p>
              <div className="relative z-10 overflow-hidden">
                <svg viewBox="0 0 360 24" className="w-full h-6" aria-hidden="true">
                  <defs>
                    <pattern id="brand-greek-key" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
                      <path d="M0 12h12v-12h24v12h12M12 12v12h24v-12" stroke="#D4AF37" strokeWidth="1.6" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="360" height="24" fill="url(#brand-greek-key)" />
                </svg>
              </div>
            </div>

            {/* Wave pattern */}
            <div className="brand-battered bg-void-dark border border-border rounded-lg p-6">
              <p className="font-ui text-sm text-text-primary font-semibold relative z-10 mb-4">
                Wave pattern
              </p>
              <div className="relative z-10 overflow-hidden">
                <svg viewBox="0 0 360 24" className="w-full h-6" aria-hidden="true">
                  <defs>
                    <pattern id="brand-wave" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
                      <path d="M0 12q10 -10 20 0t20 0" stroke="#D4AF37" strokeWidth="1.6" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="360" height="24" fill="url(#brand-wave)" />
                </svg>
              </div>
            </div>

            {/* Diamond divider */}
            <div className="brand-battered bg-void-dark border border-border rounded-lg p-6">
              <p className="font-ui text-sm text-text-primary font-semibold relative z-10 mb-4">
                Diamond divider
              </p>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
                <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
                  <path d="M8 1l5 7-5 7-5-7z" stroke="#D4AF37" strokeWidth="1.4" fill="none" />
                </svg>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
              </div>
            </div>

            {/* Tiled U-monogram background */}
            <div className="brand-battered bg-void-dark border border-border rounded-lg p-6">
              <p className="font-ui text-sm text-text-primary font-semibold relative z-10 mb-4">
                Tiled U-monogram background
              </p>
              <div className="relative z-10 h-16 rounded-md overflow-hidden border border-border">
                <svg viewBox="0 0 360 64" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <pattern id="brand-u-tile" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                      <path d="M16 14v12a8 8 0 0 0 16 0V14" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25" />
                    </pattern>
                  </defs>
                  <rect width="360" height="64" fill="url(#brand-u-tile)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Usage */}
      <section className="py-16 md:py-20 bg-void-dark/30">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display text-2xl text-text-primary tracking-wide mb-8">
            Usage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="brand-battered bg-void-dark border border-gold/20 rounded-lg p-6">
              <h3 className="font-display text-lg text-gold tracking-wide mb-4 relative z-10">
                Do
              </h3>
              <ul className="space-y-2 relative z-10">
                {usage.do.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm text-text-secondary">
                    <svg viewBox="0 0 20 20" width={16} height={16} fill="currentColor" className="w-4 h-4 text-gold shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="brand-battered bg-void-dark border border-red/20 rounded-lg p-6">
              <h3 className="font-display text-lg text-red tracking-wide mb-4 relative z-10">
                Don&apos;t
              </h3>
              <ul className="space-y-2 relative z-10">
                {usage.dont.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm text-text-secondary">
                    <svg viewBox="0 0 20 20" width={16} height={16} fill="currentColor" className="w-4 h-4 text-red shrink-0 mt-0.5">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Usage examples */}
          <h3 className="font-ui font-semibold text-xs uppercase tracking-[0.12em] text-gold mb-4">
            In use
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {usageExamples.map((ex) => (
              <div key={ex.name} className="brand-battered bg-void-dark border border-border rounded-lg p-4">
                <div className={`relative z-10 ${ex.ratio} bg-void-black/60 border border-border rounded-md overflow-hidden mb-3`}>
                  <Image
                    src={`/images/brand/${ex.file}`}
                    alt={`Ulysses Universe brand applied to a ${ex.name.toLowerCase()}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-ui text-sm text-text-primary font-semibold relative z-10">
                  {ex.name}
                </p>
                <p className="font-mono text-[10px] text-gold/50 relative z-10 mt-1">
                  {ex.file}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
