/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: true,
    base: true,
    utils: true,
    themes: ["cyberpunk"],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
