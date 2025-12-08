// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Loader } from "./Loader";

const meta = {
	title: "Solid/Loader",
	component: Loader,
	tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof meta>;

export default meta;

export const StandardSize: Story = {};

export const SizeXS: Story = {
	args: {
		size: "xs",
	},
};

export const SizeSM: Story = {
	args: {
		size: "sm",
	},
};

export const SizeLG: Story = {
	args: {
		size: "lg",
	},
};

export const SizeXL: Story = {
	args: {
		size: "xl",
	},
};
