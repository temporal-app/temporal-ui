import { type CardProps as CoreCardProps, cx } from "@temporal-ui/core";
import { children, type JSX } from "solid-js";

export interface CardProps extends CoreCardProps {
	children?: JSX.Element | JSX.Element[];
	style?: JSX.CSSProperties

}
export function Card(props: CardProps) {

	return (
		<div
			class={cx("card", props.class)}
			style={props.style}
		>
			{children(() => props.children)}
		</div>
	)
}
