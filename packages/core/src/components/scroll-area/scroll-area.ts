import type { BoxProps } from "../box";

export interface ScrollAreaProps<T> extends BoxProps<T> {
	orientation?: "vertical" | "horizontal" | "both";
	classes?: {
		content?: string;
		viewport?: string;
		scrollbar?: string;
		thumb?: string;
		corner?: string;
	}
}