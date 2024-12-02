/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Lucida Console"', '"Courier New"', "monospace"],
      },
    },
  },
  plugins: [],
};
