import type { Meta, StoryObj } from "@kachurun/storybook-solid-vite";
import { ColorInput } from "./ColorInput";

const meta = {
	title: "Solid/Color Input",
	component: ColorInput,
	tags: ["autodocs"],
} satisfies Meta<typeof ColorInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteExample: Story = {
	args: {
		label: "Your favorite color",
		placeholder: "#000000",
		defaultValue: "#000000",
		hint: "We'll never share your favorite color with anyone else.",
	},
};

export const Invalid: Story = {
	args: {
		...CompleteExample.args,
		error: "Invalid favorite color",
	},
};

export const Disabled: Story = {
	args: {
		...CompleteExample.args,
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		...CompleteExample.args,
		readOnly: true,
	},
};
