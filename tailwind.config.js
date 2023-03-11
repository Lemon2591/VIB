/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "571px": "571px",
        "960px": "960px",
      },
    },
  },
  plugins: [],
};
