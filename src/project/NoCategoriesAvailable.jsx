export default function NoCategoriesAvailable() {
  return (
    <div className="flex items-center justify-center p-6 bg-gray-800-50  border-gray-800 border-2 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-calc-max">
      <p className="text-lg font-medium text-yellow-800 dark:text-yellow-200 text-center">
        No categories available. Please add some categories.
      </p>
    </div>
  );
}
