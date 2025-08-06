import type { HTMLProps } from "@ark-ui/solid";
import type { ButtonProps as CoreButtonProps } from "@temporal-ui/core/button";
import { cx } from "@temporal-ui/core/utils/cx";
import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Loader } from "../loader";

export interface ButtonProps extends CoreButtonProps<JSX.Element>, HTMLProps<"button"> {}

export function Button(_props: ButtonProps) {
	const [props, elementProps] = splitProps(
		mergeProps<ButtonProps[]>({ size: "md", variant: "primary", icon: false }, _props),
		[
			"size",
			"variant",
			"icon",
			"loading",
			"disabled",
			"children",
			"className",
			"class",
			"testId",
		],
	);

	const baseClass = [
		"btn",
		props.size !== "md" ? props.size : "",
		props.icon && "icon",
		props.variant,
	]
		.filter(Boolean)
		.join("-");

	return (
		<button
			{...elementProps}
			class={cx(baseClass, props.className, props.class)}
			disabled={props.disabled || props.loading}
			data-loading={props.loading || undefined}
			data-testid={props.testId}
		>
			{props.loading && (
				<Loader
					size={props.size}
					className={"loading"}
					data-testid={props.testId ? `${props.testId}--loader` : undefined}
				/>
			)}
			<span class={"inner"}>{props.children}</span>
		</button>
	);
}
