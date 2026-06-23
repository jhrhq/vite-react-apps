import Course from "./Components/Course/Course";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <header className="mb-14 text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            Learn • Build • Grow
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Online Courses
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover premium courses taught by industry experts and level up
            your skills.
          </p>
        </header>

        <Course />
      </div>
    </div>
  );
}

export default App;