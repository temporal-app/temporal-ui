import type { MenuItemProps } from "./menu-item";

export interface MenuCheckboxItemProps<T> extends MenuItemProps<T> {
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
}