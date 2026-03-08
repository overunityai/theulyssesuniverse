import type { Metadata } from "next";
import { EmailCapture } from "@/components/ui/EmailCapture";

export const metadata: Metadata = {
  title: "Read Chapter 1 Free - The Blinding",
  description:
    "Read the first chapter of The Blinding free. A blind admiral, a cursed ship, and the journey that begins when war ends.",
};

export default function FreeChapterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        {/* Minimal branding */}
        <a href="/" className="inline-block mb-12">
          <span className="font-display text-lg text-gold tracking-wider">
            The Ulysses Universe
          </span>
        </a>

        {/* Headline */}
        <h1 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-6">
          Read Chapter 1 of The Blinding - Free
        </h1>

        <p className="font-body text-text-secondary leading-relaxed mb-4">
          The war is over. The celebrations are done. And Admiral Ulysses Theron
          is about to make the choice that costs him everything.
        </p>

        <p className="font-body text-text-secondary leading-relaxed mb-8">
          Chapter 1 opens on the bridge of the Odyssey at Troy Station. Enter
          your email and it's yours - delivered straight to your inbox. No
          strings, no login, no catch.
        </p>

        {/* Form */}
        <div className="bg-void-dark border border-border rounded-lg p-8 mb-8">
          <EmailCapture />
        </div>

        {/* Trust signals */}
        <div className="space-y-2">
          <p className="font-ui text-xs text-text-tertiary">
            Free. No spam. Unsubscribe any time.
          </p>
          <p className="font-body text-xs text-text-tertiary">
            Delivered as a PDF via email. Your data is handled per our{" "}
            <a href="/privacy" className="text-gold/60 hover:text-gold transition-colors">
              privacy policy
            </a>
            .
          </p>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <a
            href="/"
            className="font-ui text-sm text-text-tertiary hover:text-gold transition-colors"
          >
            &larr; Back to theulyssesuniverse.com
          </a>
        </div>
      </div>
    </div>
  );
}
