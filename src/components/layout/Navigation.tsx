"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, type NavLink } from "@/lib/constants";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on Escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (mobileOpen) setMobileOpen(false);
      if (openDropdown) setOpenDropdown(null);
    }
  }, [mobileOpen, openDropdown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen, handleEscape]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (openDropdown && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [openDropdown]);

  const renderDesktopLink = (link: NavLink) => {
    const isActive = !link.external && pathname.startsWith(link.href);
    const hasSubmenu = link.submenu && link.submenu.length > 0;
    const isOpen = openDropdown === link.label;

    if (hasSubmenu) {
      return (
        <div key={link.href} className="relative">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown(isOpen ? null : link.label);
            }}
            className={`font-ui font-semibold text-sm uppercase tracking-[0.08em] transition-colors relative py-1 flex items-center gap-1 ${
              isOpen ? "text-gold" : "text-text-secondary hover:text-text-primary"
            }`}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {link.label}
            <span className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 mt-3 min-w-[300px] bg-void-dark border border-gold/30 rounded-lg shadow-2xl py-2 z-50">
              {link.submenu!.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpenDropdown(null)}
                  className="flex items-center justify-between gap-4 px-4 py-2.5 text-text-primary hover:bg-gold/[0.06] hover:text-gold transition-colors"
                >
                  <span className="font-ui font-semibold text-sm uppercase tracking-[0.08em] whitespace-nowrap">{item.label}</span>
                  {item.description && (
                    <span className="font-ui text-[10px] text-gold-dim uppercase tracking-[0.15em] whitespace-nowrap">
                      {item.description}
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        className={`font-ui font-semibold text-sm uppercase tracking-[0.08em] transition-colors relative py-1 ${
          isActive
            ? "text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gold"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        {link.label}
      </Link>
    );
  };

  const renderMobileLink = (link: NavLink) => {
    const isActive = !link.external && pathname.startsWith(link.href);
    const hasSubmenu = link.submenu && link.submenu.length > 0;

    if (hasSubmenu) {
      return (
        <div key={link.href} className="flex flex-col items-center gap-4">
          <span className={`font-ui font-semibold text-lg uppercase tracking-[0.1em] ${isActive ? "text-gold" : "text-text-primary"}`}>
            {link.label}
          </span>
          <div className="flex flex-col items-center gap-3 pl-4 border-l border-border/40 ml-2">
            {link.submenu!.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className="font-ui text-sm uppercase tracking-[0.08em] text-text-secondary hover:text-gold transition-colors"
              >
                {item.label}
                {item.description && (
                  <span className="block text-[10px] text-gold-dim mt-0.5">{item.description}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={link.external ? "noopener noreferrer" : undefined}
        onClick={() => setMobileOpen(false)}
        className={`font-ui font-semibold text-lg uppercase tracking-[0.1em] ${isActive ? "text-gold" : "text-text-primary"}`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void-black/80 backdrop-blur-md border-b border-border/50">
      <nav
        className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16"
        aria-label="Main navigation"
        ref={dropdownRef}
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
          {NAV_LINKS.map(renderDesktopLink)}
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
        className={`md:hidden fixed inset-0 top-16 bg-void-black overflow-y-auto transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? ("" as unknown as boolean) : undefined}
      >
        <div className="flex flex-col items-center gap-8 pt-12 pb-16 px-6">
          {NAV_LINKS.map(renderMobileLink)}
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
