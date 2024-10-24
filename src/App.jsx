import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import TaskProvider from "./providers/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <Page />
      <ToastContainer position="bottom-right" />
    </TaskProvider>
  );
}

export default App;
