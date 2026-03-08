"use client";

import { useState } from "react";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section id="faq" className="my-12 scroll-mt-24">
      <h2 className="font-display text-2xl text-text-primary tracking-wide mb-6">
        <a href="#faq" className="hover:text-gold transition-colors">
          Frequently asked questions
        </a>
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-void-dark border border-border/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left group"
                aria-expanded={isOpen}
              >
                <span className="font-body text-sm text-text-primary group-hover:text-gold transition-colors pr-4">
                  {item.question}
                </span>
                <svg
                  viewBox="0 0 20 20"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className={`w-4 h-4 text-text-tertiary shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 border-t border-border/30">
                  <p className="font-body text-sm text-text-secondary leading-relaxed pt-3">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
