// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, type StackProps } from "./Stack.tsx";

const meta = {
	title: "React/Stack",
	component: Stack,
	tags: [ "autodocs" ],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Block = (props: StackProps)=> {
	return (
		<Stack
			h={40}
			{...props}
			style={{
				border: "2px solid oklch(70.4% 0.191 22.216)",
				background: "repeating-linear-gradient(45deg, #ccc, #ccc 10px, #eee 10px, #eee 20px)",
			}}
		/>
	)
}

const Wrapper = (props: StackProps) => {
	return (
		<Stack
			h={80}
			{...props}
			style={{
				border: "2px solid oklch(67.3% 0.182 276.935)",
			}}
		/>
	)
}


export const Padding: Story = {
	render: () => (
		<Wrapper p={5}>
			<Block/>
		</Wrapper>
	),
}

export const PaddingIndividual: Story = {
	render: () => (
		<Wrapper pt={3} pb={6} pl={3} pr={12}>
			<Block/>
		</Wrapper>
	),
}

export const PaddingAxis: Story = {
	render: () => (
		<Wrapper px={3} py={6}>
			<Block/>
		</Wrapper>
	),
}


export const Margin: Story = {
	render: () => (
		<Wrapper>
			<Block m={5}/>
		</Wrapper>
	),
}

export const MarginIndividual: Story = {
	render: () => (
		<Wrapper>
			<Block mt={3} mb={6} ml={3} mr={12}/>
		</Wrapper>
	),
}

export const MarginAxis: Story = {
	render: () => (
		<Wrapper>
			<Block mx={3} my={6}/>
		</Wrapper>
	),
}

export const Centered: Story = {
	render: () => (
		<Wrapper center>
			<Block w={50}/>
		</Wrapper>
	),
}

export const GapVertical: Story = {
	render: () => (
		<Wrapper gap={4} h={50}>
			<Block h={20} />
			<Block h={20} />
			<Block h={20} />
			<Block h={20} />
		</Wrapper>
	),
}

export const GapHorizontal: Story = {
	render: () => (
		<Wrapper row gap={4}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const AlignStart: Story = {
	render: () => (
		<Wrapper row gap={4} align={"start"} h={120}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const AlignCenter: Story = {
	render: () => (
		<Wrapper row gap={4} align={"center"} h={120}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const AlignStretch: Story = {
	render: () => (
		<Wrapper row gap={4} align={"stretch"} h={120}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const AlignEnd: Story = {
	render: () => (
		<Wrapper row gap={4} align={"end"} h={120}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const JustifyStart: Story = {
	render: () => (
		<Wrapper row gap={4} justify={"start"}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const JustifyCenter: Story = {
	render: () => (
		<Wrapper row gap={4} justify={"center"}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const JustifyEvenly: Story = {
	render: () => (
		<Wrapper row gap={4} justify={"evenly"}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const JustifyBetween: Story = {
	render: () => (
		<Wrapper row gap={4} justify={"between"}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const JustifyAround: Story = {
	render: () => (
		<Wrapper row gap={4} justify={"around"}>
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
			<Block w={80} />
		</Wrapper>
	),
}

export const JustifyEnd: Story = {
	render: () => (
		<Wrapper row gap={4} justify={"end"}>
			<Block w={20} />
			<Block w={20} />
			<Block w={20} />
			<Block w={20} />
		</Wrapper>
	),
}
