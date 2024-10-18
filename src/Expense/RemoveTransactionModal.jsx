import React from "react";

export default function RemoveTransactionModal({ onDelete, onCloseClick }) {
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <div className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Confirm Transaction Delete
        </h2>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="button"
            className="rounded bg-red-600  px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
