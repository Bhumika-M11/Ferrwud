import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { teal: '#19383B', terra: '#873B2D', copper: '#B96D4B', ivory: '#F7F5F1', beige: '#EAE4DC', charcoal: '#292B2A' }, fontFamily: { serif: ['Georgia', 'serif'] } } }, plugins: [] };
export default config;
