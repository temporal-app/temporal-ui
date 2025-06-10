// noinspection JSUnusedGlobalSymbols

import type { StorybookConfig } from '@kachurun/storybook-solid-vite';
import { mergeConfig } from 'vite';

export default <StorybookConfig>{
	framework: '@kachurun/storybook-solid-vite',
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		{
			name: '@storybook/addon-vitest',
			options: {
				cli: false,
			},
		},
	],
	stories: [
		'../src/components/**/*.mdx',
		'../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	async viteFinal(config) {
		return mergeConfig(config, {
			define: {
				'process.env': {},
			},
		});
	},
	docs: {
		autodocs: true,
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			// 👇 Default prop filter, which excludes props from node_modules
			propFilter: (prop: any) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
};
