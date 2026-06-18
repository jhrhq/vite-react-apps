import { useState } from "react";
import { TbAdjustmentsAlt } from "react-icons/tb";

const IncomeFilterOptions = ["salary", "outsourcing", "bond", "dividend"];
const ExpenseFilterOptions = ["education", "food", "health"];

function FilterInput({ name, checked, onCheckBoxChange }) {
  return (
    <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 rounded-md text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-offset-white dark:focus:ring-offset-gray-800"
        id={name}
        checked={checked}
        onChange={() => onCheckBoxChange(name)}
      />
      <span className="ml-2 capitalize">{name}</span>
    </label>
  );
}

export default function FilterAction({
  type,
  isFilter,
  selectedOptions,
  onFilterClick,
  onFilter,
}) {
  const [filterOptions, setFilterOptions] = useState(
    type == "expense" ? ExpenseFilterOptions : IncomeFilterOptions
  );

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={onFilterClick}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          id="filter-button-2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <TbAdjustmentsAlt className="size-[18px] stroke-2" />
        </button>
      </div>
      {isFilter && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button-2"
          tabIndex="-1"
          id="filter-dropdown2"
        >
          <div className="py-1 flex flex-col" role="none">
            {filterOptions.map((option) => (
              <FilterInput
                key={option}
                name={option}
                checked={selectedOptions.includes(option)}
                onCheckBoxChange={onFilter}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}