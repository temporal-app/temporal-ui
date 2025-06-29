export interface BaseComponent<T = unknown> {
	/** Additional CSS classes */
	className?: string;
	/** The content of the component */
	children?: T;
}