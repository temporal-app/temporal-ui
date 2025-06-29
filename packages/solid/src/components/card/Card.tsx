import type { HTMLProps } from "@ark-ui/solid";
import { type CardProps as CoreCardProps, cx } from "@temporal-ui/core";
import { children, splitProps, type JSX } from "solid-js";

export interface CardProps extends CoreCardProps<JSX.Element>, HTMLProps<"div"> { }
export function Card(_props: CardProps) {

	const [ props, elementProps ] = splitProps(_props, [ "className", "class", "children" ]);

	return (
		<div
			class={cx("card", props.className, props.class)}
			{...elementProps}
		>
			{children(() => props.children)}
		</div>
	);
}
