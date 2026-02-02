import type { BaseComponent } from "../base";

export interface ToggleProps<T> extends BaseComponent<T> {
	/** The default pressed state of the toggle. */
	defaultPressed?: boolean;
	/** The controlled pressed state of the toggle. */
	pressed?: boolean;
	/** Whether the toggle is disabled. */
	disabled?: boolean;
	/** Callback when the pressed state changes. */
	onPressedChange?: (pressed: boolean) => void;
}
