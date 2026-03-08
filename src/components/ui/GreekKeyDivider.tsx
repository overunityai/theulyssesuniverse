interface GreekKeyDividerProps {
  className?: string;
}

export function GreekKeyDivider({ className = "" }: GreekKeyDividerProps) {
  return (
    <div
      className={`flex items-center justify-center py-8 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-md h-5 opacity-40"
      >
        <defs>
          <pattern
            id="greek-key"
            x="0"
            y="0"
            width="40"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 10h10v-10h20v10h10M10 10v10h20v-10"
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="400" height="20" fill="url(#greek-key)" />
      </svg>
    </div>
  );
}
