import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		setupFiles: "./setupTests.ts",
		projects: [
			{
				extends: true,
				test: {
					name: "core",
					environment: "node",
					include: [
						"packages/core/**/*.test.ts",
					]
				}
			}, {
				extends: true,
				test: {
					name: "react",
					environment: "happy-dom",
					include: [
						"packages/react/**/*.test.ts",
						"packages/react/**/*.test.tsx"
					]
				}
			}, {
				extends: true,
				test: {
					name: "solid",
					environment: "happy-dom",
					include: [
						"packages/solid/**/*.test.ts",
						"packages/solid/**/*.test.tsx"
					]
				}
			}
		],
	},
})
