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
        navy: {
          950: '#040914',
          900: '#09152b',
          850: '#0e1e3d',
          800: '#14294f',
          700: '#1a3768',
          600: '#234988',
          500: '#2e60af',
        },
        gold: {
          300: '#f6e09e',
          400: '#edd075',
          500: '#d4af37',
          600: '#b89228',
          700: '#8e6c19',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', 'Trajan Pro', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-navy': '0 0 35px -5px rgba(22, 59, 101, 0.4)',
        'glow-gold': '0 0 25px -3px rgba(212, 175, 55, 0.35)',
        'luxury': '0 20px 40px -15px rgba(4, 9, 20, 0.15)',
      }
    },
  },
  plugins: [],
}
