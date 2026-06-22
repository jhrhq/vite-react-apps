import { useEffect } from "react";

export default function ModeSwitch() {
  // Sync DOM with localStorage / System settings on component mount
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const handleThemeChange = (theme) => {
    if (theme === "system") {
      localStorage.removeItem("theme");
      // Check system preference immediately
      const systemIsDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", systemIsDark);
    } else {
      localStorage.theme = theme;
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  };

  return (
    <div className="flex gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
      <button
        onClick={() => handleThemeChange("light")}
        className="px-3 py-1.5 text-sm font-medium rounded text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition"
      >
        Light
      </button>

      <button
        onClick={() => handleThemeChange("dark")}
        className="px-3 py-1.5 text-sm font-medium rounded text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition"
      >
        Dark
      </button>

      <button
        onClick={() => handleThemeChange("system")}
        className="px-3 py-1.5 text-sm font-medium rounded text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition"
      >
        System
      </button>
    </div>
  );
}
