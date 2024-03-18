import { config } from 'process';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			slideUp: {
				from: { transform: 'translateY(100%)' },
				to: { transform: 'translateY(0)' },
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
