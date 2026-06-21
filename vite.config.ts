import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 2. Define your alias and map it to the physical directory
      "@": path.resolve(__dirname, "./src"),
      "@game-hub": path.resolve(__dirname, "./src/apps/game-hub"),
      "@home-inventory": path.resolve(__dirname, "./src/apps/home-inventory"),
      "@quizzes": path.resolve(__dirname, "./src/apps/quizzes"),
    },
  },
});
