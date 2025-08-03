// noinspection JSUnusedGlobalSymbols

import type { BaseComponent } from "../base";

export interface AlertProps<T> extends BaseComponent<T> {
	variant?: "default" | "info" | "success" | "warning" | "error";
	title?: string;
	description?: string;
	icon?: T;
}