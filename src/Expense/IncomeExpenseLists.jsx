import { useState } from "react";
import { TbWallet, TbWalletOff } from "react-icons/tb";
import FilterAction from "./FilterAction";
import IncomeExpenseList from "./IncomeExpenseList";
import SortAction from "./SortAction";

const IncomeExpenseLists = ({
  transactions,
  onDeleteClick,
  onEdit,
  onSort,
  onFilter,
}) => {
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
            onSort={onSort}
          />

          {/* <!-- Filtering --> */}
          <FilterAction
            type={transactions.type}
            isFilter={isFilter}
            onFilterClick={handleFilterClick}
            onFilter={onFilter}
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
