// noinspection JSUnusedGlobalSymbols

import type { BaseComponent } from "../base";


export interface FieldProps<T> extends BaseComponent<T> {
	/** The label for the field. */
	label?: string
	/** The description of the field. */
	hint?: string;
	/** The error message to display. */
	error?: string;
	/** Whether the field is required. */
	required?: boolean;
	/** Whether the field is read-only. */
	readOnly?: boolean;
	/** Whether the field is disabled. */
	disabled?: boolean;
	/** Custom CSS classes to apply */
	classes?: {
		root?: string;
		label?: string;
		hint?: string;
		error?: string;
	}
}