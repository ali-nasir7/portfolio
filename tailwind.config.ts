import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark premium base — deep charcoal, not pure black
        bg: {
          DEFAULT: '#0b0b0c',
          900: '#0e0e10',
          800: '#121214',
          700: '#17171a',
          600: '#1d1d21',
        },
        surface: '#161618',
        surface2: '#1e1e22',
        // Warm off-white typography
        fg: {
          DEFAULT: '#f4f2ef',
          muted: '#a5a09a',
          faint: '#5e5a54',
        },
        // Restrained accent — warm amber
        accent: {
          DEFAULT: '#e3a856',
          dim: '#c08d3f',
          soft: 'rgba(227,168,86,0.14)',
        },
        // Cool secondary for technical metadata
        steel: {
          DEFAULT: '#9db4d0',
          dim: '#6d829c',
        },
        line: 'rgba(244,242,239,0.08)',
        'line-strong': 'rgba(244,242,239,0.16)',
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
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'ken-burns': 'ken-burns 24s ease-in-out infinite alternate',
        shine: 'shine 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
