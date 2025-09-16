import type { FieldProps } from "../field";
import type { Position } from "../base";

export interface ColorInputProps<T> extends FieldProps<T> {
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
	position?: Position;
}