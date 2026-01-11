import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "./index.css";
import { RouterProvider } from "react-router";
import TanStackQueryProviders from "@/providers/query-provider";
import { router } from "@/routes/routes.tsx";

// biome-ignore lint/style/noNonNullAssertion:false alert
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackQueryProviders>
      <RouterProvider router={router} />,
    </TanStackQueryProviders>
  </StrictMode>,
);
