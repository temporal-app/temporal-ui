
// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "React/Checkbox",
	component: Checkbox,
	tags: [ "autodocs" ],
	args: { onCheckedChange: fn() },
	argTypes: {
		disabled: {
			type: "boolean",
			control: "boolean",
		},
		checked: {
			control: {
				type: "select",
			},
			options: [ undefined, true, false, "indeterminate" ],
		}
	}
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Accept terms and conditions",
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true
	},
};

export const WithHint: Story = {
	args: {
		...Default.args,
		hint: "You must accept the terms and conditions to continue.",
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: "This field is required.",
	},
};

export const Indeterminate: Story = {
	args: {
		...Default.args,
		checked: "indeterminate",
	},
};
