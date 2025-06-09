import { type ButtonProps as CoreButtonProps, cx } from "@temporal-ui/core";
import type React from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { Loader } from "../loader";

interface ButtonProps extends CoreButtonProps {
	children?: React.ReactNode;
	onClick?: (event: ReactMouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: ButtonProps) {
	const variant = props.variant || "primary";
	const size = props.size;
	const isIcon = !!props.icon;
	const baseClass = [ "btn", size !== "md" ? size : "", isIcon && "icon", variant ]
		.filter(Boolean).join("-");

	return (
		<button
			{...props}
			className={cx(baseClass, props.class)}
			disabled={props.disabled || props.loading}
			onClick={props.onClick}
			data-loading={props.loading || undefined}

		>
			{props.loading && <Loader size={size} class={"loading"} />}
			<span className={"inner"}>{props.children}</span>
		</button>
	);
}
