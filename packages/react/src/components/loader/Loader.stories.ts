// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "./Loader";

const meta = {
	title: "React/Loader",
	component: Loader,
	tags: [ "autodocs" ],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardSize: Story = {};

export const SizeXS: Story = {
	args: {
		size: "xs",
	}
}

export const SizeSM: Story = {
	args: {
		size: "sm",
	}
}

export const SizeLG: Story = {
	args: {
		size: "lg",
	}
}

export const SizeXL: Story = {
	args: {
		size: "xl",
	}
}
