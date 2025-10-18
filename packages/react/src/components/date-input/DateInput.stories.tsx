import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateInput, Calendar } from ".";

const meta = {
	title: "React/Date Input",
	component: DateInput,
	tags: ["autodocs"],
	argTypes: {
		selectionMode: {
			control: "select",
			options: ["single", "multiple", "range"],
		},
	},
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		fixedWeeks: true,
		closeOnSelect: true,
		disabled: false,
		numOfMonths: 1,
		outsideDaySelectable: false,
		selectionMode: "single",
	},
};

export const InputRange: Story = {
	args: {
		selectionMode: "range",
		numOfMonths: 2,
		fixedWeeks: true,
		outsideDaySelectable: true,
	},
};

export const CalendarSingle: Story = {
	args: {
		className: "w-[250px]",
	},
	render: (args) => <Calendar {...args} />,
};

export const CalendarRange: Story = {
	args: {
		selectionMode: "range",
		numOfMonths: 2,
		className: "w-[550px]",
		fixedWeeks: true,
		outsideDaySelectable: true,
	},
	render: (args) => <Calendar {...args} />,
};
