/* eslint-disable react-refresh/only-export-components */
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
        await api.get("auth/me");
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

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "home-inventory:session";
const MOCK_DELAY_MS = 400;
export const MOCK_VALID_CREDENTIALS = {
  email: "demo@example.com",
  password: "password123",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined = checking, null = logged out

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      setUser(raw ? JSON.parse(raw) : null);
    } catch {
      setUser(null);
    }
  }, []);

  async function login(email, password) {
    // TODO: replace with a real request
    await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

    const isValid =
      email === MOCK_VALID_CREDENTIALS.email &&
      password === MOCK_VALID_CREDENTIALS.password;

    if (!isValid) {
      throw new Error("Invalid email or password");
    }

    const session = {
      email,
      name: "Demo User",
      loggedInAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setUser(session);
    return session;
  }

  async function logout() {
    // TODO: replace with a real request if the server needs to invalidate a session
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    isChecking: user === undefined,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within this app's <AuthProvider>");
  }
  return ctx;
}
