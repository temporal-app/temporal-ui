/// <reference types="vitest" />
/// <reference types="vite/client" />

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [solid(), tailwindcss()],
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: ["../../node_modules/@testing-library/jest-dom"],
	},
});