import type {
	SidebarMenuButtonProps as CoreSidebarMenuButtonProps,
	SidebarMenuLinkProps as CoreSidebarMenuLinkProps,
	SidebarMenuSubButtonProps as CoreSidebarMenuSubButtonProps,
} from "@temporal-ui/core/sidebar";
import { cx } from "@temporal-ui/core/utils/cx";

export interface SidebarMenuProps extends React.ComponentProps<"ul"> {}

export function SidebarMenu(props: SidebarMenuProps) {
	return (
		<ul
			{...props}
			data-scope="sidebar"
			data-part="menu"
		/>
	);
}

export interface SidebarMenuItemProps extends React.ComponentProps<"li"> {}

export function SidebarMenuItem(props: SidebarMenuItemProps) {
	return (
		<li
			{...props}
			data-scope="sidebar"
			data-part="menu-item"
			className={cx("group/menu-item", props.className)}
		/>
	);
}

export type SidebarMenuButtonProps = React.ComponentProps<"button"> & CoreSidebarMenuButtonProps;

export function SidebarMenuButton(props: SidebarMenuButtonProps) {
	const { variant = "default", size = "default", isActive, ...rest } = props;

	return (
		<button
			{...rest}
			data-scope="sidebar"
			data-part="menu-button"
			data-variant={variant}
			data-size={size}
			data-active={isActive}
		/>
	);
}

export type SidebarMenuLinkProps = React.ComponentProps<"a"> & CoreSidebarMenuLinkProps;

export function SidebarMenuLink(props: SidebarMenuLinkProps) {
	const { isActive, ...rest } = props;

	return (
		<a
			{...rest}
			data-scope="sidebar"
			data-part="menu-link"
			data-active={isActive}
		/>
	);
}

export type SidebarMenuActionProps = React.ComponentProps<"button">;

export function SidebarMenuAction(props: SidebarMenuActionProps & { showOnHover?: boolean }) {
	return (
		<button
			{...props}
			data-scope="sidebar"
			data-part="menu-action"
			data-show-on-hover={props.showOnHover}
		/>
	);
}

export interface SidebarMenuBadgeProps extends React.ComponentProps<"div"> {}

export function SidebarMenuBadge(props: SidebarMenuBadgeProps) {
	return (
		<div
			{...props}
			data-scope="sidebar"
			data-part="menu-badge"
		/>
	);
}

export interface SidebarMenuSubProps extends React.ComponentProps<"ul"> {}

export function SidebarMenuSub(props: SidebarMenuSubProps) {
	return (
		<ul
			{...props}
			data-scope="sidebar"
			data-part="menu-sub"
		/>
	);
}

export interface SidebarMenuSubItemProps extends React.ComponentProps<"li"> {}

export function SidebarMenuSubItem(props: SidebarMenuSubItemProps) {
	return (
		<li
			{...props}
			data-scope="sidebar"
			data-part="menu-sub-item"
			className={cx("group/menu-sub-item", props.className)}
		/>
	);
}

export type SidebarMenuSubButtonProps = React.ComponentProps<"a"> & CoreSidebarMenuSubButtonProps;

export function SidebarMenuSubButton(props: SidebarMenuSubButtonProps) {
	const { size = "md", isActive, ...rest } = props;

	return (
		<a
			{...rest}
			data-scope="sidebar"
			data-part="menu-sub-button"
			data-size={size}
			data-active={isActive}
		/>
	);
}
