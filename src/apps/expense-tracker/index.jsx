import IncomeExpenseBoard from "./Expense/IncomeExpenseBoard";
import Header from "./Header";
import './index.css';

function ExpenseTracker() {
  return (
    <div className="max-w-7xl mx-auto dark:bg-slate-900 p-2">
      <Header />
      <IncomeExpenseBoard />
    </div>
  );
}

export default ExpenseTracker
