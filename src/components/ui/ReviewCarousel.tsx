"use client";

interface Review {
  text: string;
  author: string;
  source: string;
  rating: number;
}

const PLACEHOLDER_REVIEWS: Review[] = [
  {
    text: "The Expanse meets Circe. I couldn't put it down.",
    author: "ARC Reader",
    source: "Early review",
    rating: 5,
  },
  {
    text: "Polyphemus as a rogue AI is genuinely terrifying. Homer would approve.",
    author: "ARC Reader",
    source: "Early review",
    rating: 5,
  },
  {
    text: "Finally, a Penelope who doesn't just wait. She governs, she schemes, she fights.",
    author: "ARC Reader",
    source: "Early review",
    rating: 5,
  },
  {
    text: "Echo is the best AI companion since HK-47. Quotable, loyal, and heartbreaking.",
    author: "ARC Reader",
    source: "Early review",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-border"}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCarousel() {
  return (
    <div className="relative">
      {/* Scroll container */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
        {PLACEHOLDER_REVIEWS.map((review, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[300px] md:w-[360px] bg-void-dark border border-border rounded-lg p-6 transition-all duration-300 hover:border-gold/30"
          >
            <StarRating rating={review.rating} />
            <blockquote className="mt-4 font-body text-text-primary text-sm leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="font-ui text-sm text-text-secondary">
                {review.author}
              </p>
              <p className="font-ui text-xs text-text-tertiary">
                {review.source}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-4 w-6 bg-gradient-to-r from-void-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-4 w-6 bg-gradient-to-l from-void-black to-transparent pointer-events-none" />
    </div>
  );
}
