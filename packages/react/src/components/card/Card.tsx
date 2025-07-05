import type { CardProps as CoreCardProps } from "@temporal-ui/core/card";
import { cx } from "@temporal-ui/core/utils/cx";
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
