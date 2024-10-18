import { useState } from "react";
import {
  TbAdjustmentsAlt,
  TbSortDescending,
  TbWallet,
  TbWalletOff,
} from "react-icons/tb";
import IncomeExpenseList from "./IncomeExpenseList";

const IncomeFilterOptions = ["salary", "outsourcing", "bond", "dividend"];
const ExpenseFilterOptions = ["education", "food", "health"];

function SortAction({ type, isSort, onSorClick }) {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={onSorClick}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <TbSortDescending className="size-[18px] stroke-2" />
          {/* <TbSortAscending className="size-[18px] stroke-2" /> */}
        </button>
      </div>
      {isSort && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu2"
          aria-orientation="vertical"
          aria-labelledby="menu-button2"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Low to High
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
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

function FilterInput({ name }) {
  return (
    <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
        id={name}
      />
      <span className="ml-2 capitalize">{name}</span>
    </label>
  );
}

function FilterAction({ type, isFilter, onFilterClick }) {
  const [filterOptions, setFilterOptions] = useState(
    type == "expense" ? ExpenseFilterOptions : IncomeFilterOptions
  );
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
          {/* <TbAdjustmentsCheck className="size-[18px] stroke-2" /> */}
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
              <FilterInput key={option} name={option} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const IncomeExpenseLists = ({ transactions, onDeleteClick, onEdit }) => {
  const [isSort, setIsSort] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const handleSortClick = () => {
    setIsSort(!isSort);
    setIsFilter(false);
  };
  const handleFilterClick = () => {
    setIsSort(false);
    setIsFilter(!isFilter);
  };

  return (
    <div className="border rounded-md">
      {/* <!-- Header --> */}
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          {/* <!-- Icon --> */}

          <div
            className={`h-10 w-10  text-white rounded-md text-center object-center place-content-center text-base ${
              transactions.type == "expense" ? "bg-pink-600" : "bg-teal-600"
            }`}
          >
            {transactions.type == "expense" ? (
              <TbWalletOff className="mx-auto size-6" />
            ) : (
              <TbWallet className="mx-auto size-6" />
            )}
          </div>

          {/* <!-- Text --> */}
          <div>
            <h3 className="text-xl font-semibold capitalize leading-7 text-gray-800">
              {transactions.type}
            </h3>
          </div>
        </div>

        {/* <!-- Sorting and Filtering Column --> */}
        <div className="space-x-2">
          {/* <!-- Sorting --> */}
          <SortAction
            type={transactions.type}
            isSort={isSort}
            onSorClick={handleSortClick}
          />

          {/* <!-- Filtering --> */}
          <FilterAction
            type={transactions.type}
            isFilter={isFilter}
            onFilterClick={handleFilterClick}
          />
        </div>
        {/* <!-- Sorting and Filtering Column Ends --> */}
      </div>

      <div className="p-4 divide-y">
        {transactions.category.map((transaction) => (
          <IncomeExpenseList
            key={transaction.id}
            type={transactions.type}
            onEdit={onEdit}
            onDeleteClick={onDeleteClick}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeExpenseLists;
