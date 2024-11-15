const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
	content: ["*.html"],
	theme: {
		fontFamily: {
			poppins: 'var(--font-poppins)',
			inter: 'var(--font-inter)'
		},
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1300px",
			"2xl": "1500px",
		},
		extend: {
			colors: {
				'primary-color': 'var(--primary-color)',
			},
			animation: {
				'bgZoom': 'bgZoom 12s linear infinite', // Background image animation
			},
			keyframes: {
				bgZoom: {
					'0%, 100%': { transform: 'scale(1)' }, 
					'50%': { transform: 'scale(1.05)' },
				}
			},
		},
	},
	plugins: [],
});