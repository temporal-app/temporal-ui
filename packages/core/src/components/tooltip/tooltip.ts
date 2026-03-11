import type { Position } from "../base";
import type { BoxProps } from "../box";

export interface TooltipProps<T> extends BoxProps<T> {
	/** Whether to render the tooltip in a portal (default: true) */
	portal?: boolean;
	/** Placement of the tooltip relative to the trigger */
	position?: Position;
	/** Controlled open state */
	open?: boolean;
	/** Initial open state when uncontrolled */
	defaultOpen?: boolean;
	/** Callback when open state changes */
	onOpenChange?: (open: boolean) => void;
	/** Delay before showing tooltip in ms (default: 400) */
	openDelay?: number;
	/** Delay before hiding tooltip in ms (default: 150) */
	closeDelay?: number;
	/** Whether tooltip is disabled */
	disabled?: boolean;
	/** Whether tooltip stays open when hovering over content */
	interactive?: boolean;
	/** Whether to show an arrow pointing to the trigger */
	showArrow?: boolean;
	/** Custom class names for styling */
	classes?: {
		trigger?: string;
		content?: string;
		arrow?: string;
	};
}
