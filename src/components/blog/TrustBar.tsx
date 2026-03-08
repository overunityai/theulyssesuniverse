const stats = [
  { value: "3", label: "Books in the trilogy" },
  { value: "129K", label: "Words written" },
  { value: "120+", label: "Crew members aboard" },
  { value: "24", label: "Myths reimagined" },
];

export function TrustBar() {
  return (
    <div className="bg-void-dark border border-border/50 rounded-lg p-4 my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="block font-display text-lg text-gold tracking-wide">
              {stat.value}
            </span>
            <span className="font-ui text-xs text-text-tertiary uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
