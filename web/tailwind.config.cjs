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
         '.custom-card':{
          'background-color':'transparent',
          'color':'white',
         },
      }
    }],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
