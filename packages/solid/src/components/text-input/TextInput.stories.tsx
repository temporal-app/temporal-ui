// noinspection JSUnusedGlobalSymbols

import { AtSign } from "lucide-solid";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { TextInput } from "./TextInput";

const meta = {
	title: "Solid/Text Input",
	component: TextInput,
	tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteExample: Story = {
	args: {
		label: "Email",
		placeholder: "Input your email address...",
		hint: "We'll never share your email with anyone else.",
	},
};

export const Invalid: Story = {
	args: {
		...CompleteExample.args,
		error: "Invalid email address",
	},
};

export const Disabled: Story = {
	args: {
		...CompleteExample.args,
		disabled: true,
	},
};

export const WithStartSection: Story = {
	args: {
		...CompleteExample.args,
		startSection: <AtSign size={18} />,
	},
};

export const WithEndSection: Story = {
	args: {
		...CompleteExample.args,
		endSection: <AtSign size={18} />,
	},
};

export const ReadOnly: Story = {
	args: {
		...CompleteExample.args,
		readOnly: true,
	},
};
