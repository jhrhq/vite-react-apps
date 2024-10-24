import { TbSquareRoundedPlus } from "react-icons/tb";
import { getAllProjectTasks } from "../data/tasks";
import NoCategoriesAvailable from "./NoCategoriesAvailable";
import TaskGroup from "./TaskGroup";

export default function ProjectBoard() {
  const tasksCategories = getAllProjectTasks();

  const getTasksByCategory = (categoryId) =>
    tasksCategories.tasks.filter((task) => task.category_id == categoryId);
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className=" font-bold prose-2xl">Projectify</h2>
        <div className="flex space-x-2">
          <button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
            <TbSquareRoundedPlus className="size-6 mr-2 fill-none" />
            Add
          </button>
        </div>
      </div>

      {tasksCategories.categories.length == 0 ? (
        <NoCategoriesAvailable />
      ) : (
        <div className="-mx-2 mb-6 flex flex-wrap">
          {tasksCategories.categories.map((taskCategory) => (
            <TaskGroup
              key={taskCategory.id}
              taskCategoryId={taskCategory.id}
              taskCategoryTitle={taskCategory.name}
              tasks={getTasksByCategory(taskCategory.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
