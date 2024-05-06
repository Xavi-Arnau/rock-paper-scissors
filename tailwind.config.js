/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        darkOrange: "hsl(40, 84%, 53%)",
        orange: "hsl(40, 84%, 53%)",
        darkBlue: "hsl(230, 89%, 62%)",
        blue: "hsl(230, 89%, 65%)",
        darkRed: "hsl(349, 71%, 52%)",
        red: "hsl(349, 70%, 56%)",
        green: "hsl(214, 47%, 23%)",
        darkGreen: "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
