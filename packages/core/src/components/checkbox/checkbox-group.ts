import type { FieldProps } from "../field";

export type CheckboxGroupItem = {
	label: string;
	value: string;
};

export interface CheckboxGroupProps<T> extends FieldProps<T> {
	name: string;
	items: CheckboxGroupItem[];
	defaultValues?: string[];
	values?: string[];
	onValuesChange?: (values: string[]) => void;
}
