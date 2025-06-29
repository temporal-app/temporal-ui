import { type StackProps as CoreStackProps, cx } from "@temporal-ui/core";
import type React from "react";
import { Box } from "../box";

export interface StackProps extends CoreStackProps<React.ReactNode>, React.HTMLAttributes<HTMLDivElement> { }

export function Stack({
	className,
	children,
	row = false,
	reverse = false,
	center = false,
	gap,
	align,
	justify,
	...rest
}: StackProps) {

	const baseClass = center ? "stack-center" : [ "stack", row && "row", reverse && "reverse" ]
		.filter(Boolean).join("-");

	const style: React.CSSProperties = {};

	if (gap) {
		style.gap = `calc(var(--spacing) * ${ gap })`;
	}
	if (align) {
		style.alignItems = align;
	}
	if (justify) {
		style.justifyContent = justify;
	}

	return (
		<Box
			{...rest}
			className={cx(baseClass, className)}
			style={{ ...style, ...rest.style }}
		>
			{children}
		</Box>
	);
}
