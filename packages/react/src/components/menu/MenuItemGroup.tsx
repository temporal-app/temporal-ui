import type { MenuItemGroupProps as CoreMenuItemGroupProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuItemGroupProps extends CoreMenuItemGroupProps<React.ReactNode> {}
export interface MenuItemGroupProps
	extends Assign<ComponentPropsWithoutRef<"div">, BaseMenuItemGroupProps> {}

export function MenuItemGroup(props: MenuItemGroupProps) {
	const { label, testId, ...restProps } = props;

	return (
		<ArkMenu.ItemGroup
			{...restProps}
			data-testid={testId}
		>
			{label && (
				<ArkMenu.ItemGroupLabel data-testid={testId ? `${testId}--label` : undefined}>
					{label}
				</ArkMenu.ItemGroupLabel>
			)}
			{props.children}
		</ArkMenu.ItemGroup>
	);
}
