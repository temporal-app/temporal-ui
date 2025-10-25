// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@kachurun/storybook-solid-vite";
import { createListCollection, type SelectItem } from ".";
import { Select } from "./Select";
import { Banana } from "lucide-solid";

const meta = {
	title: "Solid/Select",
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
		{ value: "pear", label: "Pear" },
		{ value: "blueberry", label: "Blueberry" },
		{ value: "raspberry", label: "Raspberry" },
		{ value: "blackberry", label: "Blackberry" },
		{ value: "lemon", label: "Lemon" },
		{ value: "lime", label: "Lime" },
		{ value: "coconut", label: "Coconut" },
		{ value: "papaya", label: "Papaya" },
		{ value: "plum", label: "Plum" },
		{ value: "pomegranate", label: "Pomegranate" },
		{ value: "apricot", label: "Apricot" },
		{ value: "guava", label: "Guava" },
		{ value: "fig", label: "Fig" },
		{ value: "dragonfruit", label: "Dragonfruit" },
		{ value: "passionfruit", label: "Passionfruit" },
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



export const MaxDropdownHeight: Story = {
	args: {
		className: "min-w-[200px]",
		collection,
		label: "Fruits",
		portal: true,
		deselectable: true,
		maxDropdownHeight: 150,
	},
};

