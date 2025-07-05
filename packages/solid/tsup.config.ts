// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/styles.ts",
		"src/components/*/index.ts",
	],
	format: [
		"esm"
	],
	noExternal: [
		"@temporal-ui/core"
	],
	dts: true,
	splitting: true,
	sourcemap: false,
	clean: true,
});
