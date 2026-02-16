import type { BaseComponent } from "../base";

export interface AccordionProps<T> extends BaseComponent<T> {
	/** The callback fired when the state of expanded/collapsed accordion items changes */
	onValueChange?: (value: string[]) => void;
}
