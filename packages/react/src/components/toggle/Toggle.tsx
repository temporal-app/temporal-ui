import { Toggle as ArkToggle } from "@ark-ui/react/toggle";
import type { ToggleProps as CoreToggleProps } from "@temporal-ui/core/toggle";
import type React from "react";
import { forwardRef } from "react";

export interface ToggleProps
	extends CoreToggleProps<React.ReactNode>,
		Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled"> {}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>((props, ref) => {
	const { pressed, defaultPressed, onPressedChange, disabled, className, children, testId, ...rest } = props;

	return (
		<ArkToggle.Root
			ref={ref}
			pressed={pressed}
			defaultPressed={defaultPressed}
			onPressedChange={onPressedChange}
			disabled={disabled}
			className={className}
			data-testid={testId}
			{...rest}
		>
			{children}
		</ArkToggle.Root>
	);
});

export const ToggleIndicator = ArkToggle.Indicator;
