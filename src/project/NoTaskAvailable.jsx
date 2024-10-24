export default function NoTaskAvailable() {
  return (
    <div className="flex items-center justify-center p-4 bg-red-100 border border-red-300 rounded-lg dark:bg-red-800 dark:border-red-600">
      <p className="text-center text-red-600 dark:text-red-300">
        &quot;Task List is empty!&quot;
      </p>
    </div>
  );
}
