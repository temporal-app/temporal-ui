import type { BaseComponent } from "../base";

export interface StackProps<T> extends BaseComponent<T> {
	/** Whether the direction is row, if false, the direction is then column */
	row?: boolean;
	/** Whether the children are reversed */
	reverse?: boolean;
	/** Whether the children are centered */
	center?: boolean;
	/** The gap between the children */
	gap?: number;
	/** Padding */
	p?: number;
	/** Horizontal padding */
	px?: number;
	/** Vertical padding */
	py?: number;
	/** Top padding */
	pt?: number;
	/** Right padding */
	pr?: number;
	/** Bottom padding */
	pb?: number;
	/** Left padding */
	pl?: number;
	/** Margin */
	m?: number;
	/** Horizontal margin */
	mx?: number;
	/** Vertical margin */
	my?: number;
	/** Top margin */
	mt?: number;
	/** Right margin */
	mr?: number;
	/** Bottom margin */
	mb?: number;
	/** Left margin */
	ml?: number;
	/** Width in px */
	w?: number;
	/** Height in px */
	h?: number;
	/** Controls align-items CSS property */
	align?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
	/** Controls justify-content CSS property */
	justify?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch" | "normal" | "space-between" | "space-around" | "space-evenly";
}
