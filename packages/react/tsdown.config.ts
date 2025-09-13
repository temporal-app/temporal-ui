// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "tsdown";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/styles.ts",
		"src/components/*/index.ts",
	],
	noExternal: [
		"@temporal-ui/core"
	],
	dts: true,
	sourcemap: false,
});
