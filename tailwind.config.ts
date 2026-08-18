import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light premium base — warm cream / off-white
        bg: {
          DEFAULT: '#efe9df',
          900: '#f5f0e7',
          800: '#faf6ee',
          700: '#ffffff',
        },
        surface: '#ffffff',
        surface2: '#fbf7ef',
        // Dark typography
        fg: {
          DEFAULT: '#1a1a1a',
          strong: '#0a0a0a',
          muted: '#6b6b6b',
          faint: '#a09a8e',
        },
        // Restrained accent — orange
        accent: {
          DEFAULT: '#ff5b1f',
          dim: '#e84a13',
          2: '#ff7a3d',
          soft: 'rgba(255,91,31,0.12)',
        },
        // Cool secondary
        steel: {
          DEFAULT: '#7b8aa3',
          dim: '#5b6a82',
        },
        line: 'rgba(20,20,20,0.08)',
        'line-strong': 'rgba(20,20,20,0.18)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-grotesk)', 'Space Grotesk', 'Inter', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Instrument Serif', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tech: '0.22em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1.05) translateY(0)' },
          '100%': { transform: 'scale(1.15) translateY(-1.5%)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) rotate(12deg)' },
          '100%': { transform: 'translateX(220%) rotate(12deg)' },
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee-slow 60s linear infinite',
        'ken-burns': 'ken-burns 24s ease-in-out infinite alternate',
        shine: 'shine 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
