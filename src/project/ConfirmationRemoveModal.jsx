import { useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../providers/TaskProvider";

export default function ConfirmationRemoveModal({ task, onClose }) {
  const { dispatch } = useContext(TaskContext);

  function handleRemove() {
    dispatch({ type: "REMOVE_TASK", payload: task });
    onClose();
    toast.success("Task Removed!");
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] p-4 max-h-[90vh]">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-rose-500">
              Delete Task
            </h2>
            <p className="mb-4 text-gray-300">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleRemove}
                type="button"
                className="rounded-md border border-transparent bg-se-600 px-4 py-2 text-sm font-medium text-white shadow-sm bg-rose-700 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Delete Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
