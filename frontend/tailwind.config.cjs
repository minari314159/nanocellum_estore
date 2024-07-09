/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
	mode: "jit",
	darkMode: "false",
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
		},
		screens: {
			xs: "320px",
			ss: "480px",
			sm: "620px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["retro"],
	},
};
