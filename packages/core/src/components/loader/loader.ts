// noinspection JSUnusedGlobalSymbols

import type { BaseComponent } from "../base";

export interface LoaderProps<T> extends BaseComponent<T> {
	size?: "xs" | "sm" | "md" | "lg" | "xl";
}
