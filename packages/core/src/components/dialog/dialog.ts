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

}