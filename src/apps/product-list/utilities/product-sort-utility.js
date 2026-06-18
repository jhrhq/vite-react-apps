export function productSort(data = [], sortOption) {
  if (sortOption === "asc") {
    return data.sort((a, b) => a.price - b.price); // Sort low to high
  } else if (sortOption === "desc") {
    return data.sort((a, b) => b.price - a.price); // Sort high to low
  }
}
