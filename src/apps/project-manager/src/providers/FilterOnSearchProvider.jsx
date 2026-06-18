import { createContext, useState } from "react";

export const FilterOnSearchContext = createContext();

export default function FilterOnSearchProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <FilterOnSearchContext.Provider value={{ search, setSearch }}>
      {children}
    </FilterOnSearchContext.Provider>
  );
}
