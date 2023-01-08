/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				// sm: '2rem',
				// lg: '4rem',
				// xl: '5rem',
				// '2xl': '6rem',
			},
		},

		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},

			colors: {
				white: '#ffffff',
				light: '#F3F6FB',
				dark: '#000000',
				'dark-light': '#2A4969',
				primary: '#3257F3',
				secondary: '#6C757D',
				success: '#02C37E',
				info: '#10CAF0',
				warning: '#FFC007',
				danger: '#DC3444',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
