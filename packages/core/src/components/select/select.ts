import type { FieldProps } from "../field";

export interface SelectItem<M = unknown, T = unknown> {
	/** The value of the item. */
	value: string;
	/** The label of the item. */
	label: string;
	/** (Optional) The group of the item. */
	group?: string;
	/** (Optional) The icon of the item. */
	icon?: T;
	/** (Optional) Whether the item is disabled. */
	disabled?: boolean;
	data?: M;
}

export type RenderItemFn<M = unknown, T = unknown> = (item: SelectItem<M, T>, component: "option" | "trigger") => T;

export interface SelectProps<M = unknown, T = unknown> extends FieldProps<T> {
	name?: string;
	/** The start section of the select. */
	startSection?: T;
	/** The indicator of the select. */
	indicator?: T;
	/** The data of the select. */
	data?: SelectItem<M, T>[];
	/** The placeholder of the select. */
	placeholder?: string;
	/** Whether to portal the select. */
	portal?: boolean;
	/** Whether to allow deselecting the selected item. */
	deselectable?: boolean;
	/** The default value of the select in uncontrolled mode. */
	defaultValue?: string | null;
	/** The value of the select in controlled mode. */
	value?: string | null;
	onBlur?: () => void;
	onValueChange?: (value?: string | null) => void;
	/** Custom function to render the item. */
	renderItem?: RenderItemFn<M, T>;
	maxDropdownHeight?: number;
}
