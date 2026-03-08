"use client";

import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // TODO: Connect to MailerLite API
    // For now, simulate success
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto text-center" role="region" aria-label="Newsletter signup">
      {status === "success" ? (
        <div className="py-8" aria-live="polite">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-8 h-8 text-gold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-display text-xl text-gold mb-2">
            Welcome aboard
          </h3>
          <p className="font-body text-text-secondary text-sm">
            Check your inbox for Chapter 1 of The Blinding.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-void-dark border border-border rounded-lg text-text-primary placeholder:text-text-tertiary font-body text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-gold text-void-black font-ui font-semibold text-sm uppercase tracking-[0.05em] rounded-lg hover:bg-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? "Joining..." : "Get Chapter 1 Free"}
            </button>
          </div>
          <p className="text-text-tertiary text-xs font-body">
            No spam. Unsubscribe anytime. Your data stays private.
          </p>
        </form>
      )}
    </div>
  );
}
