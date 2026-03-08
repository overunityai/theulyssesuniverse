interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

interface InlineTOCProps {
  headings: TOCHeading[];
  hasFaq?: boolean;
  hasKeyTakeaways?: boolean;
}

export function InlineTOC({ headings, hasFaq, hasKeyTakeaways }: InlineTOCProps) {
  if (headings.length === 0) return null;

  return (
    <nav
      className="bg-void-dark border border-border/50 rounded-lg p-6 my-8"
      aria-label="Table of contents"
    >
      <p className="font-ui text-xs uppercase tracking-[0.15em] text-gold/60 mb-4">
        In this article
      </p>
      <ul className="space-y-2">
        {headings
          .filter((h) => h.level === 2)
          .map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className="font-body text-sm text-text-secondary hover:text-gold transition-colors block py-0.5"
              >
                {h.text}
              </a>
            </li>
          ))}
        {hasKeyTakeaways && (
          <li>
            <a
              href="#key-takeaways"
              className="font-body text-sm text-text-secondary hover:text-gold transition-colors block py-0.5"
            >
              Key takeaways
            </a>
          </li>
        )}
        {hasFaq && (
          <li>
            <a
              href="#faq"
              className="font-body text-sm text-text-secondary hover:text-gold transition-colors block py-0.5"
            >
              Frequently asked questions
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
