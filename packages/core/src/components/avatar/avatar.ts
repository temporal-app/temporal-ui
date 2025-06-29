// noinspection JSUnusedGlobalSymbols

import type { BaseComponent } from "../base";

export interface AvatarProps extends BaseComponent<never> {
	/** The size of the avatar */
	size?: "sm" | "md" | "lg";
	/** The name of the avatar */
	name?: string;
	/** The URL of the avatar */
	src?: string;
}
