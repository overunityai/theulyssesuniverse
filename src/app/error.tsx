"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl text-text-primary tracking-wide mb-4">
          Something went wrong
        </h1>
        <p className="font-body text-text-secondary mb-8">
          A system malfunction has occurred. The Odyssey's crew is working on it.
        </p>
        <button
          onClick={() => reset()}
          className="font-ui font-semibold text-sm uppercase tracking-[0.05em] bg-gold text-void-black px-6 py-3 rounded-lg hover:bg-gold-light transition-colors"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
