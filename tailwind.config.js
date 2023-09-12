/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx, tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Cuyabra: ['Cuyabra', 'ILoveGlitter', 'sans-serif'],
			},
			fontSize: {
				mobile: '20px',
				tablet: '40px',
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.465, 0.183, 0.153, 0.946)',
			},
			colors: {
				first: '#d9ead3',
				second: '#afc9a4',
				third: '#84ae8f',
				fourth: '#92b7a0',
				fifth: '#9abeaf',
			},
			animationDelay: {
				2500: '2500ms',
			},
			transitionDelay: {
				custom: '120ms',
			},
			transitionDuration: {
				400: '400ms',
			},
			animation: {
				fadeIn: 'fadeIn 1.5s cubic-bezier(0.465, 0.183, 0.153, 0.946) forwards',
				fadeOut: 'fadeOut 1.5s cubic-bezier(0.465, 0.183, 0.153, 0.946)',
				menu: 'transform .3s cubic-bezier(0, .52, 0, 1)',
				slideOutRight: 'slideOutRight 1s cubic-bezier(0.465, 0.183, 0.153, 0.946)',
				customSpin: 'customSpin 3s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
				slideOutRight: {
					'100%': { transform: 'translateX(100%)' },
					'0%': { transform: 'translateX(-16px)' },
				},
				customSpin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
		},
	},
	plugins: [require('tailwindcss-animation-delay')],
};
