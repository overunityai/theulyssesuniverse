interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-void-dark border border-border rounded-lg p-6 ${
        hover
          ? "transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
