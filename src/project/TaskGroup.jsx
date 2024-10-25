import { useContext, useState } from "react";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import { FilterOnSearchContext } from "../providers/FilterOnSearchProvider";
import { cn } from "../utility/cn";
import TaskCard from "./TaskCard";

const categoryColors = {
  "8ca2e7a2-1b2a-4fc9-805c-cd06a9d33b97": "bg-indigo-600", // Light red for To Do
  "e2b80a8a-c480-47ea-9e29-d486ba3346eb": "bg-yellow-500", // Light green for In Progress
  "f579035f-e79d-4bc4-b35d-66223261c267": "bg-teal-500", // Light teal for Done
  " ed101dd9-c6e3-4057-ac5c-d7549b32c716": "bg-rose-500", // Light yellow for Revise
};

export default function TaskGroup({
  taskCategoryId,
  taskCategoryTitle,
  tasks = [],
  onEdit,
  onRemove,
}) {
  const { search } = useContext(FilterOnSearchContext);
  const [sortTask, setSortTask] = useState(true);

  function handleSortTask() {
    setSortTask(!sortTask);
  }

  const sortedTasks = sortTask
    ? tasks.toSorted((a, b) => new Date(b.dueDate) - new Date(a.dueDate))
    : tasks.toSorted((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const filteredTasks = search
    ? sortedTasks.filter((task) =>
        task.taskName.toLowerCase().includes(search.toLowerCase())
      )
    : sortedTasks;

  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div
        className={cn(
          "rounded-lg  p-4",
          categoryColors[taskCategoryId] ?? "bg-indigo-500"
        )}
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {taskCategoryTitle} ({filteredTasks.length})
          </h3>
          <button
            type="button"
            disabled={filteredTasks.length <= 1}
            onClick={handleSortTask}
            className="cursor-pointer disabled:cursor-not-allowed"
          >
            {sortTask ? (
              <TbSortDescending className=" size-[1.125rem] fill-none" />
            ) : (
              <TbSortAscending className=" size-[1.125rem] fill-none" />
            )}
          </button>
        </div>
        <div>
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
