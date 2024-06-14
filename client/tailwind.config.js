/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "960px",
      "xl": "1280px"
    },
    extend: {
      colors: {
        "primary": "#fb8b24",
        "dark-primary": "#f98212",
        "neutral": "#ffffff",
        "dark-neutral": "#fafafa",
        "second": "#d4cfcc",
        "attention": "#f54949",
        "muted": "#454545",
        "background": "#f4f4f4"
      },
      fontFamily: {
        "sans": "Ubuntu"
      },
    },
  },
  plugins: [],
}

