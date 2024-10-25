import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import FilterOnSearchProvider from "./providers/FilterOnSearchProvider";
import TaskProvider from "./providers/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <FilterOnSearchProvider>
        <Page />
        <ToastContainer position="bottom-right" />
      </FilterOnSearchProvider>
    </TaskProvider>
  );
}

export default App;
