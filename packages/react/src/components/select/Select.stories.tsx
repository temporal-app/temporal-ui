// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";
import { createListCollection } from ".";
import { Banana } from "lucide-react";
import type { SelectItem } from "./SelectContent";

const meta = {
	title: "React/Select",
	component: Select,
	tags: ["autodocs"],
	args: {},
	argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const collection = createListCollection<SelectItem>({
	items: [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana", group: "Favorites", icon: <Banana /> },
		{ value: "cherry", label: "Cherry" },
		{ value: "tomato", label: "Tomato" },
		{ value: "orange", label: "Orange", disabled: true },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "pineapple", label: "Pineapple" },
		{ value: "mango", label: "Mango" },
		{ value: "grape", label: "Grape" },
		{ value: "watermelon", label: "Watermelon" },
		{ value: "kiwi", label: "Kiwi" },
		{ value: "pear", label: "Pear" },
		{ value: "peach", label: "Peach" },
	],
	groupBy: (item) => item.group ?? "Default",
	groupSort: "desc",
});

export const Default: Story = {
	args: {
		className: "min-w-[200px]",
		collection,
		label: "Fruits",
		portal: true,
		deselectable: true,
	},
};
