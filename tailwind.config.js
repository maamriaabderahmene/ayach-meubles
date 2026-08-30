/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-italiana)', 'Georgia', 'serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['var(--font-italiana)', 'Georgia', 'serif'],
      },
      colors: {
        // ZAK SHOP — Monochrome Clothing Brand Palette
        'zak-black': {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          muted: '#2C2C2C',
        },
        'zak-charcoal': '#2C2C2C',
        'zak-white': {
          DEFAULT: '#FFFFFF',
          off: '#FAFAFA',
          warm: '#F5F5F5',
        },
        'zak-gray': {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Keep legacy names mapped to new values for backward compat
        'crema':  '#FAFAFA',
        'grigio': '#1A1A1A',
        'oro':    '#C9A84C',

        // Legacy Italian color aliases → mapped to ZAK SHOP B&W palette
        // so that old class names (e.g. bg-italia-green) still compile
        'italia-green': {
          DEFAULT: '#0A0A0A',
          dark:    '#000000',
          light:   '#1A1A1A',
        },
        'italia-red': {
          DEFAULT: '#2C2C2C',
          dark:    '#1A1A1A',
          light:   '#404040',
        },
        'italia-white': '#FFFFFF',

        // Shopify Dawn-style utility tokens
        'shopify-black':  '#121212',
        'shopify-bg':     '#F6F6F6',
        'shopify-border': '#E8E8E1',
        'shopify-text':   '#6B7280',

        // Semantic Aliases
        primary: {
          DEFAULT: '#0A0A0A',
          dark:    '#000000',
          light:   '#1A1A1A',
        },
        secondary: {
          DEFAULT: '#FAFAFA',
          dark:    '#F0F0F0',
        },
        accent: {
          DEFAULT: '#C9A84C',
          light:   '#DFC06A',
          dark:    '#A88A30',
        },
        gold: '#C9A84C',
      },
      boxShadow: {
        'zak-sm':     '0 2px 4px rgba(0, 0, 0, 0.08)',
        'zak-md':     '0 4px 12px rgba(0, 0, 0, 0.12)',
        'zak-lg':     '0 8px 24px rgba(0, 0, 0, 0.16)',
        'hover-lift': '0 12px 32px rgba(0, 0, 0, 0.14)',
        'elegant':    '0 4px 20px rgba(0, 0, 0, 0.08)',
        // Legacy aliases
        'italia-sm': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'italia-md': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'italia-lg': '0 8px 24px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out',
        'slide-up':    'slideUp 0.6s ease-out',
        'scale-in':    'scaleIn 0.3s ease-out',
        'scroll-reveal':'scrollReveal 0.8s ease-out forwards',
        'shimmer':     'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',     opacity: '1' },
        },
        scaleIn: {
          '0%':   { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        flagWave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        scrollReveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
