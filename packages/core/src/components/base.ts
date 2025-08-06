declare type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export interface BaseComponent<T = unknown> {
	/** Additional CSS classes */
	className?: string;
	/** The content of the component */
	children?: T;
	/** The test ID for the component */
	testId?: string;
}

export type PlacementSide = "top" | "bottom" | "left" | "right";
export type PlacementAlign = "start" | "end";
export type Placement = Prettify<`${PlacementSide}-${PlacementAlign}` | PlacementSide>;

export interface Position {
	placement?: Placement;
	offset?: {
		mainAxis?: number;
		crossAxis?: number;
	};
}
