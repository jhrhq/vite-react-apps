import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { formatDate } from "../utility/date-utility";

export default function TaskCard({ task }) {
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {task.taskName}
        </h4>

        <div className="flex gap-2">
          <HiOutlineTrash className=" size-4 cursor-pointer text-zinc-300" />

          <HiOutlinePencil className=" size-4 cursor-pointer text-zinc-300" />
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{formatDate(task.dueDate)}</p>
    </div>
  );
}
