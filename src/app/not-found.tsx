import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="mx-auto max-w-xl px-6 text-center">
        {/* Error code */}
        <p className="font-display text-8xl md:text-9xl text-gold/10 mb-4">
          404
        </p>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
          Lost in the Void
        </h1>

        {/* Description */}
        <p className="font-body text-text-secondary leading-relaxed mb-8">
          The navigation data's been corrupted. This page doesn't exist - or
          maybe it did once, before Poseidon got to it. Either way, you're off
          course.
        </p>

        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gold text-void-black font-ui font-semibold text-sm uppercase tracking-wider rounded-md transition-all hover:bg-gold-light"
          >
            Return to Base
          </Link>
          <Link
            href="/universe"
            className="inline-flex items-center justify-center px-6 py-3 border border-gold/50 text-gold font-ui font-semibold text-sm uppercase tracking-wider rounded-md transition-all hover:bg-gold/10"
          >
            Explore the Universe
          </Link>
        </div>

        {/* Ship status flavour */}
        <div className="mt-16 bg-void-dark border border-border rounded-lg p-4 max-w-sm mx-auto">
          <p className="font-mono text-xs text-text-tertiary">
            <span className="text-red">WARNING</span> // ROUTE_NOT_FOUND
          </p>
          <p className="font-mono text-xs text-text-tertiary mt-1">
            Ship log: "I told them to update the star charts." - Echo
          </p>
        </div>
      </div>
    </div>
  );
}
