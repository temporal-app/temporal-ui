import type { FieldProps } from "../field";

export type RadioGroupItem = {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface RadioGroupProps<T> extends FieldProps<T> {
	items: RadioGroupItem[];
	defaultValue?: string;
	value?: string;
	onValueChange?: (value: string | null) => void;
	orientation?: 'horizontal' | 'vertical';
}
