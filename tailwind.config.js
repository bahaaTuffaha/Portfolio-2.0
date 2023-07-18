/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{"blue":"#0000ff"},
      fontFamily: {
        'jd_code': ['jd_code', 'sans-serif'], 'FiraMono': ['FiraMono', 'sans-serif'], 'TitilliumWeb-Light': ['TitilliumWeb-Light', 'sans-serif']
      },
      backgroundImage: {
        'back1-l':"url('/images/me3.png')",
        'back2-l':"url('/images/me.gif')",
        'back3-l':"url('/images/me4_22.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
