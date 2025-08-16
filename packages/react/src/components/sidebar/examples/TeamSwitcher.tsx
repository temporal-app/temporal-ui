import { ChevronsUpDown, Plus } from "lucide-react";
import React from "react";
import { Menu, MenuItem, MenuItemGroup, MenuItemSeparator } from "../../menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../SidebarMenu";

export function TeamSwitcher({
	teams,
}: {
	teams: {
		name: string;
		logo: React.ElementType;
		plan: string;
	}[];
}) {
	const [activeTeam, setActiveTeam] = React.useState(teams[0]);

	if (!activeTeam) {
		return null;
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Menu
					trigger={
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
								<activeTeam.logo className="size-4" />
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{activeTeam.name}</span>
								<span className="truncate text-xs">{activeTeam.plan}</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					}
				>
					<MenuItemGroup label="Teams">
						{teams.map((team) => (
							<MenuItem
								key={team.name}
								value={team.name}
								onClick={() => setActiveTeam(team)}
								className="gap-2 p-2"
							>
								<div className="flex size-6 items-center justify-center rounded-md border">
									<team.logo className="size-3.5 shrink-0" />
								</div>
								{team.name}
							</MenuItem>
						))}
						<MenuItemSeparator />
						<MenuItem
							value="add-team"
							className="gap-2 p-2"
						>
							<div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
								<Plus className="size-4" />
							</div>
							<div className="text-muted-foreground font-medium">Add team</div>
						</MenuItem>
					</MenuItemGroup>
				</Menu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
