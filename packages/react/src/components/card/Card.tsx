import { type CardProps as CoreCardProps, cx } from "@temporal-ui/core";
import type React from "react";

export interface CardProps extends CoreCardProps<React.ReactNode>, React.HTMLAttributes<HTMLDivElement>  {}
export function Card(props: CardProps) {

	const { className, ...rest } = props;

	return (
		<div
			{...rest}
			className={cx("card", className)}
		>
			{props.children}
		</div>
	)
}
