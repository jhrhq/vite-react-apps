import { useOutsideClick } from "@/hooks";
import { actionTypes, useProduct } from "@/providers/ProductProvider";
import { useRef, useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

function SortOption({ title, value, onChangeOption }) {
  return (
    <a
      className="hover:cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
      role="menuitem"
      tabIndex="-1"
      type="button"
      onClick={() => onChangeOption(value)}
      id="menu-item-0"
    >
      {title}
    </a>
  );
}

export default function Sort() {
  const [open, setOpen] = useState(false);
  const sortingRef = useRef(null);

  const { dispatch } = useProduct();

  function handleToggleDropDown() {
    setOpen(!open);
  }
  function handleSelectOption(value) {
    dispatch({
      type: actionTypes.SET_SORT_OPTION,
      payload: value,
    });
    setOpen(false);
  }

  useOutsideClick(sortingRef, () => setOpen(false));

  return (
    <div className="relative inline-block text-left" ref={sortingRef}>
      <div>
        <button
          type="button"
          className="inline-flex cursor-pointer w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleToggleDropDown}
        >
          Sort
          <HiMiniChevronDown className="-mr-1 size-5 text-gray-400" />
        </button>
      </div>

      {open && (
        <div
          className="absolute z-10 mt-2 left-5 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <SortOption
              title={"Low to High"}
              value={"asc"}
              onChangeOption={handleSelectOption}
            />
            <SortOption
              title={"High to Low"}
              value="desc"
              onChangeOption={handleSelectOption}
            />
          </div>
        </div>
      )}
    </div>
  );
}
