/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

      },
      colors: {
        guy: "#e5e5dc",
        transparentBlack: "rgba(0,0,0,0.7)",
        glass: "rgba(255,255,255,0.45)"
      }
    },
    screens: {
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1099px"
    }
  },
  plugins: [],
}