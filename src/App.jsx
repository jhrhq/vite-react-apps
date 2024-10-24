import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import ProjectBoard from "./project/ProjectBoard";
import TaskProvider from "./providers/TaskProvider";
import Sidebar from "./Sidebar";

function App() {
  return (
    <TaskProvider>
      {/* <CreateProjectModal /> */}
      <div className="flex h-screen">
        <Sidebar />

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <ProjectBoard />
        </main>
      </div>
      <ToastContainer position="bottom-right" />
    </TaskProvider>
  );
}

export default App;
