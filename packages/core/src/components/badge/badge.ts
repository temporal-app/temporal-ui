// noinspection JSUnusedGlobalSymbols

import type { BaseComponent } from "../base";

export interface BadgeProps<T> extends BaseComponent<T> {
	/** The visual variant of the badge */
	variant?: "primary" | "secondary" | "destructive" | "outline";
}
