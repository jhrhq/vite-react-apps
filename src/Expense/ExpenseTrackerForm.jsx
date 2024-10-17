import { useState } from "react";
import { formatDateToLong } from "../utilities/utilities";
import { categories } from "./data";

const defaultFormState = {
  id: crypto.randomUUID(),
  category: "",
  amount: "",
  date: "",
};

const TabButtons = ({ categories, activeTab, onSelectTab }) => {
  return (
    <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
      {categories.map((category) => (
        <div
          key={category.type}
          onClick={() => onSelectTab(category.type)}
          className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 capitalize ${
            category.type == activeTab && "active"
          }`}
        >
          {category.type}
        </div>
      ))}
    </div>
  );
};

const ExpenseTrackerForm = ({ onSave }) => {
  const [activeTab, setActiveTab] = useState(categories[0].type);
  const [options, setOptions] = useState(categories[0].options);

  const [formState, setFormState] = useState(defaultFormState);

  function handleSelectTab(tabType) {
    setActiveTab(tabType);
    setFormState(defaultFormState);
    setOptions(categories.find((option) => option.type == tabType).options);
  }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (name == "date") {
      value = formatDateToLong(value).toString();
    }

    setFormState({ ...formState, [name]: value });
  }

  return (
    <form>
      <TabButtons
        categories={categories}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />
      <div className="mt-3">
        <label
          htmlFor="category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <div className="mt-2">
          <select
            value={formState.category}
            onChange={handleChange}
            id="category"
            name="category"
            required
            autoComplete="category-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-1.5"
          >
            <option value="">Select Category</option>
            {options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="amount"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Amount
        </label>
        <div className="mt-2">
          <input
            value={formState.amount}
            onChange={handleChange}
            type="number"
            name="amount"
            id="amount"
            required
            autoComplete="off"
            placeholder="12931"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-1.5"
          />
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="date"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date
        </label>
        <div className="mt-2">
          <input
            value={formState.date}
            onChange={handleChange}
            type="date"
            name="date"
            id="date"
            required
            autoComplete="off"
            placeholder="12931"
            className="block px-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          onSave(formState, activeTab);
        }}
        type="submit"
        className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
      >
        Save
      </button>
    </form>
  );
};

export default ExpenseTrackerForm;
