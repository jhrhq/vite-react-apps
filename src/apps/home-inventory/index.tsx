import "@fontsource-variable/inter";
import { GlobalErrorFallback } from "@home-inventory/components/global-error-fallback";
import TanStackQueryProviders from "@home-inventory/providers/query-provider";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import { AuthProvider } from "./providers/auth-provider";
import AppRoutes from "./routes";

export default function HomeInventory() {
  return (
    // biome-ignore lint/style/noNonNullAssertion:false alert
    <TanStackQueryProviders>
      <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ErrorBoundary>
    </TanStackQueryProviders>
  );
}
