/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        light: "#fff",
        dark: "#000",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      }
    },
  },
  plugins: [],
};
