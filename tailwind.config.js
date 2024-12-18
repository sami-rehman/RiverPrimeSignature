module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 2s infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: 1 },
          '33%': { opacity: 0.3 },
          '66%': { opacity: 0.66 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
