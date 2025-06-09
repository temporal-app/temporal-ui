import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/styles.ts",
		"src/components/button/index.ts",
	],
	format: [
		"esm",
		"cjs",
	],
	dts: true,
	splitting: true,
	sourcemap: true,
	clean: true,
});
