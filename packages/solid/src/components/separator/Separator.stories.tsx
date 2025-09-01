// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@kachurun/storybook-solid-vite";
import { Separator } from "./Separator";

const meta = {
	title: "Solid/Separator",
	component: Separator,
	tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<div style={{ height: "200px" }}>
			Item 1 <Separator {...args} /> Item 2
		</div>
	)
};