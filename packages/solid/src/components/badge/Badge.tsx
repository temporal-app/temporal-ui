import { type BadgeProps as CoreBadgeProps, cx } from "@temporal-ui/core";
import { children, type JSX } from "solid-js";

export interface BadgeProps extends CoreBadgeProps {
	children?: JSX.Element | JSX.Element[];
	style?: JSX.CSSProperties;
}

export function Badge(props: BadgeProps) {

	const baseClass = [ "badge", props.variant ].filter(Boolean).join("-");

	return (
		<span
			class={cx( baseClass, props.class)}
			style={props.style}
		>
			{children(() => props.children)}
		</span>
	);
}
