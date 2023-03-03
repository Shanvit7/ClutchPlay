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
    base: true,
    utils: true,
    themes: [{
      cyberpunk:{
        ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
         primary:'black',
         accentL:'red',
      }
    }],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
