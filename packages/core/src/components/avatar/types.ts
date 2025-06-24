// noinspection JSUnusedGlobalSymbols

export interface AvatarProps {
	/** The size of the avatar */
	size?: "sm" | "md" | "lg";
	/** The name of the avatar */
	name?: string;
	/** The URL of the avatar */
	src?: string;
	/** Additional CSS classes */
	class?: string;
	/** Additional CSS styles */
	style?: unknown;
}
