import { colors } from './src/config/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.light.primary,
        secondary: colors.light.secondary,
        neutral: colors.light.neutral,
        background: colors.light.background,
        surface: colors.light.surface,
        text: colors.light.text,
      },
      fontFamily: {
        sans: ['Merriweather Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 