import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

export default function IssueTracker  ()  {
return (<QueryClientProvider client={queryClient}>
            <div className="container">
              <App />
            </div>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>)
}
        
