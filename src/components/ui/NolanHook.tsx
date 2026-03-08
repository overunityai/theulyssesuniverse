"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NOLAN_HOOK_EXPIRY } from "@/lib/constants";

export function NolanHook() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Date.now() < NOLAN_HOOK_EXPIRY) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <section className="relative bg-void-dark/60 border-y border-border/30">
      <div className="mx-auto max-w-[1200px] px-6 py-8 text-center">
        <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          AI is reshaping our world.{" "}
          <span className="text-text-primary font-semibold">The Odyssey</span>{" "}
          is returning to the big screen. Homer's 3,000-year-old story has never
          felt more relevant - or more dangerous.
        </p>
        <Link
          href="/blog/every-odyssey-adaptation-timeline"
          className="inline-block mt-4 font-ui font-semibold text-sm uppercase tracking-[0.05em] text-gold hover:text-gold-light transition-colors"
        >
          3,000 years of The Odyssey &rarr;
        </Link>
      </div>
    </section>
  );
}
