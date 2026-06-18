import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { worker } from "@uidotdev/react-query-api";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);

new Promise((res) => setTimeout(res, 100))
  .then(() =>
    worker.start({
      quiet: true,
      onUnhandledRequest: "bypass",
    })
  )
  .then(() => {
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="container">
              <App />
            </div>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </React.StrictMode>
    );
  });
