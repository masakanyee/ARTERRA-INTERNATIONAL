import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        arterra: {
          cream: '#F7F7F6',
          paper: '#F3F0E6',
          olive: '#6D653C',
          forest: '#3B6B42',
          ink: '#0F172A',
          charcoal: '#1E1C17',
          border: '#D0CAB8',
          muted: '#64748B',
          slate: '#334155',
          placeholder: '#94A3B8',
          warm: '#E9E5D8',
        },
      },
      fontFamily: {
        shippori: ['var(--font-shippori)', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        work: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
