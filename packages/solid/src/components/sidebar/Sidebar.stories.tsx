// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from "@kachurun/storybook-solid-vite";
import { Box } from "../box";
import { NavMain } from "./examples/NavMain";
import { NavProjects } from "./examples/NavProjects";
import { NavUser } from "./examples/NavUser";
import { TeamSwitcher } from "./examples/TeamSwitcher";
import { data } from "./examples/data";
import { Sidebar } from "./Sidebar";
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarInset } from "./SidebarComponent";
import { SidebarProvider } from "./SidebarProvider";
import { SidebarRail } from "./SidebarRail";
import { SidebarTrigger } from "./SidebarTrigger";

const meta = {
	title: "Solid/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	args: {
		side: "left",
		variant: "sidebar",
		collapsible: "icon",
	},
	argTypes: {
		side: {
			control: "inline-radio",
			options: ["left", "right"],
		},
		variant: {
			control: "inline-radio",
			options: ["sidebar", "inset", "floating"],
		},
		collapsible: {
			control: "inline-radio",
			options: ["icon", "none", "offcanvas"],
		},
	},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

function AppSidebar(props: Parameters<typeof Sidebar>[0]) {
	return (
		<Sidebar
			{...props}
		>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

export const Default: Story = {
	args: {
		side: "left",
		variant: "sidebar",
		collapsible: "icon",
	},
	render: (args) => (
		<Box class="">
			<SidebarProvider class="">
				<AppSidebar {...args} />
				<SidebarInset>
					<SidebarTrigger />
					{args.children}
				</SidebarInset>
			</SidebarProvider>
		</Box>
	),
};