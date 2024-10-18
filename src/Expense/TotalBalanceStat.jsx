import React from "react";

function Stat({ stat }) {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
      <dd
        className={`order-first text-xl font-semibold tracking-tight  sm:text-3xl ${
          stat.type == "balance" && stat.amount < 0
            ? "text-red-700"
            : "text-gray-700"
        }`}
      >
        BDT {stat.amount}
      </dd>
    </div>
  );
}

function TotalBalanceStat({ totalBalance, totalIncome, totalExpense }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <Stat stat={totalBalance} />
          <Stat stat={totalIncome} />
          <Stat stat={totalExpense} />
        </dl>
      </div>
    </div>
  );
}

export default TotalBalanceStat;
