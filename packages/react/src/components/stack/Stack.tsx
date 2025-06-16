import { type StackProps as CoreStackProps, cx } from "@temporal-ui/core";
import type React from "react";

export interface StackProps extends CoreStackProps {
	children?: React.ReactNode | React.ReactNode[];
	style?: React.CSSProperties;
}

export function Stack(props: StackProps) {

	const baseClass = [ "stack", props.row && "row", props.reverse && "reverse" ].filter(Boolean).join("-");

	const style: React.CSSProperties = {};

	if (props.gap) {
		style.gap = `calc(var(--spacing) * ${props.gap})`;
	}
	if (props.p) {
		style.padding = `calc(var(--spacing) * ${props.p})`;
	}
	if (props.px || props.pl) {
		style.paddingLeft = `calc(var(--spacing) * ${props.pl ?? props.px})`;
	}
	if (props.pr || props.px) {
		style.paddingRight = `calc(var(--spacing) * ${props.pr ?? props.px})`;
	}
	if (props.pt || props.py) {
		style.paddingTop = `calc(var(--spacing) * ${props.pt ?? props.py})`;
	}
	if (props.pb || props.py) {
		style.paddingBottom = `calc(var(--spacing) * ${props.pb ?? props.py})`;
	}
	if (props.m) {
		style.margin = `calc(var(--spacing) * ${props.m})`;
	}
	if (props.mx || props.ml) {
		style.marginLeft = `calc(var(--spacing) * ${props.ml ?? props.mx})`;
	}
	if (props.mr || props.mx) {
		style.marginRight = `calc(var(--spacing) * ${props.mr ?? props.mx})`;
	}
	if (props.mt || props.my) {
		style.marginTop = `calc(var(--spacing) * ${props.mt ?? props.my})`;
	}
	if (props.mb || props.my) {
		style.marginBottom = `calc(var(--spacing) * ${props.mb ?? props.my})`;
	}
	if (props.w) {
		style.width = `calc(var(--spacing) * ${props.w})`;
	}
	if (props.h) {
		style.height = `calc(var(--spacing) * ${props.h})`;
	}
	if (props.align) {
		style.alignItems = props.align;
	}
	if (props.justify) {
		style.justifyContent = ["evenly", "between", "around"].includes(props.justify) ? `space-${props.justify}`
			: props.justify;
	}

	return (
		<div
			className={cx(baseClass, props.class)}
			style={{ ...style, ...props.style}}
		>
			{props.children}
		</div>
	);
}
