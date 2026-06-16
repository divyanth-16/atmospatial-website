/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1326D3',
        gold: '#F2C500',
        sky: '#7EC8FF',
        navy: '#f8fbff',
        surface: '#F5F7FA',
        text: '#0F172A',
        'primary-dark': '#0d1ba8',
        'primary-light': '#3545e8',
        'navy-mid': '#eef6ff',
        'gold-dark': '#c9a400',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'orbit': 'orbit 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 20% 50%, #1326D3 0%, #081120 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(19,38,211,0.1) 0%, rgba(8,17,32,0.8) 100%)',
      }
    },
  },
  plugins: [],
}