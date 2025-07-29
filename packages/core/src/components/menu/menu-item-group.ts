import type { BaseComponent } from "../base";

export interface MenuItemGroupProps<T> extends BaseComponent<T> {
	label?: string;
}

export interface MenuRadioItemGroupProps<T> extends MenuItemGroupProps<T> {
	defaultValue?: string;
	value?: string;
	onValueChange?: (value: string) => void;
}
