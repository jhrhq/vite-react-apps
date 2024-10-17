export function formatDateToISO(dateString) {
  if (!dateString) return null;

  // Split the input string into parts
  const [day, monthName, year] = dateString.split(" ");

  // Array of month names to find the month index
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

  // Get the month index
  const monthIndex = monthNames.indexOf(monthName);

  // Create a new Date object
  const date = new Date(year, monthIndex, day);

  // Return the formatted date as YYYY-MM-DD
  return date.toISOString().split("T")[0]; // Get only the date part
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
