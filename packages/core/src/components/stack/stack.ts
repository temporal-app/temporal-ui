import type { BoxProps } from "../box";

export interface StackProps<T> extends BoxProps<T> {
	/** Whether the children are centered */
	center?: boolean;
	/** Whether the direction is row, if false, the direction is then column */
	row?: boolean;
	/** Whether the children are reversed */
	reverse?: boolean;
	/** The gap between the children */
	gap?: number;
	/** Controls align-items CSS property */
	align?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
	/** Controls justify-content CSS property */
	justify?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch" | "normal" | "space-between" | "space-around" | "space-evenly";
}
