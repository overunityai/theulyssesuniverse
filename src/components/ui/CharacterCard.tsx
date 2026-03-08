import Link from "next/link";
import Image from "next/image";
import type { CharacterMeta } from "@/types";

interface CharacterCardProps {
  character: CharacterMeta;
}

const accentBorderMap: Record<string, string> = {
  gold: "hover:border-gold/40",
  blue: "hover:border-blue/40",
  purple: "hover:border-purple/40",
};

export function CharacterCard({ character }: CharacterCardProps) {
  const borderAccent =
    accentBorderMap[character.accentColor] || accentBorderMap.gold;

  return (
    <Link
      href={`/universe/characters#${character.slug}`}
      className={`group block bg-void-dark border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] ${borderAccent}`}
    >
      {/* Character portrait */}
      <div className="relative aspect-square bg-void-mid overflow-hidden">
        <Image
          src={character.imagePath}
          alt={`${character.name} - ${character.role}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void-dark to-transparent h-1/3" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg text-text-primary mb-1">
          {character.name}
        </h3>
        <p className="font-ui text-xs uppercase tracking-[0.1em] text-gold mb-3">
          {character.role}
        </p>
        <p className="font-body text-text-secondary text-sm leading-relaxed line-clamp-3">
          {character.description.split(".")[0]}.
        </p>
      </div>
    </Link>
  );
}
