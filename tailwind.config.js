/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D8A7B1', // dusty pink
        secondary: '#F5E9E2', // beige
        accent: '#C9A368', // muted gold
        neutral: '#F5F5F0', // cream
        'text-primary': '#4A4A4A', // soft gray
        'text-secondary': '#6B6B6B',
        'dusty-pink': {
          50: '#FAF7F8',
          100: '#F5EEF0',
          200: '#EBDDE1',
          300: '#E1CCD2',
          400: '#D8A7B1',
          500: '#CE8B98',
          600: '#C46F7F',
          700: '#A85A6B',
          800: '#8C4757',
          900: '#703A47'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'map-texture': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDJMMjIuMDkgMTUuMjlMMzUgMTBMMjYuMjkgMjIuMDlMMzggMjBMMjQuNzEgMjcuOTFMMzAgMzhMMTcuOTEgMjkuNzFMMjAgNDBMNy45MSAzNC43MUwxMCA0MEwxNS4yOSAyNy45MUwyIDI2TDE1LjI5IDE3LjkxTDEwIDEwTDIyLjA5IDI0LjcxTDIwIDJaIiBmaWxsPSIjRDhBN0IxIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')",
        'passport-stamps': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjE1IiBzdHJva2U9IiNEOEE3QjEiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+CjxyZWN0IHg9IjYwIiB5PSI2MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiByeD0iMyIgc3Ryb2tlPSIjQzlBMzY4IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')"
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'flip-number': 'flipNumber 0.6s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        flipNumber: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0deg)' }
        }
      }
    }
  },
  plugins: []
}