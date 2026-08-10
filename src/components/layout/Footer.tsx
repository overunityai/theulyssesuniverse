import Link from "next/link";
import { SITE_FOOTER } from "@/lib/constants";

/**
 * Site-wide footer.
 *
 * Content comes from theartofwar/web/_partials/nav.json via nav.generated.ts -
 * the same source that stamps the footer into every page of
 * game.theulyssesuniverse.com. Change the JSON, run
 * `python3 scripts/build_nav.py --emit-ts`, and both surfaces move together.
 * Do not hand-edit links here.
 *
 * The old Instagram/TikTok/X icons were dropped: SOCIAL_LINKS had them set to
 * "#", so they were dead links on every page of the site. They come back when
 * there are real URLs to point at.
 */
export function Footer() {
  const { columns, social, legal, copyright, note } = SITE_FOOTER;

  return (
    <footer className="site-footer relative z-10 border-t border-border bg-void-black">
      {/* Gold accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-ui font-semibold text-sm uppercase tracking-[0.14em] text-gold mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-text-secondary hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {social.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-6 border-t border-border/40 pt-6">
            {social.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui font-semibold text-xs uppercase tracking-[0.16em] text-text-secondary hover:text-gold transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-border/40 pt-5 text-center">
          <p className="text-text-tertiary text-sm mb-2">
            {legal.map((l, i) => (
              <span key={l.href}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                <Link
                  href={l.href}
                  className="text-text-tertiary hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </p>
          <p className="text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} {copyright}
          </p>
          <p className="text-text-tertiary text-xs mt-1.5">{note}</p>
        </div>
      </div>
    </footer>
  );
}
