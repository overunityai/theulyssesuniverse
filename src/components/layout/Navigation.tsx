"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, NAV_CTA, type NavLink } from "@/lib/constants";

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
              {link.submenu!.map((item, idx) => {
                const prev = idx > 0 ? link.submenu![idx - 1] : null;
                const showSection = item.section && item.section !== "Index" && (!prev || prev.section !== item.section);
                const isAll = item.section === "Index";
                return (
                  <div key={item.href}>
                    {showSection && (
                      <div className="font-ui font-bold text-[9px] uppercase tracking-[0.28em] text-gold/55 px-4 pt-3 pb-1 mt-1 border-t border-gold/8">
                        {item.section}
                      </div>
                    )}
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center justify-between gap-4 px-4 py-2.5 text-text-primary hover:bg-gold/[0.06] hover:text-gold transition-colors ${isAll ? "border-b border-gold/15 pb-3 mb-1" : ""}`}
                    >
                      <span className="font-ui font-semibold text-sm uppercase tracking-[0.08em] whitespace-nowrap">{item.label}</span>
                      {item.description && (
                        <span className="font-ui text-[10px] text-gold-dim uppercase tracking-[0.15em] whitespace-nowrap">
                          {item.description}
                        </span>
                      )}
                    </a>
                  </div>
                );
              })}
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
        <div key={link.href} className="flex flex-col items-stretch gap-3 w-full max-w-xs">
          <span className={`font-ui font-semibold text-lg uppercase tracking-[0.1em] text-center ${isActive ? "text-gold" : "text-text-primary"}`}>
            {link.label}
          </span>
          <div className="flex flex-col gap-2 pl-4 border-l border-border/40 ml-2">
            {link.submenu!.map((item, idx) => {
              const prev = idx > 0 ? link.submenu![idx - 1] : null;
              const showSection = item.section && item.section !== "Index" && (!prev || prev.section !== item.section);
              const isAll = item.section === "Index";
              return (
                <div key={item.href}>
                  {showSection && (
                    <div className="font-ui font-bold text-[10px] uppercase tracking-[0.28em] text-gold/60 pt-3 pb-1">
                      {item.section}
                    </div>
                  )}
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between gap-3 py-1.5 font-ui text-sm uppercase tracking-[0.08em] text-text-secondary hover:text-gold transition-colors ${isAll ? "pb-3 mb-1 border-b border-gold/15" : ""}`}
                  >
                    <span>{item.label}</span>
                    {item.description && (
                      <span className="text-[10px] text-gold-dim font-ui tracking-[0.15em]">{item.description}</span>
                    )}
                  </a>
                </div>
              );
            })}
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
    <>
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
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(renderDesktopLink)}
          {NAV_CTA.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className={
                cta.style === "primary"
                  ? "font-ui font-semibold text-sm uppercase tracking-[0.05em] bg-gold text-void-black px-4 py-2 rounded-lg hover:bg-gold-light transition-colors whitespace-nowrap"
                  : "font-ui font-semibold text-sm uppercase tracking-[0.05em] border border-gold/45 text-gold px-4 py-2 rounded-lg hover:bg-gold/10 hover:border-gold transition-colors whitespace-nowrap"
              }
            >
              {cta.label} ↗
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
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
      </header>

      {/* Mobile slide-out panel - MUST be outside <header> because the header
          has backdrop-filter, which (on iOS Safari) creates a containing block
          that constrains position:fixed descendants. Hardcoded colours so
          tailwind misconfigurations cannot blank the menu out. */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 45,
          backgroundColor: "#0A0A0F",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          pointerEvents: mobileOpen ? "auto" : "none",
          display: "block",
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center gap-8 pt-12 pb-16 px-6" style={{ color: "#E8E6E3" }}>
          {NAV_LINKS.map(renderMobileLink)}
          {NAV_CTA.map((cta, i) => (
            <Link
              key={cta.href}
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileOpen(false)}
              className="font-ui font-semibold text-lg uppercase tracking-[0.05em] px-8 py-3 rounded-lg"
              style={
                cta.style === "primary"
                  ? { backgroundColor: "#D4AF37", color: "#0A0A0F", marginTop: i === 0 ? 16 : 0 }
                  : { border: "1px solid rgba(212,175,55,0.45)", color: "#D4AF37" }
              }
            >
              {cta.label} ↗
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
