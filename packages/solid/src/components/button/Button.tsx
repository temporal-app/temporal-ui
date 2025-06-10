import { type ButtonProps as CoreButtonProps, cx } from "@temporal-ui/core";
import type { JSX } from "solid-js";
import { children, mergeProps } from "solid-js";
import { Loader } from "../loader";

interface ButtonProps extends CoreButtonProps {
	children?: JSX.Element;
	onClick?: () => void;
}

export function Button(_props: ButtonProps) {
	const props = mergeProps(
		{ size: "md", variant: "primary", icon: false } as ButtonProps,
		_props
	)

	const baseClass = [ "btn", props.size !== "md" ? props.size : "", props.icon && "icon", props.variant ]
		.filter(Boolean).join("-");

	return (
		<button
			{...props}
			class={cx(baseClass, props.class)}
			disabled={props.disabled || props.loading}
			onClick={props.onClick}
			data-loading={props.loading || undefined}
		>
			{props.loading && <Loader size={props.size} class={"loading"} />}
			<span class={"inner"}>
				{children(() => props.children)}
			</span>
		</button>
	);
}
