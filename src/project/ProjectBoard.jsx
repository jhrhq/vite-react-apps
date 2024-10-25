import { useContext, useState } from "react";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { TaskContext } from "../providers/TaskProvider";
import ConfirmationRemoveModal from "./ConfirmationRemoveModal";
import CreateTaskModal from "./CreateTaskModal";
import EmptyTasks from "./EmptyTasks";
import TaskGroup from "./TaskGroup";

export default function ProjectBoard() {
  const { state } = useContext(TaskContext);
  const [taskModal, setTaskModal] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const getTasksByCategory = (categoryId) =>
    state.tasksCategories.tasks.filter((task) => task.categoryId == categoryId);

  function handleOpenModalClick() {
    setSelectedTask(null);
    setTaskModal(true);
  }
  function handleCloseTaskModal() {
    setSelectedTask(null);
    setTaskModal(false);
  }

  function handleEditTaskClick(task) {
    setSelectedTask({ ...task, category: task.categoryId });
    setTaskModal(true);
  }

  function handleRemoveTaskClick(task) {
    setSelectedTask(task);
    setConfirmRemove(true);
  }

  function handleCloseRemoveModal() {
    setSelectedTask(null);
    setConfirmRemove(false);
  }

  return (
    <>
      {confirmRemove && (
        <ConfirmationRemoveModal
          task={selectedTask}
          onClose={handleCloseRemoveModal}
        />
      )}

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
              onClick={handleOpenModalClick}
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            >
              <TbSquareRoundedPlus className="size-6 mr-2 fill-none" />
              Add
            </button>
          </div>
        </div>

        {state.tasksCategories.tasks.length == 0 ? (
          <EmptyTasks />
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
