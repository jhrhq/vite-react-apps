/** biome-ignore-all lint/correctness/noUnusedVariables: false */
import { formatDistanceToNow, parseISO } from "date-fns";

/**
 * Converts a date (ISO string or Date object) into a relative string.
 * Example: "2024-03-10T10:00:00Z" -> "2 days ago"
 */
export function formatRelativeTime(date: string | Date | undefined): string {
  if (!date) return "--";

  try {
    const dateObj = typeof date === "string" ? parseISO(date) : date;

    return formatDistanceToNow(dateObj, {
      addSuffix: true, // This adds the "ago" or "in" suffix
    });
  } catch (error) {
    return "Invalid date";
  }
}
