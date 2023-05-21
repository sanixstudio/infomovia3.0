const daisyui = require("daisyui");
const lineClamp = require("@tailwindcss/line-clamp");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "containers/**/*.{js,ts,jsx,tsx,mdx}",
    "components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    theme: [
      // {
      //   myTheme: {
      //     primary: "#f9e954",
      //     secondary: "#f2c793",
      //     accent: "#9ee547",
      //     neutral: "#2f2631",
      //     "base-100": "#3e3040",
      //     info: "#3f74cf",
      //     success: "#0f6b39",
      //     warning: "#dc9f04",
      //     error: "#e65c7c",
      //   },
      // },
    ],
  },
  darkMode: "class",
  plugins: [daisyui, lineClamp],
};
