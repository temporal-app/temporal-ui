import type { Meta, StoryObj } from "@kachurun/storybook-solid-vite";
import type { ColumnDef } from "@tanstack/solid-table";
import { DataTable } from "./DataTable";

type Person = {
	name: string;
	title: string;
	email: string;
	role: string;
};

const meta = {
	title: "Solid/Data Table",
	component: DataTable<Person>,
	tags: ["autodocs"],
} satisfies Meta<typeof DataTable<Person>>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: Person[] = [
	{ name: "Liam Johnson", title: "Software Engineer", email: "liam@example.com", role: "Admin" },
	{ name: "Olivia Smith", title: "Product Manager", email: "olivia@example.com", role: "Editor" },
	{ name: "Noah Williams", title: "UX Designer", email: "noah@example.com", role: "Viewer" },
	{ name: "Emma Brown", title: "Data Analyst", email: "emma@example.com", role: "Viewer" },
];

const columns: ColumnDef<Person>[] = [
	{ accessorKey: "name", header: "Name" },
	{ accessorKey: "title", header: "Title" },
	{ accessorKey: "email", header: "Email" },
	{ accessorKey: "role", header: "Role" },
];

export const Default: Story = {
	args: { columns, data },
	render: () => (
		<DataTable<Person>
			columns={columns}
			data={data}
		/>
	),
};
