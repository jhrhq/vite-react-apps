import "@fontsource-variable/inter";
import { GlobalErrorFallback } from "@home-inventory/components/global-error-fallback";
import TanStackQueryProviders from "@home-inventory/providers/query-provider";
import { router } from "@home-inventory/routes/routes.tsx";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router";
import "./index.css";

export default function HomeInventory() {
  return (
    // biome-ignore lint/style/noNonNullAssertion:false alert
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
  );
}
