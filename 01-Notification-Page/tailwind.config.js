/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-sky-blue": "hsl(210, 60%, 98%)",
        "lighter-sky-blue": "hsl(211, 68%, 94%)",
        "pale-blue": "hsl(205, 33%, 90%)",
        "medium-gray-blue": "hsl(219, 14%, 63%)",
        "dark-gray-blue": "hsl(219, 12%, 42%)",
        "deep-navy-blue": "hsl(224, 21%, 14%)",
        "vivid-red": "hsl(1, 90%, 64%)",
        "deep-blue": "hsl(219, 85%, 26%)",
      },
      fontFamily: {
        Plus_Jakarta_Sans: "Plus Jakarta Sans",
      },
    },
  },
  plugins: [],
};
