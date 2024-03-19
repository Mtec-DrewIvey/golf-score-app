/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({ strategy: "class" }),
		function ({ addUtilities }) {
			addUtilities({
				".arrow-hide": {
					"&::-webkit-inner-spin-button": {
						"-webkit-appearance": "none",
						margin: 0,
					},
					"&::-webkit-outer-spin-button": {
						"-webkit-appearance": "none",
						margin: 0,
					},
				},
			});
		},
	],
};
