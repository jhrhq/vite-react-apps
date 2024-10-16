import React from "react";
import { TbPencil, TbTrash } from "react-icons/tb";

const IncomeExpenseList = ({ trackerList }) => {
  return (
    <div className="flex justify-between items-center py-2 relative group cursor-pointer">
      <div>
        <h3 className="text-base font-medium leading-7 text-gray-600 capitalize">
          {trackerList.name}
        </h3>
        <p className="text-xs text-gray-600">{trackerList.date}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
          BDT {trackerList.cost}
        </p>
      </div>

      <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
        <button
          className="hover:text-teal-600"
          role="button"
          title="Edit Button"
        >
          <TbPencil className="size-[18px]" />
        </button>

        <button className="hover:text-red-600" role="button" title="Delete">
          <TbTrash className="size-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default IncomeExpenseList;
