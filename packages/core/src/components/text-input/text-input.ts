// noinspection JSUnusedGlobalSymbols

import type { FieldProps } from "../field";

export interface TextInputProps<T> extends FieldProps<T> {
	/** The start section of the input. */
	startSection?: T;
	/** The end section of the input. */
	endSection?: T;
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
}
