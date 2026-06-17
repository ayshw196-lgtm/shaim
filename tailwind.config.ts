import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        neon: {
          purple: '#b000d9',
          pink: '#ff006e',
          cyan: '#00d9ff',
          lime: '#39ff14',
        },
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #b000d9 0%, #ff006e 100%)',
        'gradient-island': 'linear-gradient(180deg, #1a0033 0%, #3d0066 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'confetti-fall': 'confetti-fall 3s ease-in forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(184, 0, 217, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(184, 0, 217, 1)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'confetti-fall': {
          'to': {
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
