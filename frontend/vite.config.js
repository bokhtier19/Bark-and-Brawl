import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Bark-and-Brawl",
    test: {
        environment: "jsdom",
        setupFiles: "./src/test/setup.js",
        globals: false,
        include: ["src/**/*.{test,spec}.{js,jsx}"],
    },
});
