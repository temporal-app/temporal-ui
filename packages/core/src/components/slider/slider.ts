import type { FieldProps } from "../field";

export interface SliderProps<T> extends FieldProps<T> {
	min?: number;
	max?: number;
	step?: number;
	showValue?: boolean;
	showMarkDashes?: boolean;
	marks?: Record<number, string>;
}