import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        army: {
          bg: '#0D1A0F',
          surface: '#122115',
          panel: '#1C2E1F',
          border: '#2D4030',
          green: '#4A7C59',
          brass: '#C9A84C',
          parchment: '#E8E0CC',
          muted: '#8A8068',
          faint: '#4D4A3F',
          danger: '#8B2A2A',
          white: '#F5F0E8',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Exo 2', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        '3xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        '2xl': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15' }],
        section: ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
      },
      animation: {
        'scan-down': 'scanDown 1.2s ease-in-out',
        'draw-path': 'drawPath 0.8s ease-in-out forwards',
        typewriter: 'typewriter 0.04s steps(1) forwards',
        'progress-fill': 'progressFill 0.6s ease-out forwards',
        'slide-up-out': 'slideUpOut 0.7s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bounce-chevron': 'bounceChevron 1.8s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'orbit-spin': 'orbitSpin var(--orbit-duration, 12s) linear infinite',
        'grid-drift': 'gridDrift 20s linear infinite',
        'brass-pulse': 'brassPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        scanDown: { '0%': { top: '-4px' }, '100%': { top: '100%' } },
        drawPath: { '0%': { strokeDashoffset: '1000' }, '100%': { strokeDashoffset: '0' } },
        progressFill: { '0%': { width: '0%' }, '100%': { width: '100%' } },
        slideUpOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceChevron: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbitSpin: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        gridDrift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-60px)' },
        },
        brassPulse: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        typewriter: { from: { opacity: '1' }, to: { opacity: '1' } },
      },
      boxShadow: {
        'brass-glow': '0 0 20px rgba(201, 168, 76, 0.12)',
        'brass-glow-md': '0 0 40px rgba(201, 168, 76, 0.20)',
        'brass-glow-lg': '0 0 60px rgba(201, 168, 76, 0.30)',
        panel: 'inset 0 0 20px rgba(0, 0, 0, 0.4)',
      },
      dropShadow: {
        brass: '0 0 12px rgba(201, 168, 76, 0.5)',
        'brass-lg': '0 0 24px rgba(201, 168, 76, 0.7)',
      },
      borderColor: {
        'brass-subtle': 'rgba(201, 168, 76, 0.25)',
        'brass-mid': 'rgba(201, 168, 76, 0.45)',
        'brass-hover': 'rgba(201, 168, 76, 0.80)',
        'green-subtle': 'rgba(74, 124, 89, 0.40)',
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'brass-gradient': 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
      },
      backdropBlur: { xs: '2px' },
      transitionTimingFunction: {
        military: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'hard-out': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        '180': '180ms',
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

export default config
