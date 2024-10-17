import { useState } from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeExpenseLists from "./IncomeExpenseLists";
import TotalBalanceStat from "./TotalBalanceStat";
import { defaultTrackers } from "./data";

const IncomeExpenseBoard = () => {
  const [trackers, setTrackers] = useState(defaultTrackers);

  const [totalIncome, setTotalIncome] = useState({
    type: "income",
    name: "Income",
    amount: 10_000,
  });
  const [totalExpense, setTotalExpense] = useState({
    type: "expense",
    name: "Expense",
    amount: 1_000,
  });
  const [totalBalance, setTotalBalance] = useState({
    type: "balance",
    name: "Balance",
    amount: totalIncome.amount - totalExpense.amount,
  });

  const handleAddExpenseIncome = (newTracker, type, isAdd) => {
    setTrackers(
      trackers.map((item) =>
        item.type == type
          ? { ...item, category: [...item.category, newTracker] }
          : item
      )
    );

    if (type == "expense") {
      setTotalExpense({
        ...totalExpense,
        amount: totalExpense.amount + Number(newTracker.amount),
      });
      setTotalBalance({
        ...totalBalance,
        amount: totalBalance.amount - Number(newTracker.amount),
      });
    } else {
      setTotalIncome({
        ...totalIncome,
        amount: totalIncome.amount + Number(newTracker.amount),
      });
      setTotalBalance({
        ...totalBalance,
        amount: totalBalance.amount + Number(newTracker.amount),
      });
    }
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
          <TotalBalanceStat
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />

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
