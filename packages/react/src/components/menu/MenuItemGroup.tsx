import type { MenuItemGroupProps as CoreMenuItemGroupProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuItemGroupProps extends CoreMenuItemGroupProps<React.ReactNode> {}
export interface MenuItemGroupProps extends Assign<ComponentPropsWithoutRef<'div'>, BaseMenuItemGroupProps> {}

export function MenuItemGroup(props: MenuItemGroupProps) {

	const { label, ...restProps } = props;

	return (
		<ArkMenu.ItemGroup {...restProps}>
			{label && <ArkMenu.ItemGroupLabel>{label}</ArkMenu.ItemGroupLabel>}
			{props.children}
		</ArkMenu.ItemGroup>
	);
}