import type { BaseComponent } from "../base";

export interface MenuItemProps<T> extends BaseComponent<T> {
	value: string;
	disabled?: boolean;
	onSelect?: () => void;
	closeOnSelect?: boolean;
}
