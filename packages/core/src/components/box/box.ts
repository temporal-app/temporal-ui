import type { BaseComponent } from "../base";

export interface BoxProps<T> extends BaseComponent<T> {
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
	/** Width in px (if numeric) or literal */
	w?: string | number;
	/** Height in px (if numeric) or literal */
	h?: string | number;
}
