export function searchFilter(data = [], searchText) {
  return searchText
    ? data.filter(
        (items) =>
          items?.title.toLowerCase().includes(searchText.toLowerCase()) ||
          items?.description.toLowerCase().includes(searchText.toLowerCase()) ||
          items?.category.toLowerCase().includes(searchText.toLowerCase())
      )
    : data;
}
