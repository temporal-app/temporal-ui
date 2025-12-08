// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { fn } from "storybook/test";
import type { CheckboxGroupItem } from "./CheckboxGroup";
import { CheckboxGroup } from "./CheckboxGroup";

const meta = {
	title: "Solid/CheckboxGroup",
	component: CheckboxGroup,
	tags: ["autodocs"],
	args: { onValuesChange: fn() },
	argTypes: {
		disabled: {
			type: "boolean",
			control: "boolean",
		},
		readOnly: {
			type: "boolean",
			control: "boolean",
		},
		required: {
			type: "boolean",
			control: "boolean",
		},
		items: {
			control: "object",
		},
		values: {
			control: "object",
		},
		defaultValues: {
			control: "object",
		},
	},
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: CheckboxGroupItem[] = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Cherry", value: "cherry" },
	{ label: "Date", value: "date" },
];

export const Default: Story = {
	args: {
		name: "fruits",
		items: sampleItems,
	},
};

export const WithDefaultValues: Story = {
	args: {
		name: "fruits-default",
		items: sampleItems,
		defaultValues: ["apple", "cherry"],
	},
};

export const WithControlledValues: Story = {
	args: {
		name: "fruits-controlled",
		items: sampleItems,
		values: ["banana", "date"],
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		name: "fruits-disabled",
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		...Default.args,
		name: "fruits-readonly",
		readOnly: true,
		defaultValues: ["apple"],
	},
};

export const Required: Story = {
	args: {
		...Default.args,
		name: "fruits-required",
		required: true,
	},
};

export const WithHint: Story = {
	args: {
		...Default.args,
		name: "fruits-hint",
		hint: "Select your favorite fruits from the list below.",
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		name: "fruits-error",
		error: "Please select at least one fruit.",
	},
};

export const ManyOptions: Story = {
	args: {
		label: "Programming Languages",
		hint: "Select your preferred programming languages.",
		name: "programming-languages",
		items: [
			{ label: "JavaScript", value: "javascript" },
			{ label: "TypeScript", value: "typescript" },
			{ label: "Python", value: "python" },
			{ label: "Java", value: "java" },
			{ label: "C#", value: "csharp" },
			{ label: "Go", value: "go" },
			{ label: "Rust", value: "rust" },
			{ label: "Swift", value: "swift" },
			{ label: "Kotlin", value: "kotlin" },
			{ label: "Ruby", value: "ruby" },
		],
		defaultValues: ["typescript", "python"],
	},
};
