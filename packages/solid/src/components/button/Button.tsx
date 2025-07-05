import type { ButtonProps as CoreButtonProps } from "@temporal-ui/core/button";
import type { JSX } from "solid-js";
import { children, mergeProps, splitProps } from "solid-js";
import { Loader } from "../loader";
import type { HTMLProps } from "@ark-ui/solid";
import { cx } from "@temporal-ui/core/utils/cx";

interface ButtonProps extends CoreButtonProps<JSX.Element>, HTMLProps<'button'> { }

export function Button(_props: ButtonProps) {

	const [ props, elementProps ] = splitProps(
		mergeProps<ButtonProps[]>({ size: "md", variant: "primary", icon: false }, _props),
		[ "size", "variant", "icon", "loading", "disabled", "children", "className", "class" ]
	);

	const baseClass = [ "btn", props.size !== "md" ? props.size : "", props.icon && "icon", props.variant ]
		.filter(Boolean).join("-");

	return (
		<button
			class={cx(baseClass, props.className, props.class)}
			disabled={props.disabled || props.loading}
			data-loading={props.loading || undefined}
			{...elementProps}
		>
			{props.loading && <Loader size={props.size} className={"loading"} />}
			<span class={"inner"}>
				{children(() => props.children)}
			</span>
		</button>
	);
}
