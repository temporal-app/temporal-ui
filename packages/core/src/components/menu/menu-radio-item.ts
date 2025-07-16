import type { MenuItemProps } from "./menu-item";

export interface MenuRadioItemProps<T> extends MenuItemProps<T> {
	value: string;
	onValueChange?: (value: string) => void;
}