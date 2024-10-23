const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// utils/formatDate.js
export function formatDate(dateString) {
  const date = new Date(dateString);
  return `${monthNames[date.getMonth()]} ${String(date.getDate()).padStart(
    2,
    "0"
  )}, ${date.getFullYear()}`;
}

// utils/parseDate.js
export function parseDate(dateString) {
  // Set the hours, minutes, and seconds
  const date = new Date(dateString);

  // Return the ISO string
  return date.toISOString();
}
