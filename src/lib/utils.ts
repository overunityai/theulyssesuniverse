/**
 * Format an ISO date string to a human-readable format.
 * Uses British English locale (en-GB) for day-month-year ordering.
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
