import type { FieldProps } from "../field";

export interface ColorInputProps<T> extends FieldProps<T> {
	value?: string;
	onValueChange?: (value: string) => void;
	defaultValue?: string;
}