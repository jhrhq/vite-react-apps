import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLoader from "./app-loader";
import { APPS_REGISTRY, type AppItem } from "./apps-config";
import RootLayout from "./layouts/root-layout";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />

          {APPS_REGISTRY.map((app: AppItem) => {
            const LazyComponent = app.element;
            return (
              <Route
                key={app.id}
                path={`${app.id}/*`}
                element={
                  <Suspense fallback={<AppLoader />}>
                    <LazyComponent />
                  </Suspense>
                }
              />
            );
          })}

          {/* Catch-all 404 handler configured in Tailwind aesthetics */}
          <Route
            path="*"
            element={
              <div className="py-24 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  404 Context Area Missing
                </h2>
                <p className="mt-2 text-slate-500">
                  The application module requested does not exist inside the
                  configuration registry.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
