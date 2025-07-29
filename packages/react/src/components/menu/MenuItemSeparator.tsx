import type { MenuItemSeparatorProps as CoreMenuItemSeparatorProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuItemSeparatorProps extends CoreMenuItemSeparatorProps<React.ReactNode> {}
export interface MenuItemSeparatorProps extends Assign<ComponentPropsWithoutRef<'hr'>, BaseMenuItemSeparatorProps> {}

export function MenuItemSeparator(props: MenuItemSeparatorProps) {

	return (
		<ArkMenu.Separator {...props} />
	);
}