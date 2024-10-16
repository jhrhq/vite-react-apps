import ExpenseBoard from "./ExpenseBoard";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeBoard from "./IncomeBoard";
import TotalBalanceStat from "./TotalBalanceStat";

const ExpanseBoard = () => {
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
            <IncomeBoard />
            <ExpenseBoard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpanseBoard;
