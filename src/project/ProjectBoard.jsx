import { useContext, useState } from "react";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { TaskContext } from "../providers/TaskProvider";
import CreateTaskModal from "./CreateTaskModal";
import NoCategoriesAvailable from "./NoCategoriesAvailable";
import TaskGroup from "./TaskGroup";

export default function ProjectBoard() {
  const { state } = useContext(TaskContext);
  const [taskModal, setTaskModal] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const getTasksByCategory = (categoryId) =>
    state.tasksCategories.tasks.filter((task) => task.categoryId == categoryId);

  function handleCloseTaskModal() {
    setSelectedTask(null);
    setTaskModal(false);
  }

  function handleEditTaskClick(task) {
    setSelectedTask({ ...task, category: task.categoryId });
    setTaskModal(true);
  }

  function handleRemoveTaskClick() {
    //dispatch
    setConfirmRemove(false);
  }

  function handleCloseRemoveModal() {
    setSelectedTask(null);
    setConfirmRemove(false);
  }

  return (
    <>
      {taskModal && (
        <CreateTaskModal
          updateToTask={selectedTask}
          onClose={handleCloseTaskModal}
        />
      )}

      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className=" font-bold prose-2xl">Projectify</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setTaskModal(true)}
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            >
              <TbSquareRoundedPlus className="size-6 mr-2 fill-none" />
              Add
            </button>
          </div>
        </div>

        {state.tasksCategories.categories.length == 0 ? (
          <NoCategoriesAvailable />
        ) : (
          <div className="-mx-2 mb-6 flex flex-wrap">
            {state.tasksCategories.categories.map((taskCategory) => (
              <TaskGroup
                key={taskCategory.id}
                taskCategoryId={taskCategory.id}
                taskCategoryTitle={taskCategory.name}
                tasks={getTasksByCategory(taskCategory.id)}
                onEdit={handleEditTaskClick}
                onRemove={handleRemoveTaskClick}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
