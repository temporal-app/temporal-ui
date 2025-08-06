import type { MenuRadioItemGroupProps as CoreMenuRadioItemGroupProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuRadioItemGroupProps extends CoreMenuRadioItemGroupProps<React.ReactNode> {}
export interface MenuRadioItemGroupProps
	extends Assign<ComponentPropsWithoutRef<"div">, BaseMenuRadioItemGroupProps> {}

export function MenuRadioItemGroup(props: MenuRadioItemGroupProps) {
	const { label, onValueChange, testId, ...restProps } = props;

	return (
		<ArkMenu.RadioItemGroup
			onValueChange={(details) => onValueChange?.(details.value)}
			{...restProps}
			data-testid={testId}
		>
			{label && (
				<ArkMenu.ItemGroupLabel data-testid={testId ? `${testId}--label` : undefined}>
					{label}
				</ArkMenu.ItemGroupLabel>
			)}
			{props.children}
		</ArkMenu.RadioItemGroup>
	);
}
