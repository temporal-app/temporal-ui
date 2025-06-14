// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput.tsx";

const meta = {
	title: "React/Text Input",
	component: TextInput,
	tags: [ "autodocs" ],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;


export const CompleteExample: Story = {
	args: {
		label: "Email",
		placeholder: "Input your email address...",
		description: "We'll never share your email with anyone else.",
	}
}

export const Invalid: Story = {
	args: {
		...CompleteExample.args,
		hasError: true,
		errorText: "Invalid email address",
	}
}

export const Disabled: Story = {
	args: {
		...CompleteExample.args,
		disabled: true
	}
}
