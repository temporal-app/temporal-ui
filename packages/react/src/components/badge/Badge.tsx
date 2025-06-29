import { type BadgeProps as CoreBadgeProps, cx } from "@temporal-ui/core";
import type React from "react";

export interface BadgeProps extends CoreBadgeProps<React.ReactNode>, React.HTMLAttributes<HTMLSpanElement> { }

export function Badge(props: BadgeProps) {

	const { variant = "primary", className, ...rest } = props;

	const baseClass = [ "badge", variant ].filter(Boolean).join("-");

	return (
		<span
			className={cx(baseClass, className)}
			{...rest}
		>
			{props.children}
		</span>
	);
}
