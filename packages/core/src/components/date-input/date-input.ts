import type { FieldProps } from "../field";

export interface DateInputProps<T> extends FieldProps<T> {
	/** The placeholder of the date input. */
	placeholder?: string;
}