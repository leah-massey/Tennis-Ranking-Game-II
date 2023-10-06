/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
