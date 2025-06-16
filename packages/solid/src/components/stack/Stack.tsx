import { type StackProps as CoreStackProps, cx } from "@temporal-ui/core";
import { children, type JSX } from "solid-js";

export interface StackProps extends CoreStackProps {
	children?: JSX.Element | JSX.Element[];
	style?: JSX.CSSProperties;
}

export function Stack(props: StackProps) {

	const baseClass = [ "stack", props.row && "row", props.reverse && "reverse" ].filter(Boolean).join("-");

	const style: JSX.CSSProperties = {};

	if (props.gap) {
		style.gap = `calc(var(--spacing) * ${props.gap})`;
	}
	if (props.p) {
		style.padding = `calc(var(--spacing) * ${props.p})`;
	}
	if (props.px || props.pl) {
		style["padding-left"] = `calc(var(--spacing) * ${props.pl ?? props.px})`;
	}
	if (props.pr || props.px) {
		style["padding-right"] = `calc(var(--spacing) * ${props.pr ?? props.px})`;
	}
	if (props.pt || props.py) {
		style["padding-top"] = `calc(var(--spacing) * ${props.pt ?? props.py})`;
	}
	if (props.pb || props.py) {
		style["padding-bottom"] = `calc(var(--spacing) * ${props.pb ?? props.py})`;
	}
	if (props.m) {
		style.margin = `calc(var(--spacing) * ${props.m})`;
	}
	if (props.mx || props.ml) {
		style["margin-left"] = `calc(var(--spacing) * ${props.ml ?? props.mx})`;
	}
	if (props.mr || props.mx) {
		style["margin-right"] = `calc(var(--spacing) * ${props.mr ?? props.mx})`;
	}
	if (props.mt || props.my) {
		style["margin-top"] = `calc(var(--spacing) * ${props.mt ?? props.my})`;
	}
	if (props.mb || props.my) {
		style["margin-bottom"] = `calc(var(--spacing) * ${props.mb ?? props.my})`;
	}
	if (props.w) {
		style.width = `calc(var(--spacing) * ${props.w})`;
	}
	if (props.h) {
		style.height = `calc(var(--spacing) * ${props.h})`;
	}
	if (props.align) {
		style["align-items"] = props.align;
	}
	if (props.justify) {
		style["justify-content"] = ["evenly", "between", "around"].includes(props.justify) ? `space-${props.justify}`
			: props.justify;
	}

	return (
		<div
			class={cx(baseClass, props.class)}
			style={{
				...style,
				...props.style
			}}
		>
			{children(() => props.children)}
		</div>
	);
}
