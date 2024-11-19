/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(86.88deg, #7d6aff 1.38%, #ffb86c 64.35%, #fc2872 119.91%)",
      },
    },
  },
  plugins: [],
};
