import { useState } from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeExpenseLists from "./IncomeExpenseLists";
import TotalBalanceStat from "./TotalBalanceStat";

const IncomeExpenseBoard = () => {
  const [trackers, setTrackers] = useState([
    {
      type: "income",
      category: [
        { id: 123, name: "salary", date: "15 January 2024", cost: "10000" },
      ],
    },
    {
      type: "expense",
      category: [
        { id: 124, name: "education", date: "15 January 2024", cost: "1000" },
      ],
    },
  ]);
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
          <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
            Expense Tracker
          </h2>
          <ExpenseTrackerForm />
        </div>
        <div className="lg:col-span-2">
          <TotalBalanceStat />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {trackers.map((tracker) => (
              <IncomeExpenseLists key={tracker.type} trackers={tracker} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IncomeExpenseBoard;
