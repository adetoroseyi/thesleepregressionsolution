/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'teal': '#4A9BA8',
          'teal-dark': '#3D8B98',
          'coral': '#E07A5F',
          'coral-dark': '#C9685A',
          'cream': '#FDF8F5',
          'charcoal': '#2C3E50',
          'green': '#6BAA75',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
