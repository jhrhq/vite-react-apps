import { useState } from "react";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeExpenseLists from "./IncomeExpenseLists";
import TotalBalanceStat from "./TotalBalanceStat";
import { categories, defaultFormState, defaultTransactions } from "./data";

const IncomeExpenseBoard = () => {
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [formState, setFormState] = useState(defaultFormState);
  const [updateToTransaction, setUpdateToTransaction] = useState(null);
  const [isEditTransaction, setIsEditTransaction] = useState(false);
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

  const [activeTab, setActiveTab] = useState(categories[0].type);
  const [options, setOptions] = useState(categories[0].options);

  function handleSelectTab(tabType) {
    setActiveTab(tabType);
    setOptions(categories.find((option) => option.type == tabType).options);
  }

  function handleFormSave(formData) {
    setFormState(formData);
  }

  function handleTransaction(newTransaction, type, isEdit) {
    if (isEdit) {
      const updateTransaction = transactions.map((transaction) => {
        if (transaction.type == type) {
          const transact = transaction.category.map((cat) =>
            cat.id == newTransaction.id
              ? {
                  ...cat,
                  category: newTransaction.category,
                  amount: Number(newTransaction.amount),
                  date: newTransaction.date,
                }
              : cat
          );

          return { ...transaction, category: transact };
        } else {
          return transaction;
        }
      });
      setTransactions(updateTransaction);

      if (
        type == "expense" &&
        updateToTransaction.amount != newTransaction.amount
      ) {
        setTotalExpense({
          ...totalExpense,
          amount:
            totalExpense.amount +
            Number(newTransaction.amount) -
            updateToTransaction.amount,
        });
      } else if (
        type == "income" &&
        updateToTransaction.amount != newTransaction.amount
      ) {
        setTotalIncome({
          ...totalIncome,
          amount:
            totalIncome.amount +
            Number(newTransaction.amount) -
            updateToTransaction.amount,
        });
      }
      setIsEditTransaction(false);
      setUpdateToTransaction(null);
    } else {
      setTransactions(
        transactions.map((item) =>
          item.type == type
            ? { ...item, category: [...item.category, newTransaction] }
            : item
        )
      );

      if (type == "expense") {
        setTotalExpense({
          ...totalExpense,
          amount: totalExpense.amount + Number(newTransaction.amount),
        });
      } else {
        setTotalIncome({
          ...totalIncome,
          amount: totalIncome.amount + Number(newTransaction.amount),
        });
      }
    }
  }

  function handleEditTransaction(transaction) {
    handleSelectTab(transaction.type);

    setFormState(transaction);
    setUpdateToTransaction(transaction);
    setIsEditTransaction(true);
  }

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
          <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
            Expense Tracker
          </h2>
          <ExpenseTrackerForm
            activeTab={activeTab}
            options={options}
            formState={formState}
            isEdit={isEditTransaction}
            onSaveForm={handleFormSave}
            onSelectTab={handleSelectTab}
            onSave={handleTransaction}
          />
        </div>
        <div className="lg:col-span-2">
          <TotalBalanceStat
            totalBalance={{
              type: "balance",
              name: "Balance",
              amount: totalIncome.amount - totalExpense.amount,
            }}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {transactions.map((transaction) => (
              <IncomeExpenseLists
                key={transaction.type}
                onEdit={handleEditTransaction}
                transactions={transaction}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IncomeExpenseBoard;
