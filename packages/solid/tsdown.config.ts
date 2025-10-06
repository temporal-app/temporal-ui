// noinspection JSUnusedGlobalSymbols

import { defineConfig } from "tsdown";

export default defineConfig({
	entry: [
		"src/index.ts",
		"src/components/*/index.ts",
		"src/hooks/*/index.ts",
	],
	dts: true,
	platform: "browser",
	outExtensions: () => {
		return {
			js: ".jsx",
		};
	},
});
