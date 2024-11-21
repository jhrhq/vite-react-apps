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

      keyframes: {
        gauge_fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        gauge_fill: {
          from: { "stroke-dashoffset": "332", opacity: "0" },
          to: { opacity: "1" },
        },
        animation: {
          gauge_fadeIn: "gauge_fadeIn 1s ease forwards",
          gauge_fill: "gauge_fill 4s ease forwards",
        },
      },
    },
  },

  plugins: [typographyPlugin, tailwindForm],
};
