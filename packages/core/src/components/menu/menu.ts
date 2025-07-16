import type { BaseComponent, Position } from "../base";

export interface MenuProps<T> extends BaseComponent<T> {
	onSelect?: (value: string) => void;
	closeOnSelect?: boolean;
	position?: Position
}
