/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customeOrange: "#F89D21",
        secondaryColor: "#515151",
      },

    },
  },
  plugins: [],
}

