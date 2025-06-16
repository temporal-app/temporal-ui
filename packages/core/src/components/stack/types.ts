export interface StackProps {
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
	align?: "start" | "center" | "end" | "baseline" | "stretch";
	/** Controls justify-content CSS property */
	justify?: "start" | "center" | "end" | "baseline" | "stretch" | "normal" | "between" | "around" | "evenly";
	/** Custom CSS classes to apply to the element. */
	class?: string;
	/** The children to render. */
	children?: unknown,
	/** The style to apply to the element. */
	style?: unknown
}
