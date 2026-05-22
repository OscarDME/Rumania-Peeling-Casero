/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d8',
          300: '#f4a8b6',
          400: '#ec788e',
          500: '#df4d6c',
          600: '#c83255',
          700: '#a82547',
          800: '#8d2240',
          900: '#76213b',
        },
        cream: '#fdfaf6',
        ink: '#2a1f24',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(168, 37, 71, 0.18)',
        glow: '0 0 0 1px rgba(168, 37, 71, 0.08), 0 20px 60px -15px rgba(168, 37, 71, 0.25)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
