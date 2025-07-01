// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/**/index.ts",
		"src/styles.css",
	],
	format: ["esm"],
	dts: true,
	splitting: false,
	sourcemap: false,
	clean: true,
});
