"use client";

import { useState } from "react";

interface CopyHexProps {
  colour: {
    name: string;
    hex: string;
    desc: string;
  };
}

export function CopyHex({ colour }: CopyHexProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(colour.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback for non-secure contexts
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group bg-void-dark border border-border rounded-lg overflow-hidden text-left transition-all hover:border-gold/20"
    >
      <div
        className="h-20 w-full"
        style={{ backgroundColor: colour.hex }}
      />
      <div className="p-3">
        <p className="font-ui text-sm text-text-primary font-semibold">
          {colour.name}
        </p>
        <p className="font-mono text-xs text-text-tertiary group-hover:text-gold transition-colors">
          {copied ? "Copied!" : colour.hex}
        </p>
        <p className="font-ui text-[10px] text-text-tertiary mt-1">
          {colour.desc}
        </p>
      </div>
    </button>
  );
}
