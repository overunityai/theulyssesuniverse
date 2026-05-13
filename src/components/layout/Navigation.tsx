"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on Escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileOpen) {
      setMobileOpen(false);
    }
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen, handleEscape]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void-black/80 backdrop-blur-md border-b border-border/50">
      <nav
        className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-gold tracking-[0.1em] text-lg font-bold hover:text-gold-light transition-colors"
        >
          ULYSSES UNIVERSE
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-ui font-semibold text-sm uppercase tracking-[0.08em] transition-colors relative py-1 ${
                  isActive
                    ? "text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="https://www.amazon.co.uk/dp/B0GNFQM4FN"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui font-semibold text-sm uppercase tracking-[0.05em] bg-gold text-void-black px-4 py-2 rounded-lg hover:bg-gold-light transition-colors"
          >
            Buy Book One Today
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-primary transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile slide-out panel */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-void-black/95 backdrop-blur-lg transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? ("" as unknown as boolean) : undefined}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-ui font-semibold text-lg uppercase tracking-[0.1em] ${
                  isActive ? "text-gold" : "text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="https://www.amazon.co.uk/dp/B0GNFQM4FN"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="font-ui font-semibold text-lg uppercase tracking-[0.05em] bg-gold text-void-black px-8 py-3 rounded-lg mt-4"
          >
            Buy Book One Today
          </Link>
        </div>
      </div>
    </header>
  );
}
