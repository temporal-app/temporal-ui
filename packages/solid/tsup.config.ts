import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/styles.ts",
		"src/components/badge/index.ts",
		"src/components/button/index.ts",
		"src/components/loader/index.ts",
		"src/components/text-input/index.ts",
		"src/components/stack/index.ts",
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
