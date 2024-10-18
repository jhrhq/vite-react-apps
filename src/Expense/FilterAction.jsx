import { useState } from "react";
import { TbAdjustmentsAlt } from "react-icons/tb";

const IncomeFilterOptions = ["salary", "outsourcing", "bond", "dividend"];
const ExpenseFilterOptions = ["education", "food", "health"];

function FilterInput({ name, checked, onCheckBoxChange }) {
  function handleBoxCheck(name) {
    onCheckBoxChange(name);
  }
  return (
    <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
        id={name}
        checked={checked}
        onChange={() => handleBoxCheck(name)}
      />
      <span className="ml-2 capitalize">{name}</span>
    </label>
  );
}

export default function FilterAction({
  type,
  isFilter,
  onFilterClick,
  onFilter,
}) {
  const [filterOptions, setFilterOptions] = useState(
    type == "expense" ? ExpenseFilterOptions : IncomeFilterOptions
  );
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleCheckBoxChange(option) {
    setSelectedOptions((selectedOptions) => [
      ...selectedOptions,
      option.toLowerCase(),
    ]);
    onFilter(type, selectedOptions);
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={onFilterClick}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button-2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <TbAdjustmentsAlt className="size-[18px] stroke-2" />
        </button>
      </div>
      {isFilter && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button-2"
          tabIndex="-1"
          id="filter-dropdown2"
        >
          <div className="py-1" role="none">
            {filterOptions.map((option) => (
              <FilterInput
                key={option}
                name={option}
                checked={selectedOptions.includes(option)}
                onCheckBoxChange={handleCheckBoxChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
