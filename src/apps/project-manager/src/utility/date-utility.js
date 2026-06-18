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
export function formatDateToISO(dateString) {
  // Set the hours, minutes, and seconds
  const date = new Date(dateString);

  // Return the ISO string
  return date.toISOString();
}

export function formatDateToBrowserDefault(dateString) {
  if (!dateString) return null;
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Get the required components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0"); // Add 1 to the day of the year
  // Format and return the new date format
  return `${year}-${month}-${day}`;
}

export function formatDateToLong(dateString) {
  if (!dateString) return null;
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Get day, month, and year
  const day = date.getDate();
  const year = date.getFullYear();
  // Get the month name
  const month = monthNames[date.getMonth()];

  // Return the formatted date
  return `${day} ${month} ${year}`;
}
