import React, { useContext } from "react";
import { FilterOnSearchContext } from "../providers/FilterOnSearchProvider";

export default function Search() {
  const { setSearch } = useContext(FilterOnSearchContext);

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <input
      onChange={handleSearch}
      type="text"
      placeholder="Search here"
      className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
    />
  );
}
