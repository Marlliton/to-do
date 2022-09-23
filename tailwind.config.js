/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#1A1A21",
      "black-task-area": "#16161C",
      "black-bg-task": "#1E1E26",
      gray: "#2D2D3B",
      white: "#F9F9F9",
    },
    extend: {
      backgroundImage: {
        "my-gradient":
          "linear-gradient(249.73deg, #F29682 0%, #EE69AC 50%, #CB4BCF 100%)",
      },
    },
  },
  plugins: [],
};
