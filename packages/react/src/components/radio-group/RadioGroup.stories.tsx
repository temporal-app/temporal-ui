// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import  { RadioGroup, type RadioGroupItem } from "./RadioGroup";

const meta = {
	title: "React/Radio Group",
	component: RadioGroup,
	tags: [ "autodocs" ],
	args: { onValueChange: fn() },
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
		}
	},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: RadioGroupItem[] = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Cherry", value: "cherry", disabled: true },
	{ label: "Date", value: "date" },
];

export const Default: Story = {
	args: {
		items: sampleItems,
		defaultValue: "apple"
	},
};

export const Horizontal: Story = {
	args: {
		...Default.args,
		items: sampleItems,
		orientation: 'horizontal'
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		...Default.args,
		readOnly: true,
	},
};

export const Required: Story = {
	args: {
		...Default.args,
		required: true,
	},
};

export const WithHint: Story = {
	args: {
		...Default.args,
		hint: "Select your favorite fruits from the list below.",
	},
};

export const WithError: Story = {
	args: {
		...Default.args,
		error: "Please select at least one fruit.",
	},
};

export const ManyOptions: Story = {
	args: {
		label: "Programming Languages",
		hint: "Select your preferred programming language.",
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
	},
};
