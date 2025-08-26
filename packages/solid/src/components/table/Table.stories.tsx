// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@kachurun/storybook-solid-vite";
import { For } from "solid-js";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./Table";

const meta = {
	title: "Solid/Table",
	component: Table,
	tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
	{ name: "Liam Johnson", title: "Software Engineer", email: "liam@example.com", role: "Admin" },
	{ name: "Olivia Smith", title: "Product Manager", email: "olivia@example.com", role: "Editor" },
	{ name: "Noah Williams", title: "UX Designer", email: "noah@example.com", role: "Viewer" },
	{ name: "Emma Brown", title: "Data Analyst", email: "emma@example.com", role: "Viewer" },
];

export const Default: Story = {
	render: () => (
		<Table>
			<TableCaption>A list of users.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Title</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Role</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<For each={data}>
					{(item) => (
						<TableRow>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.title}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>{item.role}</TableCell>
						</TableRow>
					)}
				</For>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={4}>
						Showing {data.length} of {data.length}
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
};
