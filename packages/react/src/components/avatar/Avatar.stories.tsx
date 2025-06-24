// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
	title: "React/Avatar",
	component: Avatar,
	tags: [ "autodocs" ],
	argTypes: {
		size: {
			control: "radio",
			options: [ "sm", "md", "lg" ]
		}
	}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const WithName: Story = {
	args: {
		name: "John Doe"
	}
};

export const WithImage: Story = {
	args: {
		name: "Jane Doe",
		src: "https://i.pravatar.cc/300"
	}
}

export const SizeSm: Story = {
	args: {
		size: "sm",
		name: "Jane Doe",
		src: "https://i.pravatar.cc/300"
	}
}

export const SizeLg: Story = {
	args: {
		size: "lg",
		name: "Jane Doe",
		src: "https://i.pravatar.cc/300"
	}
}
