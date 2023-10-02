/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
			},
			colors: {
				primary: {
					50: "#f0f9ff",
					100: "#e0f2fe",
					200: "#b9e6fe",
					300: "#7cd2fd",
					400: "#36bdfa",
					500: "#0ca5eb",
					600: "#0084ca",
					700: "#0168a3",
					800: "#065886",
					900: "#0b496f",
					950: "#072f4a",
				},
			},
		},
	},
	plugins: [],
};
