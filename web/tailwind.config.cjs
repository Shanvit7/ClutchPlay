/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xxs:'0.5rem',
      }
    },
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
