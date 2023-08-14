/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js, jsx}'",
  ],
  theme: {
    fontFamily: {
      sans: ["Garamond", "sans-serif"],
    },
    colors: {
      "page-black": "#000000",
      "page-white": "#FFFFFF",
      "page-color": "#1b0428",
      "text-color": "#ee82ee",
      "text-white": "#FFFFFF",
      "text-neon": "",
      "button-color": "",
      "component-color": "",
    },
    extend: {},
  },
  plugins: [],
};
