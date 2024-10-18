import { useState } from "react";
import { categories, defaultTransactions } from "./data";
import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeExpenseLists from "./IncomeExpenseLists";
import RemoveTransactionModal from "./RemoveTransactionModal";
import TotalBalanceStat from "./TotalBalanceStat";

const IncomeExpenseBoard = () => {
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [activeTab, setActiveTab] = useState(categories[0].type);
  const [options, setOptions] = useState(categories[0].options);
  const [formState, setFormState] = useState({
    id: crypto.randomUUID(),
    category: options[0].value,
    amount: 100,
    date: "2024/10/18",
  });
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

  const [showModal, setShowModal] = useState(false);

  function handleSelectTab(tabType) {
    setActiveTab(tabType);
    setOptions(categories.find((option) => option.type == tabType).options);
  }

  function handleFormState(formData) {
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

  function handleShowModal(transactionRemove) {
    setShowModal(true);
    setUpdateToTransaction(transactionRemove);
  }

  function handleRemoveTransaction() {
    const updateTransaction = transactions.map((transaction) => {
      if (transaction.type == updateToTransaction.type) {
        const transact = transaction.category.filter(
          (cat) => cat.id != updateToTransaction.id
        );

        return { ...transaction, category: transact };
      } else {
        return transaction;
      }
    });

    if (updateToTransaction.type == "expense") {
      setTotalExpense({
        ...totalExpense,
        amount: totalExpense.amount - Number(updateToTransaction.amount),
      });
    } else if (updateToTransaction.type == "income") {
      setTotalIncome({
        ...totalIncome,
        amount: totalIncome.amount - Number(updateToTransaction.amount),
      });
    }
    setTransactions(updateTransaction);
    setUpdateToTransaction(null);
    setShowModal(false);
    setIsEditTransaction(false);
  }

  function handleCloseModal() {
    setShowModal(false);
    setUpdateToTransaction(null);
    setIsEditTransaction(false);
  }

  function handleSort(type, sortType) {
    const updateTransaction = transactions.map((transaction) => {
      if (transaction.type == type) {
        let transact;
        if (sortType == "lowToHigh") {
          transact = transaction.category.sort((a, b) => a.amount - b.amount);
        } else {
          transact = transaction.category.sort((a, b) => b.amount - a.amount);
        }

        return { ...transaction, category: transact };
      } else {
        return transaction;
      }
    });

    setTransactions(updateTransaction);
  }

  function handleFilter(type, filterOptions) {
    const updateTransaction = transactions.map((transaction) => {
      if (transaction.type == type && filterOptions.length != 0) {
        const transact = transaction.category.filter((options) =>
          filterOptions.includes(options.category)
        );
        return { ...transaction, category: transact };
      } else {
        return transaction;
      }
    });

    setTransactions(updateTransaction);
  }

  return (
    <>
      {showModal && (
        <RemoveTransactionModal
          onDelete={handleRemoveTransaction}
          onCloseClick={handleCloseModal}
        />
      )}
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
              onSaveFormState={handleFormState}
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
                  onDeleteClick={handleShowModal}
                  onSort={handleSort}
                  onFilter={handleFilter}
                  transactions={transaction}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default IncomeExpenseBoard;
