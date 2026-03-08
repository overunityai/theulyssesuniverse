export default function Loading() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
        <p className="font-ui text-sm uppercase tracking-[0.1em] text-text-tertiary">
          Loading...
        </p>
      </div>
    </section>
  );
}
