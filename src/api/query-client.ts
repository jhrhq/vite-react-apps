// src/api/query-client.ts

import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import type { AppError } from "@/@types/api";

// src/types/api.ts
// src/lib/error.ts

/* export class AppError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public code?: string,
  ) {
    super(message);
    this.name = "AppError";
  }
} */

// This is the "Magic" for Type Safety in v5
// It makes 'error' in useQuery and useMutation typed as AppError automatically
declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AppError;
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      // Strongly typed retry function
      retry: (failureCount, error) => {
        if (error.status === 404) return false;
        return failureCount < 3;
      },
    },
  },
  // Use Cache callbacks for global side effects instead of defaultOptions
  queryCache: new QueryCache({
    onError: (error) => {
      // Background refetch errors
      toast.error(`Query Error: ${error.message}`);
    },
  }),
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      // Senior move: Only show toast if the mutation doesn't have its own meta message
      // biome-ignore lint/suspicious/noExplicitAny: false
      const successMessage = (mutation.meta as any)?.successMessage;
      if (successMessage) toast.success(successMessage);
    },
    onError: (error) => {
      toast.error(error.message || "Action failed");
    },
  }),
});
