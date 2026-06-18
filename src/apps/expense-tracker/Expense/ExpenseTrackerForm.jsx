import { formatDateToISO, formatDateToLong } from "../utilities/utilities";
import { categories } from "./data";

function TabButtons({ categories, activeTab, onSelectTab }) {
  return (
    <div className="flex divide-x divide-slate-400/20 dark:divide-slate-700/50 overflow-hidden rounded-md bg-white dark:bg-gray-700 text-[0.8125rem] font-medium leading-5 text-slate-700 dark:text-gray-200 shadow-sm ring-1 ring-slate-700/10 dark:ring-gray-600 mt-6 transition-colors duration-200">
      {categories.map((category) => (
        <div
          key={category.type}
          onClick={() => onSelectTab(category.type)}
          className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 dark:hover:bg-gray-600 hover:text-slate-900 dark:hover:text-white capitalize ${
            category.type == activeTab && "active"
          }`}
        >
          {category.type}
        </div>
      ))}
    </div>
  );
}

function ExpenseTrackerForm({
  activeTab,
  options,
  formState,
  isEdit,
  onSaveFormState,
  onSelectTab,
  onSave,
}) {
  function handleTabSelect(tabType) {
    onSelectTab(tabType);
    onSaveFormState({
      id: crypto.randomUUID(),
      category: options[0].value,
      amount: 100,
      date: "2024/10/18",
    });
  }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (name == "date") {
      value = formatDateToLong(value);
    }
    onSaveFormState({ ...formState, [name]: value });
  }

  function handleSave(e) {
    e.preventDefault();
    onSave(formState, activeTab, isEdit);
    onSaveFormState({
      id: crypto.randomUUID(),
      category: options[0].value,
      amount: 100,
      date: "2024/10/18",
    });
  }

  return (
    <form>
      <TabButtons categories={categories} activeTab={activeTab} onSelectTab={handleTabSelect} />
      
      <div className="mt-3">
        <label
          htmlFor="category"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-teal-600 dark:focus:ring-teal-500 sm:text-sm sm:leading-6 px-1.5 transition-colors duration-200"
          >
            <option value="" className="bg-white dark:bg-gray-700">Select Category</option>
            {options.map((option) => (
              <option key={option.id} value={option.value} className="bg-white dark:bg-gray-700">
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="amount"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
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
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-600 dark:focus:ring-teal-500 sm:text-sm sm:leading-6 px-1.5 transition-colors duration-200"
          />
        </div>
      </div>

      <div className="mt-3">
        <label
          htmlFor="date"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
        >
          Date
        </label>
        <div className="mt-2">
          <input
            value={formState.date && formatDateToISO(formState.date)}
            onChange={handleChange}
            type="date"
            name="date"
            id="date"
            required
            autoComplete="off"
            placeholder="12931"
            className="block px-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-600 dark:focus:ring-teal-500 sm:text-sm sm:leading-6 transition-colors duration-200"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        type="submit"
        className="mt-6 rounded-md bg-teal-600 dark:bg-teal-500 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 dark:hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full transition-colors"
      >
        Save
      </button>
    </form>
  );
}

export default ExpenseTrackerForm;