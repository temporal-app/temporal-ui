// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { DollarSign } from "lucide-react";
import { NumberInput } from "./NumberInput";

const meta = {
	title: "React/Number Input",
	component: NumberInput,
	tags: [ "autodocs" ],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;


export const CompleteExample: Story = {
	args: {
		label: "Your bonus points",
		placeholder: "0",
		min: 0,
		max: 100,
		step: 1,
		hint: "We'll never share your bonus points with anyone else.",
	}
};

export const Invalid: Story = {
	args: {
		...CompleteExample.args,
		error: "Invalid bonus points",
	}
};

export const Disabled: Story = {
	args: {
		...CompleteExample.args,
		disabled: true
	}
};

export const WithStartSection: Story = {
	args: {
		label: "Your bonus points",
		placeholder: "0",
		min: 0,
		max: 100,
		step: 1,
		startSection: <DollarSign size={18} />
	}
};

export const ReadOnly: Story = {
	args: {
		...CompleteExample.args,
		readOnly: true
	}
};
