import { CssSyntaxError } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary:'#212121', /* sort */ /* DONE */
			secondary: '#FFDA03',/* neon gul */ /* DONE */
		},
		extend: {
			spacing: {
				'58': '230px',
				'100': '25rem',
				'128': '39rem',
				'130': '44rem',
			},
			height: {
				'0.25': '0.25px',  // Custom height value
			},
		},
	},
	variants: {},
	plugins: [],
};
