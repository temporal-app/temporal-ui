import { type BadgeProps as CoreBadgeProps, cx } from "@temporal-ui/core";
import type React from "react";

export interface BadgeProps extends CoreBadgeProps {
	children?: React.ReactNode | React.ReactNode[];
	style?: React.CSSProperties;
}

export function Badge(props: BadgeProps) {

	const baseClass = [ "badge", props.variant ].filter(Boolean).join("-");

	return (
		<span
			className={cx( baseClass, props.class)}
			style={props.style}
		>
			{props.children}
		</span>
	);
}
