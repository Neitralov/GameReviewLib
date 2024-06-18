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
        "primary-hover": "#3D77EA",
        "danger": "#F55454",
        "danger-hover": "#EB4A4A",
        "star": "#E2DC3D",
        "muted": "#555555",
        "neutral": "#FFFFFF",
        "neutral-hover": "#F6F6F6",
        "background": "#E9E9E9",
        "background-hover": "#E0E0E0",
      },
      fontFamily: {
        "sans": "Ubuntu"
      },
    },
  },
  plugins: [],
}

