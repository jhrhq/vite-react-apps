import tailwindForm from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28194b",
        // primary: '#7D49F8',
      },
    },
  },

  plugins: [typographyPlugin, tailwindForm],
};
