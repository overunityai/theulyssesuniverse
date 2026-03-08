interface KeyTakeawaysProps {
  items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;

  return (
    <section id="key-takeaways" className="my-12 scroll-mt-24">
      <h2 className="font-display text-2xl text-text-primary tracking-wide mb-6">
        <a href="#key-takeaways" className="hover:text-gold transition-colors">
          Key takeaways
        </a>
      </h2>
      <div className="bg-void-dark border-l-4 border-gold/40 rounded-r-lg p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <svg
                viewBox="0 0 20 20"
                width={16}
                height={16}
                fill="currentColor"
                className="w-4 h-4 text-gold shrink-0 mt-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-body text-sm text-text-secondary leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
