
function Stat({ stat }) {
  return (
    <div className="bg-[#F9FAFB] dark:bg-gray-800 flex lg:max-w-xs flex-col px-4 py-4 transition-colors duration-200">
      <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.name}</dt>
      <dd
        className={`order-first text-xl font-semibold tracking-tight sm:text-3xl ${
          stat.type == "balance" && stat.amount < 0
            ? "text-red-700 dark:text-red-400"
            : "text-gray-700 dark:text-gray-200"
        }`}
      >
        BDT {stat.amount}
      </dd>
    </div>
  );
}

function TotalBalanceStat({ totalBalance, totalIncome, totalExpense }) {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
          <Stat stat={totalBalance} />
          <Stat stat={totalIncome} />
          <Stat stat={totalExpense} />
        </dl>
      </div>
    </div>
  );
}

export default TotalBalanceStat;