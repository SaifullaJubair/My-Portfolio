/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#09101a",

          secondary: "#141c27",

          accent: "#02050a",

          neutral: "#0f1722",

          "base-100": "#ffffff",

          info: "#55e6a5",

          success: "#90d9b8",

          warning: "#ffffff",

          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
