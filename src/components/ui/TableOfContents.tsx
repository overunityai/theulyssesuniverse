"use client";

import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 font-ui text-sm uppercase tracking-wider text-gold/70 hover:text-gold transition-colors"
        >
          <svg
            viewBox="0 0 20 20"
            width={16}
            height={16}
            fill="currentColor"
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
          Contents
        </button>
        {isOpen && (
          <nav className="mt-3 pl-4 border-l border-border/50">
            <ul className="space-y-2">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block font-body text-sm transition-colors ${
                      h.level > 2 ? "pl-3" : ""
                    } ${
                      activeId === h.id
                        ? "text-gold"
                        : "text-text-tertiary hover:text-text-secondary"
                    }`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop sidebar */}
      <nav className="hidden lg:block sticky top-24" aria-label="Table of contents">
        <p className="font-ui text-xs uppercase tracking-[0.15em] text-gold/60 mb-4">
          Contents
        </p>
        <ul className="space-y-2 border-l border-border/30">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block font-body text-sm pl-4 -ml-px border-l transition-colors ${
                  h.level > 2 ? "pl-7" : ""
                } ${
                  activeId === h.id
                    ? "border-gold text-gold"
                    : "border-transparent text-text-tertiary hover:text-text-secondary hover:border-text-tertiary"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
