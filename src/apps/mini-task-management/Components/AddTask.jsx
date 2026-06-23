import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState(2); // 1: Low, 2: Medium, 3: High
  const [assigned_to, setAssigned] = useState("");
  // Fixed: Properly managing date state with correct YYYY-MM-DD format
  const [created_on, setCreated] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const priorityLabels = { 1: "Low", 2: "Medium", 3: "High" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || !assigned_to.trim()) return;

    setIsSubmitting(true);
    // Simulate API call delay via the parent's onAdd function
    await onAdd({
      message,
      priority: parseInt(priority),
      created_on,
      assigned_to,
    });

    // Reset form
    setMessage("");
    setPriority(2);
    setAssigned("");
    setCreated(new Date().toISOString().split("T")[0]);
    setIsSubmitting(false);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="mb-8">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full group relative overflow-hidden rounded-2xl border-2 border-dashed border-white/20 hover:border-pink-400/50 p-8 transition-all duration-300"
        >
          <div className="flex items-center justify-center gap-3 text-purple-200 group-hover:text-white transition">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:rotate-90 transition-transform duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <span className="text-lg font-medium">Assign a new task...</span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="mb-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl shadow-purple-900/50">
      <h2 className="text-2xl font-bold bg-linear-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent mb-6">
        Create New Task
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-purple-200/60 mb-2">
            Task Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What needs to be done?"
            rows="3"
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-purple-200/40 outline-none focus:border-pink-400/50 transition resize-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-purple-200/60 mb-2">
              Assigned To
            </label>
            <input
              type="text"
              value={assigned_to}
              onChange={(e) => setAssigned(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white placeholder-purple-200/40 outline-none focus:border-pink-400/50 transition"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-purple-200/60 mb-2">
              Created Date
            </label>
            <input
              type="date"
              value={created_on}
              onChange={(e) => setCreated(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-pink-400/50 transition [color-scheme:transparent]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-purple-200/60 mb-2">
              Priority
            </label>
            <div className="flex gap-2">
              {[1, 2, 3].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition ${
                    priority === p
                      ? p === 3
                        ? "bg-red-500/30 text-red-200 border border-red-400/50"
                        : p === 2
                          ? "bg-yellow-500/30 text-yellow-200 border border-yellow-400/50"
                          : "bg-green-500/30 text-green-200 border border-green-400/50"
                      : "bg-white/5 border border-white/10 text-purple-100 hover:bg-white/10"
                  }`}
                >
                  {priorityLabels[p]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2.5 rounded-xl text-purple-200 hover:bg-white/10 transition font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-2.5 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating...
              </>
            ) : (
              "Assign Task ✨"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
