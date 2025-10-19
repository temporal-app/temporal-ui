import type { Position } from "../base";
import type { FieldProps } from "../field";

export interface DateInputProps<T> extends FieldProps<T> {
		value?: string[];
		defaultValue?: string[];
		onValueChange?: (value: string[]) => void;
		position?: Position;

		/** The start section of the trigger. */
		startSection?: T;
		/** The end section of the trigger. */
		endSection?: T;
	}