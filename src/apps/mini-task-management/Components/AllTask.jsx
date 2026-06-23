import TaskDetails from './TaskDetails';

const AllTask = ({ tasks, isLoading, onDelete }) => {
  if (isLoading) {
    return (
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500 mb-4"></div>
        <p className="text-purple-200">Fetching tasks from the cosmos...</p>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30">
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Task Manifest</h2>
          <p className="text-purple-200/60 text-sm">{tasks.length} tasks assigned</p>
        </div>
      </div>

      <div className="overflow-x-auto px-4">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-purple-200/60 border-b border-white/10">
              <th className="px-6 py-4 font-medium">Assignee</th>
              <th className="px-6 py-4 font-medium">Message</th>
              <th className="px-6 py-4 font-medium">Priority</th>
              <th className="px-6 py-4 font-medium">Created</th>
              <th className="px-6 py-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 px-4">
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-16 text-center">
                  <div className="text-5xl mb-3">🌌</div>
                  <p className="text-purple-200">The void is empty. Assign a task to begin.</p>
                </td>
              </tr>
            ) : (
              tasks.map(task => (
                <TaskDetails key={task.id} task={task} onDelete={onDelete} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;