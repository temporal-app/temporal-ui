import { Toggle as ArkToggle } from "@ark-ui/solid/toggle";
import type { ToggleProps as CoreToggleProps } from "@temporal-ui/core/toggle";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface ToggleProps
	extends CoreToggleProps<JSX.Element>,
		Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled"> {}

export function Toggle(props: ToggleProps) {
	const [local, rest] = splitProps(props, [
		"pressed",
		"defaultPressed",
		"onPressedChange",
		"disabled",
		"class",
		"children",
		"testId",
	]);

	return (
		<ArkToggle.Root
			pressed={local.pressed}
			defaultPressed={local.defaultPressed}
			onPressedChange={local.onPressedChange}
			disabled={local.disabled}
			class={local.class}
			data-testid={local.testId}
			{...rest}
		>
			{local.children}
		</ArkToggle.Root>
	);
}

export const ToggleIndicator = ArkToggle.Indicator;
