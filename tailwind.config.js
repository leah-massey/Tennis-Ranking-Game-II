/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    gridTemplateColumns: {
      // Simple 16 column grid
      20: "repeat(20, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
    },
    extend: {
      fontfamily: {
        faster: ["`Faster One`", "cursive"],
        typed: ["`Courier Prime`", "monospace"],
      },
    },
    colors: {
      peach: "#f2d0c2",
      forest: "#365c46",
      mineral: "#7ca6a0",
      cream: "#fafaf5",
      lemon: "#f2edaa",
      blue: "#62859c",
      coral: "#de643c",
      black: "#000000",
    },
  },
  plugins: [],
};
