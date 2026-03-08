import Image from "next/image";
import type { BookMeta } from "@/types";

interface BookCoverTileProps {
  book: BookMeta;
  className?: string;
}

const accentBorderMap: Record<string, string> = {
  gold: "border-gold/40",
  purple: "border-purple/40",
  red: "border-red/40",
};

const accentTextMap: Record<string, string> = {
  gold: "text-gold",
  purple: "text-purple",
  red: "text-red",
};

export function BookCoverTile({ book, className = "" }: BookCoverTileProps) {
  const borderAccent = accentBorderMap[book.accentColor] || accentBorderMap.gold;
  const textAccent = accentTextMap[book.accentColor] || accentTextMap.gold;

  return (
    <div
      className={`relative aspect-[2/3] bg-void-mid border ${borderAccent} rounded-lg overflow-hidden ${className}`}
    >
      {/* Character image */}
      <Image
        src={book.characterImage}
        alt={`${book.title} cover art`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top opacity-60 scale-110"
      />

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-void-dark via-void-dark/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-void-dark/30 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-ui text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
          Book {book.number}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-wide mb-4">
          {book.title}
        </h3>
        <p className={`font-ui text-sm uppercase tracking-wider ${textAccent}`}>
          The Ulysses Universe
        </p>
      </div>
    </div>
  );
}
