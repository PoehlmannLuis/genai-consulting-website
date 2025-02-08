/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0E4724',
        'secondary': '#F0F2F5',
        'accent': '#554026',
        'neutral': '#52525B',
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'body': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
