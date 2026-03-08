import Link from "next/link";
import type { CharacterMeta } from "@/types";

interface CharacterCardProps {
  character: CharacterMeta;
}

const accentBorderMap: Record<string, string> = {
  gold: "hover:border-gold/40",
  blue: "hover:border-blue/40",
  purple: "hover:border-purple/40",
};

const accentBgMap: Record<string, string> = {
  gold: "from-gold/20 to-gold/5",
  blue: "from-blue/20 to-blue/5",
  purple: "from-purple/20 to-purple/5",
};

export function CharacterCard({ character }: CharacterCardProps) {
  const borderAccent =
    accentBorderMap[character.accentColor] || accentBorderMap.gold;
  const bgAccent = accentBgMap[character.accentColor] || accentBgMap.gold;

  return (
    <Link
      href={`/universe/characters#${character.slug}`}
      className={`group block bg-void-dark border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] ${borderAccent}`}
    >
      {/* Avatar placeholder */}
      <div className="relative aspect-square bg-void-mid overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-t ${bgAccent} opacity-60`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl text-text-primary/20">
            {character.name.charAt(0)}
          </span>
        </div>
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
