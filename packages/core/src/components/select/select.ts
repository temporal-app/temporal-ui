import type { FieldProps } from "../field";

export interface SelectItem<D = unknown, T = unknown> {
	value: string;
	label: string;
	group?: string;
	icon?: T;
	disabled?: boolean;
	data?: D;
}

export type RenderItemFn<D = unknown, T = unknown> = (item: SelectItem<D, T>, component: "option" | "trigger") => T;

export interface SelectProps<T> extends FieldProps<T> {
	portal?: boolean;
	renderItem?: RenderItemFn<SelectItem, T>;
	icon?: T;
	maxDropdownHeight?: number;
	searchable?: boolean;
	searchPlaceholder?: string;
	classes?: {
		root?: string;
		label?: string;
		hint?: string;
		error?: string;
		selectRoot?: string;
		positioner?: string;
		scrollArea?: string;
		content?: string;
		control?: string;
		itemGroup?: string;
		itemIndicator?: string;
		item?: string;
		indicator?: string;
		valueText?: string;
	};
}
