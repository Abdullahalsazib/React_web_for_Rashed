/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      Roboto: ["'Roboto', sans-serif"],
      Poppins: ["'Poppins', sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  presets: [keepPreset],
};
