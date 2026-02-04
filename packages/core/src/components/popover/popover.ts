import type { Position } from "../base";
import type { BoxProps } from "../box";

export interface PopoverProps<T> extends BoxProps<T> {
	portal?: boolean;
	title?: string;
	description?: string;
	position?: Position;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	classes?: {
		trigger?: string;
		content?: string;
		title?: string;
		description?: string;
	}
}