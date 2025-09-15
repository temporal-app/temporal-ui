import type { FieldProps } from "../field";

export interface ColorInputProps<T> extends FieldProps<T> {
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
}