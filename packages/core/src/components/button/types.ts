// noinspection JSUnusedGlobalSymbols

export interface ButtonProps {
	/** The visual variant of the button. */
	variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost";
	/** Whether the button should be disabled. */
	disabled?: boolean;
	/** Whether the button is loading. */
	loading?: boolean;
	/** The size of the button. */
	size?: "xs" | "sm" | "md" | "lg" | "xl"
	/** Custom CSS classes to apply to the button. */
	class?: string
	/** Whether the button renders icon only. */
	icon?: boolean
}
