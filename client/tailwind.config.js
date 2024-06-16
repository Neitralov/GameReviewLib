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
        "primary": "#4681F4",
        "danger": "#F55454",
        "star": "#E2DC3D",
        "muted": "#555555",
        "neutral": "#FFFFFF",
        "background": "#E9E9E9"
      },
      fontFamily: {
        "sans": "Ubuntu"
      },
    },
  },
  plugins: [],
}

