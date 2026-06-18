import { BookmarkIcon, GripHorizontal } from "lucide-react";
import { useContext, useState } from "react";
import GlobalContext from "../context/Global-context";

const labelsClasses = [
  "bg-indigo-500",
  "bg-gray-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-purple-500",
];

const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black/40 backdrop-blur-sm">
      {/* Container: Changed to bg-white dark:bg-gray-800 */}
      <form className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-1/4 transition-colors duration-200">
        
        {/* Header: Changed to bg-gray-100 dark:bg-gray-700 */}
        <header className="bg-gray-100 dark:bg-gray-700 px-4 py-2 flex justify-between items-center rounded-t-lg">
          <span className="material-icons-outlined text-gray-400 dark:text-gray-300"> 
            <GripHorizontal /> 
          </span>
          <div className="flex items-center gap-x-2">
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-rose-400 dark:text-rose-300 hover:text-red-500 dark:hover:text-red-400 cursor-pointer"
              >
                Delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)} type="button" className="flex items-center">
              <span className="material-icons-outlined text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100">
                Close
              </span>
            </button>
          </div>
        </header>

        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            
            {/* Title Input: Added text-gray-200, border-gray-700, and focus states for dark mode */}
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 dark:text-gray-200 bg-transparent text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400"
              onChange={(e) => setTitle(e.target.value)}
            />

            <span className=" text-gray-400 dark:text-gray-300 text-left"> schedule </span>
            {/* Date text color toggling */}
            <p className="text-gray-700 dark:text-gray-300 text-left">{daySelected.format("dddd, MMMM DD")}</p>

            <span className="material-icons-outlined text-gray-400 dark:text-gray-300 text-left"> segment </span>
            
            {/* Description Input */}
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 dark:text-gray-200 bg-transparent pb-2 w-full border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400"
              onChange={(e) => setDescription(e.target.value)}
            />

            <span className=" text-gray-400 dark:text-gray-300"> <BookmarkIcon /> </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`${lblClass} size-6 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform`}
                >
                  {selectedLabel === lblClass && (
                    <span className=" text-white text-sm sr-only"> check </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Adjusted border color */}
        <footer className="flex justify-end border-t border-gray-200 dark:border-gray-700 p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 px-6 py-2 rounded text-white font-medium transition-colors"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;