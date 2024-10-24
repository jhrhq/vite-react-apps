import { createContext, useReducer } from "react";

const initialState = {
  tasksCategories: {
    categories: [
      {
        id: "8ca2e7a2-1b2a-4fc9-805c-cd06a9d33b97",
        name: "To Do",
      },
      {
        id: "e2b80a8a-c480-47ea-9e29-d486ba3346eb",
        name: "In Progress",
      },
      {
        id: "f579035f-e79d-4bc4-b35d-66223261c267",
        name: "Done",
      },
      {
        id: " ed101dd9-c6e3-4057-ac5c-d7549b32c716",
        name: "Revise",
      },
    ],
    tasks: [],
  },
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasksCategories: {
          ...state.tasksCategories,
          tasks: [...state.tasksCategories.tasks, action.payload],
        },
      };

    case "REMOVE_TASK":
      return {
        ...state,
        cartData: state.cartData.filter((c) => c.id != action.payload.id),
      };
    default:
      return state;
  }
};

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
