// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@kachurun/storybook-solid-vite";
import { fn } from "storybook/test";
import { Button } from "../button";
import { Stack } from "../stack";
import { Dialog } from "./Dialog";

const meta = {
	title: "Solid/Dialog",
	component: Dialog,
	tags: [ "autodocs" ],
	args: { onOpenChange: fn()},
	argTypes: {
	}
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function SampleTrigger(props: Record<string, unknown>) {
	return (
		<Button {...props}>
			Open Dialog
		</Button>
	);
}

function SampleContent() {
	return (
		<Stack>
			Dialog Content
		</Stack>
	);
}

export const Default: Story = {
	args: {
		trigger: (props: Record<string, unknown>) => <SampleTrigger {...props} />,
		title: "Dialog Title",
		description: "Dialog Description",
	},
	render: () => <SampleContent />
};