import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070A12',
          900: '#0B1020',
          800: '#121A33',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99,102,241,0.25), 0 10px 30px rgba(0,0,0,0.6)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite',
      },
    },
  },
  plugins: [typography],
}
export default config
