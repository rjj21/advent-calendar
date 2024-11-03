/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'falling-snow': 'falling-snow 10s linear infinite',
      },
      keyframes: {
        'falling-snow': {
          '0%': { transform: 'translateY(-10%)', opacity: 1 },
          '100%': { transform: 'translateY(110%)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

