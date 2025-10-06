// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "tsdown";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/styles.css",
		"src/components/*/index.ts",
		"src/components/base.ts",
		"src/utils/*/index.ts",
	],
	noExternal: [
		"@temporal-ui/core"
	],
	dts: true,
	sourcemap: false,
});
