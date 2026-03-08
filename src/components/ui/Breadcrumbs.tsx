interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 font-ui text-sm text-text-tertiary">
        <li>
          <a
            href="/"
            className="hover:text-gold transition-colors"
          >
            Home
          </a>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className="text-border" aria-hidden="true">/</span>
            {item.href && i < items.length - 1 ? (
              <a
                href={item.href}
                className="hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-text-secondary" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
