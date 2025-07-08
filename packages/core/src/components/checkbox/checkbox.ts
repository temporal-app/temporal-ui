import type { FieldProps } from "../field";

export type CheckboxState = boolean | "indeterminate";

export interface CheckboxProps<T> extends FieldProps<T> {
	defaultChecked?: CheckboxState;
	checked?: CheckboxState;
	onCheckedChange?: (state: CheckboxState) => void;
}
