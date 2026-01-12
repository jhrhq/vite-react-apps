import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "./index.css";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router";
import { GlobalErrorFallback } from "@/components/global-error-fallback";
import TanStackQueryProviders from "@/providers/query-provider";
import { router } from "@/routes/routes.tsx";

// biome-ignore lint/style/noNonNullAssertion:false alert
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackQueryProviders>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            FallbackComponent={GlobalErrorFallback}
            onReset={() => {
              reset();
            }}
          >
            <RouterProvider router={router} />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </TanStackQueryProviders>
  </StrictMode>,
);
