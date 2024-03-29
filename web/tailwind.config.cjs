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
      },
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  daisyui: {
    base: true,
    utils: true,
    themes: [{
      halloween:{
        ...require("daisyui/src/colors/themes")["[data-theme=halloween"],
         '.custom-card':{
          'background-color':'transparent',
          'color':'white',
         },
      }
    }],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
