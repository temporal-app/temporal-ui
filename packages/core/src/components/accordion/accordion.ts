import type { BaseComponent } from "../base";

export interface AccordionProps<T> extends BaseComponent<T> {
	/** The visual variant of the accordion */
	variant?: "default" | "boxed";
	/** The callback fired when the state of expanded/collapsed accordion items changes */
	onValueChange?: (value: string[]) => void;
}
