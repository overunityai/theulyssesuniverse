# Brand assets

These files back the brand guide at `/brand` (`src/app/brand/page.tsx`).

The page already draws inline-SVG approximations of every mark, icon, and
pattern, so it renders fully before any file here exists. The slots below light
up automatically once you export the real artwork to these exact paths and
filenames. The page references each one directly, so do not rename them.

## Colours (for export, not files)

- Gold `#D4AF37`
- Bronze `#B8860B`
- Deep Navy `#0B1222`
- Slate `#1A2332`
- Light Gold `#F0C96A`

Export all marks gold on deep navy unless noted. Prefer SVG for line art and
logos (sharp at any size, smaller). Use JPG only for the photographic usage
mock-ups.

## Logos

| File | What it is |
| --- | --- |
| `logo-primary.svg` | Primary logo: U monogram in a Greek-key (meander) circle, gold on deep navy, with the ULYSSES UNIVERSE wordmark. |
| `logo-stacked.svg` | Stacked lock-up: mark above the wordmark. |
| `logo-horizontal.svg` | Horizontal lock-up: mark left, wordmark right. |
| `logo-wordmark.svg` | Wordmark only, no symbol. |
| `symbol-only.svg` | Symbol only: the U-in-meander mark on its own. |
| `app-icon.png` | Square app / avatar icon, 1024x1024, gold mark on deep navy. |

## Seals & badges

| File | What it is |
| --- | --- |
| `seal-meander-sunburst.svg` | Meander ring with radiating rays around the mark. |
| `seal-star-wordmark.svg` | Circular wordmark wrapping a five-point star. |
| `seal-laurel-monogram.svg` | Laurel branches framing the U monogram. |
| `seal-laurel-wreath.svg` | Full laurel wreath, open at the top. |
| `seal-roman-numeral.svg` | Volume numeral (I, II, III) inside a thin ring. |

## Usage mock-ups (photographic)

| File | What it is |
| --- | --- |
| `usage-book-cover.jpg` | The mark on a book cover. Portrait, roughly 2:3. |
| `usage-pennant.jpg` | The mark on a pennant or banner. Portrait, roughly 3:4. |
| `usage-medallion.jpg` | The mark on a coin or medallion. Portrait, roughly 2:3. |

## Notes

- Icons (12), submarks, patterns, and borders are drawn inline as SVG in the
  page itself. They need no exported files. Export them here only if you want
  downloadable versions later.
- JPG export settings: quality 88, progressive, optimised, EXIF stripped, RGB
  (flatten any transparency).
- The display face in fixed artwork is Trajan Pro (licensed Adobe font). The
  website renders the same look with Cinzel as the web stand-in.
