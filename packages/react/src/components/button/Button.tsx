import type { ButtonProps as CoreButtonProps } from "@temporal-ui/core/button";
import type React from "react";
import { Loader } from "../loader";
import { cx } from "@temporal-ui/core/utils/cx";

export interface ButtonProps
	extends CoreButtonProps<React.ReactNode>,
		React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
	const {
		variant = "primary",
		size = "md",
		icon = false,
		className,
		children,
		disabled,
		loading,
		testId,
		...rest
	} = props;
	const baseClass = ["btn", size !== "md" ? size : "", icon && "icon", variant]
		.filter(Boolean)
		.join("-");

	return (
		<button
			{...rest}
			className={cx(baseClass, className)}
			disabled={disabled || loading}
			data-loading={loading || undefined}
			data-testid={testId}
		>
			{loading && (
				<Loader
					size={size}
					className={"loading"}
					data-testid={testId ? `${testId}--loader` : undefined}
				/>
			)}
			<span className={"inner"}>{children}</span>
		</button>
	);
}
