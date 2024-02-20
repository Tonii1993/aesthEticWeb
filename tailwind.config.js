/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        hoverColor: "#000000",
        brightColor: "#638889",
        backgroundColor: "#FFF8E3",
        PrimaryColor: "#f5ebe0",
        SecondaryColor: "#e3d5ca",
        DarkColor: "#d4a373",
        ExtraDarkColor: "#a98467",
      },
    },
  },
  plugins: [],
};
