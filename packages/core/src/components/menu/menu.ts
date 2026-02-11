import type { BaseComponent, Position } from "../base";

export interface MenuProps<T> extends BaseComponent<T> {
	onSelect?: (value: string) => void;
	position?: Position;
}

export interface MenuItemProps {
	className?: string;
	testId?: string;
}

export interface MenuCheckboxItemProps extends MenuItemProps {}

export interface MenuItemGroupProps extends MenuItemProps {
	label?: string;
}

export interface MenuItemSeparatorProps extends MenuItemProps {}
export interface MenuRadioItemProps extends MenuItemProps {}
export interface MenuRadioItemGroupProps extends MenuItemProps {
	label?: string;
	onValueChange?: (value: string) => void;
}
