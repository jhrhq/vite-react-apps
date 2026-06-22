import { TbPencil, TbTrash } from "react-icons/tb";

function IncomeExpenseList({ type, transaction, onDeleteClick, onEdit }) {
  return (
    <div className="flex justify-between items-center py-2 relative group cursor-pointer">
      <div>
        <h3 className="text-base font-medium leading-7 text-gray-600 capitalize dark:text-slate-400">
          {transaction.category}
        </h3>
        <p className="text-xs text-gray-600 dark:text-slate-400">{transaction.date}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-base font-semibold text-gray-dark:text-slate-100600 transition-all group-hover:-translate-x-14 dark:text-slate-400">
          BDT {transaction.amount}
        </p>
      </div>

      <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
        <button
          onClick={() => onEdit({ type, ...transaction })}
          className="hover:text-teal-600 dark:text-slate-100"
          role="button"
          title="Edit Button"
        >
          <TbPencil className="size-[18px]" />
        </button>

        <button
          onClick={() => onDeleteClick({ type, ...transaction })}
          className="hover:text-red-600 dark:text-slate-100"
          role="button"
          title="Delete"
        >
          <TbTrash className="size-[18px]" />
        </button>
      </div>
    </div>
  );
}

export default IncomeExpenseList;
