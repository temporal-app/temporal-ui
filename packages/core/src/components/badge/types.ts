// noinspection JSUnusedGlobalSymbols

export interface BadgeProps {
	/** The visual variant of the badge */
	variant?: "primary" | "secondary" | "destructive" | "outline";
	/** Additional CSS classes */
	class?: string;
	/** The content of the badge */
	children?: unknown;
}
