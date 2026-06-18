import { formatDistanceToNowStrict, parseISO } from "date-fns";

export function formatRelativeTime(date: string | Date | undefined): string {
  if (!date) return "--";

  try {
    const dateObj = typeof date === "string" ? parseISO(date) : date;

    return formatDistanceToNowStrict(dateObj, {
      addSuffix: true, // still gives "ago" / "in"
    });
  } catch {
    return "Invalid date";
  }
}

export function formattedDate(dateParam: string) {
  const date = new Date(dateParam);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
