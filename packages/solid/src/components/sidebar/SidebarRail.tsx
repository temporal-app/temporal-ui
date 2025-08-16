import type { HTMLProps } from "@ark-ui/solid";
import { useSidebar } from "./SidebarProvider";

export interface SidebarRailProps extends HTMLProps<"button"> {}

export function SidebarRail(props: SidebarRailProps) {
	const { toggleSidebar } = useSidebar();

	return (
		<button
			{...props}
			type="button"
			data-scope="sidebar"
			data-part="rail"
			aria-label="Toggle sidebar"
			title="Toggle sidebar"
			onClick={toggleSidebar}
		/>
	);
}