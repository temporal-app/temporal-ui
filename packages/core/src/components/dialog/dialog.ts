import type { BoxProps } from "../box";

export interface DialogProps<T> extends BoxProps<T> {
	title?: string;
	description?: string;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	closeOnEscape?: boolean;
	closeOnInteractOutside?: boolean;
	modal?: boolean;
	role?: "dialog" | "alertdialog";
	lazyMount?: boolean;
	unmountOnExit?: boolean;
	classes?: {
		header?: string;
		closeTrigger?: string;
		backdrop?: string;
		trigger?: string;
		content?: string;
		title?: string;
		description?: string;
	};
}
