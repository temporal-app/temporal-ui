import type { FieldProps } from "../field";

export interface NumberInputProps<T> extends FieldProps<T> {
	min?: number;
	max?: number;
	step?: number;
	startSection?: T;
}