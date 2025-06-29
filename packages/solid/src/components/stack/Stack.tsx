import type { HTMLProps } from "@ark-ui/solid";
import { type StackProps as CoreStackProps, cx } from "@temporal-ui/core";
import { children, splitProps, type JSX } from "solid-js";
import { Box } from "../box";

export interface StackProps extends CoreStackProps<JSX.Element>, HTMLProps<"div"> {}

export function Stack(_props: StackProps) {

	const [ props, elementProps ] = splitProps(
		_props,
		[
			"children",
			"row",
			"reverse",
			"center",
			"gap",
			"align",
			"justify",
			"className",
			"class",
			"style"
		]
	)

	const baseClass = props.center ? "stack-center" : [ "stack", props.row && "row", props.reverse && "reverse" ]
		.filter(Boolean).join("-");

	const style: JSX.CSSProperties = {};

	if (props.gap) {
		style.gap = `calc(var(--spacing) * ${props.gap})`;
	}
	if (props.align) {
		style["align-items"] = props.align;
	}
	if (props.justify) {
		style["justify-content"] = props.justify;
	}

	return (
		<Box
			{...elementProps}
			class={cx(baseClass, props.className, props.class)}
			style={{
				...style,
				...(props.style as JSX.CSSProperties)
			}}
		>
			{children(() => props.children)}
		</Box>
	);
}
