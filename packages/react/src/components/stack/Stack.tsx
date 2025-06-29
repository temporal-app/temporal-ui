import { type StackProps as CoreStackProps, cx } from "@temporal-ui/core";
import type React from "react";

export interface StackProps extends CoreStackProps<React.ReactNode>, React.HTMLAttributes<HTMLDivElement> { }

export function Stack({
	className,
	children,
	row = false,
	reverse = false,
	center = false,
	gap,
	p,
	px,
	pl,
	pr,
	pt,
	pb,
	py,
	m,
	mx,
	ml,
	mr,
	mt,
	mb,
	my,
	w,
	h,
	align,
	justify,
	...rest
}: StackProps) {

	const baseClass = center ? "stack-center" : [ "stack", row && "row", reverse && "reverse" ].filter(Boolean).join("-");

	const style: React.CSSProperties = {};

	if (gap) {
		style.gap = `calc(var(--spacing) * ${ gap })`;
	}
	if (p) {
		style.padding = `calc(var(--spacing) * ${ p })`;
	}
	if (px || pl) {
		style.paddingLeft = `calc(var(--spacing) * ${ pl ?? px })`;
	}
	if (pr || px) {
		style.paddingRight = `calc(var(--spacing) * ${ pr ?? px })`;
	}
	if (pt || py) {
		style.paddingTop = `calc(var(--spacing) * ${ pt ?? py })`;
	}
	if (pb || py) {
		style.paddingBottom = `calc(var(--spacing) * ${ pb ?? py })`;
	}
	if (m) {
		style.margin = `calc(var(--spacing) * ${ m })`;
	}
	if (mx || ml) {
		style.marginLeft = `calc(var(--spacing) * ${ ml ?? mx })`;
	}
	if (mr || mx) {
		style.marginRight = `calc(var(--spacing) * ${ mr ?? mx })`;
	}
	if (mt || my) {
		style.marginTop = `calc(var(--spacing) * ${ mt ?? my })`;
	}
	if (mb || my) {
		style.marginBottom = `calc(var(--spacing) * ${ mb ?? my })`;
	}
	if (w) {
		style.width = `${ w }px`;
	}
	if (h) {
		style.height = `${ h }px`;
	}
	if (align) {
		style.alignItems = align;
	}
	if (justify) {
		style.justifyContent = justify;
	}

	return (
		<div
			{...rest}
			className={cx(baseClass, className)}
			style={{ ...style, ...rest.style }}
		>
			{children}
		</div>
	);
}
