/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: "  #1A2238",
        buttonColor: "#FF6A3D",
        h1Color: "#f4db7d",
        h2Color: "#9daaf2",
      },
    },
  },
  plugins: [],
};
