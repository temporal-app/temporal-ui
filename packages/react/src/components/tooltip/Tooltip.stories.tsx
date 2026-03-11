// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "../button";
import { Stack } from "../stack";
import { Tooltip } from "./Tooltip";

const meta = {
	title: "React/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	args: { onOpenChange: fn() },
	argTypes: {
		position: {
			control: "object",
		},
		openDelay: {
			control: "number",
		},
		closeDelay: {
			control: "number",
		},
		disabled: {
			control: "boolean",
		},
		interactive: {
			control: "boolean",
		},
		showArrow: {
			control: "boolean",
		},
		defaultOpen: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

function SampleTrigger(props: Record<string, unknown>) {
	return <Button {...props}>Hover me</Button>;
}

export const Default: Story = {
	args: {
		trigger: <SampleTrigger />,
		children: "Tooltip content",
	},
};

export const WithArrow: Story = {
	args: {
		...Default.args,
		showArrow: true,
		children: "Tooltip with arrow",
	},
};

export const PositionTop: Story = {
	args: {
		...Default.args,
		children: "Top positioned tooltip",
		position: {
			placement: "top",
		},
	},
};

export const PositionRight: Story = {
	args: {
		...Default.args,
		children: "Right positioned tooltip",
		position: {
			placement: "right",
		},
	},
};

export const PositionLeft: Story = {
	args: {
		...Default.args,
		children: "Left positioned tooltip",
		position: {
			placement: "left",
		},
	},
};

export const PositionBottom: Story = {
	args: {
		...Default.args,
		children: "Bottom positioned tooltip",
		position: {
			placement: "bottom",
		},
	},
};

export const Interactive: Story = {
	args: {
		...Default.args,
		interactive: true,
		children: (
			<div>
				<p>Interactive tooltip - hover over this content</p>
				<Button size="sm">Action</Button>
			</div>
		),
	},
};

export const CustomDelays: Story = {
	args: {
		...Default.args,
		openDelay: 200,
		closeDelay: 300,
		children: "Opens after 200ms, closes after 300ms",
	},
};

export const DefaultOpen: Story = {
	args: {
		...Default.args,
		defaultOpen: true,
		children: "Initially visible tooltip",
	},
};

export const WithOffset: Story = {
	args: {
		...Default.args,
		children: "Tooltip with offset",
		position: {
			placement: "bottom",
			offset: {
				mainAxis: 12,
				crossAxis: 8,
			},
		},
	},
};

export const MultipleTooltips: Story = {
	render: () => (
		<Stack gap={4} row>
			<Tooltip trigger={<Button>First</Button>}>First tooltip</Tooltip>
			<Tooltip trigger={<Button>Second</Button>}>Second tooltip</Tooltip>
			<Tooltip trigger={<Button>Third</Button>}>Third tooltip</Tooltip>
		</Stack>
	),
};
