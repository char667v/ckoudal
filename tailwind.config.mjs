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
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				float: 'float 3s ease-in-out infinite',
			},
		},
	},
	variants: {},
	plugins: [],
};
