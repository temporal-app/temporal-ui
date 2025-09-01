import type { FieldProps } from "../field";

export interface SelectItem<T> {
	/** The value of the item. */
	value: string;
	/** The label of the item. */
	label: T;
	/** (Optional) The group of the item. */
	group?: string;
	/** (Optional) The icon of the item. */
	icon?: T;
	/** (Optional) Whether the item is disabled. */
	disabled?: boolean;
}

export interface SelectProps<T> extends FieldProps<T> {
	/** The start section of the select. */
	startSection?: T;
	/** The indicator of the select. */
	indicator?: T;
	/** The data of the select. */
	data?: SelectItem<T>[];
	/** The placeholder of the select. */
	placeholder?: string;
	/** Whether to portal the select. */
	portal?: boolean;
	/** Whether to allow deselecting the selected item. */
	deselectable?: boolean;
	/** The default value of the select in uncontrolled mode. */
	defaultValue?: string[];
	/** The value of the select in controlled mode. */
	value?: string[];
	onValueChange?: (value: string[]) => void;
	/** Custom function to render the item. */
	renderItem?: (item: SelectItem<T>) => T;
}
