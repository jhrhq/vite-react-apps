import { TbSortDescending } from "react-icons/tb";

export default function SortAction({ type, isSort, onSorClick, onSort }) {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={onSorClick}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          id="menu-button2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <TbSortDescending className="size-[18px] stroke-2" />
        </button>
      </div>
      {isSort && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none"
          role="menu2"
          aria-orientation="vertical"
          aria-labelledby="menu-button2"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              onClick={() => onSort(type, "lowToHigh")}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Low to High
            </a>
            <a
              onClick={() => onSort(type, "highToLow")}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              High to Low
            </a>
          </div>
        </div>
      )}
    </div>
  );
}