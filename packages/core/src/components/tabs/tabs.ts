import type { BaseComponent } from "../base";

export interface TabsProps<T> extends BaseComponent<T> {
	variant?: "default" | "pills";
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
	orientation?: "horizontal" | "vertical";
	lazyMount?: boolean;
	unmountOnExit?: boolean;
}