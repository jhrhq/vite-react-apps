import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

export default function Quizzes  ()  {
return (<QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="container">
              <App />
            </div>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>)
}
        
