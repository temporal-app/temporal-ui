import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/styles.ts",
		"src/components/avatar/index.ts",
		"src/components/badge/index.ts",
		"src/components/box/index.ts",
		"src/components/button/index.ts",
		"src/components/card/index.ts",
		"src/components/field/index.ts",
		"src/components/loader/index.ts",
		"src/components/stack/index.ts",
		"src/components/text-input/index.ts",
		"src/components/textarea/index.ts",
	],
	format: [
		"esm"
	],
	dts: true,
	splitting: true,
	sourcemap: false,
	clean: true,
});
