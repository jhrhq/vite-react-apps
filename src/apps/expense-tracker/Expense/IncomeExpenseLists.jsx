import { useState } from "react";
import { TbWallet, TbWalletOff } from "react-icons/tb";
import FilterAction from "./FilterAction";
import IncomeExpenseList from "./IncomeExpenseList";
import SortAction from "./SortAction";

function IncomeExpenseLists({ transactions, onDeleteClick, onEdit, onSort }) {
  const [isSort, setIsSort] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);

  function handleFilter(option) {
    if (filterOptions.includes(option)) {
      const filtered = filterOptions.filter((item) => item != option);
      setFilterOptions(filtered);
    } else {
      const selected = [...filterOptions, option];
      setFilterOptions(selected);
    }
  }

  const handleSortClick = () => {
    setIsSort(!isSort);
    setIsFilter(false);
  };

  const handleFilterClick = () => {
    setIsSort(false);
    setIsFilter(!isFilter);
  };

  const filteredTransactions =
    filterOptions.length > 0
      ? transactions.category.filter((i) => filterOptions.includes(i.category))
      : transactions.category;

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md transition-colors duration-200">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] dark:bg-gray-800 py-4 px-4 rounded-md transition-colors duration-200">
        <div className="flex items-center gap-2">
          <div
            className={`h-10 w-10 text-white rounded-md text-center object-center place-content-center text-base ${
              transactions.type == "expense" ? "bg-pink-600 dark:bg-pink-700" : "bg-teal-600 dark:bg-teal-700"
            }`}
          >
            {transactions.type == "expense" ? (
              <TbWalletOff className="mx-auto size-6" />
            ) : (
              <TbWallet className="mx-auto size-6" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold capitalize leading-7 text-gray-800 dark:text-gray-100">
              {transactions.type}
            </h3>
          </div>
        </div>
        <div className="space-x-2">
          <SortAction type={transactions.type} isSort={isSort} onSorClick={handleSortClick} onSort={onSort} />
          <FilterAction
            type={transactions.type}
            selectedOptions={filterOptions}
            isFilter={isFilter}
            onFilterClick={handleFilterClick}
            onFilter={handleFilter}
          />
        </div>
      </div>
      <div className="p-4 divide-y divide-gray-200 dark:divide-gray-700">
        {filteredTransactions.map((transaction) => (
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
}

export default IncomeExpenseLists;