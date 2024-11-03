import { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

function SortOption({ title, onChangeOption }) {
  return (
    <a
      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
      role="menuitem"
      tabIndex="-1"
      type="button"
      onClick={onChangeOption}
      id="menu-item-0"
    >
      {title}
    </a>
  );
}

export default function Sort() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }
  function handleSelectOption() {
    console.log("selectsort");
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Sort
          <HiMiniChevronDown className="-mr-1 size-5 text-gray-400" />
        </button>
      </div>

      {open && (
        <div
          className="absolute z-10 mt-2 left-5 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <SortOption
              title={"Low to High"}
              onChangeOption={handleSelectOption}
            />
            <SortOption
              title={"High to Low"}
              onChangeOption={handleSelectOption}
            />
          </div>
        </div>
      )}
    </div>
  );
}
