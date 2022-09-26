/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        desktop: "1440px",
      },
    },
    screens: {
      desktop: "1440px",
    },
    colors: {
      white: "#f5f5f5",
      pink: "#F050BE",
      midnight: "#09002A",
      "light-pink": "#FFE5F7",
      "copper-rust": "#31D0AA",
      "simple-red": "#FF3131",
      "simple-blue": "#4B4DED",
      "simple-yellow": "#F4C751",
    },
    fontSize: {
      smaller: ["14px", { lineHeight: "140%" }], //smallest
      s: ["10px", { lineHeight: "19px", letterSpacing: "0.04em" }], //smaller
      xs: ["14px", { lineHeight: "19px" }], // samll
      lg: ["16px", { lineHeight: "19px" }], // body
      xl: ["24px", { lineHeight: "28px" }], // subtitle
      "2xl": ["24px", { lineHeight: "28px", letterSpacing: "-0.02em" }], //h3
      "3xl": ["40px", { lineHeight: "47px", letterSpacing: "-0.02em" }], //h2
      "4xl": ["64px", { lineHeight: "75px", letterSpacing: "-0.02em" }], //h1
    },
    fontFamily: {
      work: "Work Sans, sans-serif",
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography")],
};
