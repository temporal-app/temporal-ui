import type { BoxProps } from "../box";

export interface SeparatorProps<T> extends BoxProps<T> {
	orientation?: "horizontal" | "vertical";
}