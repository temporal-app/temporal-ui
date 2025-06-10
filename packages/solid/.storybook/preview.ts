// noinspection JSUnusedGlobalSymbols

import type { Preview } from '@kachurun/storybook-solid-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import "../src/styles.css";

const preview: Preview = {
	tags: ['autodocs'],
	parameters: {
		// automatically create action args for all props that start with "on"
		actions: { argTypesRegex: '^on.*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			codePanel: true,
		},
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: "light",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
	]
};

export default preview;
