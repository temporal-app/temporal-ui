// noinspection JSUnusedGlobalSymbols

import type { FieldProps } from "../field";

export interface TextareaProps<T> extends FieldProps<T> {
	/** Automatically adjust the height of the textarea based on content. */
	autoresize?: boolean;
	value?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
}
