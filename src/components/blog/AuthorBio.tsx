import { AUTHOR, SITE_URL } from "@/lib/constants";

export function AuthorBio() {
  return (
    <div
      id="author-bio"
      className="bg-void-dark border border-border/50 rounded-lg p-6 my-12"
    >
      <div className="flex gap-5 items-start">
        <div className="shrink-0 w-16 h-16 rounded-full bg-void-mid border border-gold/20 flex items-center justify-center">
          <span className="font-display text-2xl text-gold/60">S</span>
        </div>
        <div>
          <p className="font-ui text-xs uppercase tracking-wider text-gold/60 mb-1">
            About the author
          </p>
          <p className="font-display text-lg text-text-primary tracking-wide mb-2">
            <a
              href={`${SITE_URL}/about`}
              className="hover:text-gold transition-colors"
            >
              {AUTHOR.name}
            </a>
          </p>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {AUTHOR.fullBio}
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href={`${SITE_URL}/about`}
              className="font-ui text-xs text-gold/60 hover:text-gold transition-colors"
            >
              More about Sotiris &rarr;
            </a>
            <a
              href={`${SITE_URL}/newsletter`}
              className="font-ui text-xs text-gold/60 hover:text-gold transition-colors"
            >
              Join the crew &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
