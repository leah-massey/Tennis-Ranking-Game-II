/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        faster: ["`Faster One`", "cursive"],
      },
    },
    colors: {
      peach: "#f2d0c2",
      forest: "#365c46",
      mineral: "#7ca6a0",
      cream: "#f2f2e9",
      lemon: "#f2edaa",
      blue: "#62859c",
      coral: "#de643c",
    },
  },
  plugins: [],
};
