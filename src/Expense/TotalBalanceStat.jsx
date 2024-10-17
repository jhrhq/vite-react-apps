import React from "react";

function Stat({ stat }) {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">{stat.type}</dt>
      <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
        BDT {stat.amount}
      </dd>
    </div>
  );
}

const TotalBalanceStat = ({ stats }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          {stats.map((stat) => (
            <Stat key={stat.id} stat={stat} />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default TotalBalanceStat;
