import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
	],
	test: {
		setupFiles: "src/setup-test.ts",
		globals: true,
		environment: "happy-dom",
		coverage: {
			provider: "v8",
		},
	},
});
