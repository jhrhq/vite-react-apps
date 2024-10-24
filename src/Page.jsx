import Header from "./Header";
import ProjectBoard from "./project/ProjectBoard";
import Sidebar from "./Sidebar";

export default function Page() {
  return (
    <div className="h-full w-full">
      {/* <CreateProjectModal /> */}
      <div className="flex h-screen">
        <Sidebar />

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <ProjectBoard />
        </main>
      </div>
    </div>
  );
}
