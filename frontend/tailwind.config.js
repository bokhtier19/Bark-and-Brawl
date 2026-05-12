/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ink: {
                    DEFAULT: "#1c1917",
                    muted: "#57534e",
                    subtle: "#78716c",
                },
                paper: "#fafaf9",
                cream: "#f5f0e8",
                accent: {
                    DEFAULT: "#c2410c",
                    hover: "#9a3412",
                    muted: "#ea580c",
                },
            },
            fontFamily: {
                display: ['"Fjalla One"', "system-ui", "sans-serif"],
                sans: ["Outfit", "system-ui", "sans-serif"],
            },
            boxShadow: {
                lift: "0 20px 40px -12px rgba(28, 25, 23, 0.15)",
                card: "0 4px 24px -4px rgba(28, 25, 23, 0.08)",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out forwards",
            },
        },
    },

    plugins: [],
};
