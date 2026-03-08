import Link from "next/link";
import type { BookMeta } from "@/types";

interface BookCardProps {
  book: BookMeta;
}

const accentMap: Record<string, string> = {
  gold: "border-gold/30 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
  purple:
    "border-purple/30 hover:border-purple/60 hover:shadow-[0_0_30px_rgba(74,0,128,0.2)]",
  red: "border-red/30 hover:border-red/60 hover:shadow-[0_0_30px_rgba(255,51,51,0.2)]",
};

const accentTextMap: Record<string, string> = {
  gold: "text-gold",
  purple: "text-purple",
  red: "text-red",
};

export function BookCard({ book }: BookCardProps) {
  const accent = accentMap[book.accentColor] || accentMap.gold;
  const accentText = accentTextMap[book.accentColor] || accentTextMap.gold;

  return (
    <Link
      href={`/books/${book.slug}`}
      className={`group block bg-void-dark border rounded-lg overflow-hidden transition-all duration-300 ${accent}`}
    >
      {/* Placeholder cover */}
      <div className="relative aspect-[2/3] bg-void-mid flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-void-dark/80 to-transparent z-10" />
        <div className="relative z-20 text-center px-6">
          <p className="font-ui text-xs uppercase tracking-[0.15em] text-text-secondary mb-2">
            Book {book.number}
          </p>
          <h3 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide">
            {book.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
          {book.hook}
        </p>
        <span
          className={`font-ui font-semibold text-sm uppercase tracking-[0.05em] ${accentText} group-hover:translate-x-1 transition-transform inline-block`}
        >
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
