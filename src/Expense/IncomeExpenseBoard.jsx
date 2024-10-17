import { useState } from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeExpenseLists from "./IncomeExpenseLists";
import TotalBalanceStat from "./TotalBalanceStat";
import { defaultStats, defaultTrackers } from "./data";

const IncomeExpenseBoard = () => {
  const [trackers, setTrackers] = useState(defaultTrackers);
  const [stats, setStats] = useState(defaultStats);

  const handleAddExpenseIncome = (newTracker, type, isAdd) => {
    setTrackers(
      trackers.map((item) =>
        item.type == type
          ? { ...item, category: [...item.category, newTracker] }
          : item
      )
    );
  };

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
          <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
            Expense Tracker
          </h2>
          <ExpenseTrackerForm onSave={handleAddExpenseIncome} />
        </div>
        <div className="lg:col-span-2">
          <TotalBalanceStat stats={stats} />

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
