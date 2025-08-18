/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
                    fontFamily: {
                        'fira-code': ['Fira Code', 'monospace'],
                    },
                    colors: {
                        'primary-color': '#00ff00',
                        'bg-dark': '#0d1117',
                        'card-bg': '#161b22',
                        'prompt-text': '#66ffcc',
                    }
                },
  },
  plugins: [],
}