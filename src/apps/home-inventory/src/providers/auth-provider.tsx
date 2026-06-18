/* // src/context/auth-context.tsx
import * as React from "react";
import { api } from "@/api/api-client";
import { queryClient } from "@/api/query-client";

interface AuthContextType {
  isAuthenticated: boolean;
  isInitializing: boolean;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isInitializing, setIsInitializing] = React.useState(true);

  const logout = React.useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
    queryClient.clear();
  }, []);

  // Handle initialization and persistence
  React.useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setIsInitializing(false);
        return;
      }

      try {
        // Senior Move: Verify the token by fetching the user profile immediately
        // This ensures the token in localStorage isn't expired/invalid
        await api.get("/auth/me");
        setIsAuthenticated(true);
      } catch (error) {
        // If /me fails, the interceptor might have already handled logout,
        // but we ensure state is clean here.
        logout();
      } finally {
        setIsInitializing(false);
      }
    };

    initAuth();
  }, [logout]);

  // Listen for global logout events from the Axios interceptor
  React.useEffect(() => {
    const handleGlobalLogout = () => logout();
    window.addEventListener("auth:logout", handleGlobalLogout);
    return () => window.removeEventListener("auth:logout", handleGlobalLogout);
  }, [logout]);

  const value = React.useMemo(
    () => ({
      isAuthenticated,
      isInitializing,
      setIsAuthenticated,
      logout,
    }),
    [isAuthenticated, isInitializing, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
 */
