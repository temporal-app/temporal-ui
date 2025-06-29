// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
	title: "React/Text Area",
	component: Textarea,
	tags: [ "autodocs" ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;


export const CompleteExample: Story = {
	args: {
		label: "Message",
		placeholder: "Type your message here...",
		hint: "Anything you have in mind really",
	}
};

export const Invalid: Story = {
	args: {
		...CompleteExample.args,
		error: "Invalid email address",
	}
};

export const Disabled: Story = {
	args: {
		...CompleteExample.args,
		disabled: true
	}
};

export const ReadOnly: Story = {
	args: {
		...CompleteExample.args,
		readOnly: true
	}
};

export const AutoResize: Story = {
	args: {
		...CompleteExample.args,
		autoresize: true,
	}
};

export const CustomRows: Story = {
	args: {
		...CompleteExample.args,
		rows: 5,
	}
};
