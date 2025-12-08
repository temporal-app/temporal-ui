// noinspection JSUnusedGlobalSymbols

import { ArrowRight, Trash } from "lucide-solid";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Badge } from "./Badge";

const meta = {
	title: "Solid/Badge",
	component: Badge,
	tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Primary",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline",
	},
};

export const StartIcon: Story = {
	args: {
		variant: "destructive",
		children: (
			<>
				<Trash />
				Delete
			</>
		),
	},
};

export const EndIcon: Story = {
	args: {
		variant: "outline",
		children: (
			<>
				Open
				<ArrowRight />
			</>
		),
	},
};
