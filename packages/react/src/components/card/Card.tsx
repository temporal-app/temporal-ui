import { type CardProps as CoreCardProps, cx } from "@temporal-ui/core";
import type React from "react";

export interface CardProps extends CoreCardProps {
	children?: React.ReactNode | React.ReactNode[];
	style?: React.CSSProperties;

}
export function Card(props: CardProps) {

	return (
		<div
			className={cx("card", props.class)}
			style={props.style}
		>
			{props.children}
		</div>
	)
}
