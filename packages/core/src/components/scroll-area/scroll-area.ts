import type { BoxProps } from "../box";

export interface ScrollAreaProps<T> extends BoxProps<T> {
	width?: string;
	height?: string;
	orientation?: "vertical" | "horizontal" | "both";
}