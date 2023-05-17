/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "node_modules/daisyui/dist/**/*.js", 
    "node_modules/react-daisyui/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        grey: "#f3f4f6",
        light: "#f9fafb",
        dark: "#1f2937",
        pending: "#f59e0b",
        complete: "#10b981",
        error: "#fb7185"
      },
    },
    screens: {
      'xs': '310px',
      'sm': '360px',
      'md': '760px',
      'lg': '1200px',
      'xl': '1440px',
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false,
  }
}
