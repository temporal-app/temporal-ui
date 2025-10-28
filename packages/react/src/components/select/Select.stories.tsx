// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";
import { createListCollection, useFilter, useListCollection, type Combobox } from ".";
import { Banana } from "lucide-react";

const meta = {
	title: "React/Select",
	component: Select,
	tags: ["autodocs"],
	args: {},
	argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const collection = createListCollection({ items: [] as never });

export const Default: Story = {
	args: {
		className: "min-w-[250px]",
		collection,
		label: "Fruits",
		portal: true,
	},
	render: (args) => {
		const { contains } = useFilter({ sensitivity: "base" });

		const { collection, filter } = useListCollection({
			initialItems: [
				{ value: "apple", label: "Apple" },
				{ value: "banana", label: "Banana", icon: <Banana /> },
				{ value: "cherry", label: "Cherry" },
				{ value: "tomato", label: "Tomato" },
				{ value: "orange", label: "Orange" },
				{ value: "strawberry", label: "Strawberry" },
				{ value: "pineapple", label: "Pineapple" },
				{ value: "mango", label: "Mango" },
				{ value: "grape", label: "Grape" },
				{ value: "watermelon", label: "Watermelon" },
				{ value: "kiwi", label: "Kiwi" },
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
				{ value: "dragonfruit", label: "Dragon fruit" },
				{ value: "passionfruit", label: "Passion fruit" },
			],
			filter: contains,
		});

		const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
			filter(details.inputValue);
		};

		return (
			<Select
				{...args}
				collection={collection}
				onInputValueChange={handleInputChange}
			/>
		);
	},
};

export const MaxDropdownHeight: Story = {
	...Default,
	args: {
		...Default.args,
		maxDropdownHeight: 150,
	},
};

export const Searchable: Story = {
	...Default,
	args: {
		...Default.args,
		searchable: true,
	},
};