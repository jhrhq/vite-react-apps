export function formatDateToISO(dateString) {
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

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month name
  const month = monthNames[date.getMonth()];

  // Return the formatted date
  return `${day} ${month} ${year}`;
}
