// noinspection JSUnusedGlobalSymbols

import type { StorybookConfig } from "@kachurun/storybook-solid-vite";
import { mergeConfig } from "vite";
import { dirname, join } from "node:path";

function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, "package.json")));
}

export default (<StorybookConfig>{
	framework: "@kachurun/storybook-solid-vite",
	addons: [
		getAbsolutePath("@storybook/addon-docs"), 
		getAbsolutePath("@storybook/addon-themes")
	],
	stories: [
		"../src/components/**/*.mdx", 
		"../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	async viteFinal(config) {
		return mergeConfig(config, {
			define: {
				"process.env": {},
			},
		});
	},
	docs: {
		autodocs: true,
	},
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			// 👇 Default prop filter, which excludes props from node_modules
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
});
