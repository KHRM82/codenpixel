/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#ec4899",
        dark: "#0f172a",
        darker: "#020617",
        light: "#f8fafc",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
