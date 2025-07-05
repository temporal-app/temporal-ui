import type { ButtonProps as CoreButtonProps } from "@temporal-ui/core/button";
import type React from "react";
import { Loader } from "../loader";
import { cx } from "@temporal-ui/core/utils/cx";

interface ButtonProps extends CoreButtonProps<React.ReactNode>, React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button(props: ButtonProps) {
	const { variant = 'primary', size = 'md', icon = false, className, children, disabled, loading, ...rest } = props;
	const baseClass = [ "btn", size !== "md" ? size : "", icon && "icon", variant ].filter(Boolean).join("-");

	return (
		<button
			{...rest}
			className={cx(baseClass, className)}
			disabled={disabled || loading}
			data-loading={loading || undefined}
		>
			{loading && <Loader size={size} className={"loading"} />}
			<span className={"inner"}>
				{children}
			</span>
		</button>
	);
}
