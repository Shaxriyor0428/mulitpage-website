/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1310px",
      },
    },
  },
  plugins: [],
};
