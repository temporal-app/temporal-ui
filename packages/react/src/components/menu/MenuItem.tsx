import type { MenuItemProps as CoreMenuItemProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuItemProps extends CoreMenuItemProps<React.ReactNode> {}
export interface MenuItemProps extends Assign<ComponentPropsWithoutRef<'div'>, BaseMenuItemProps> {}

export function MenuItem(props: MenuItemProps) {

	const { testId, ...rest } = props;

	return (
		<ArkMenu.Item {...rest} data-testid={testId}>
			{props.children}
		</ArkMenu.Item>
	);
}