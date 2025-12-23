/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        stagger: "stagger 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        swap: "swap 3s ease-in-out infinite",
      },
      keyframes: {
        stagger: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        swap: {
          "0%": { transform: "rotateX(0deg)" },
          "45%": { transform: "rotateX(90deg)", opacity: "0" },
          "55%": { transform: "rotateX(-90deg)", opacity: "0" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
