import type { MenuItemGroupProps as CoreMenuItemGroupProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import type { JSX } from "solid-js";
import type { Assign } from "@ark-ui/solid";
import type { ComponentProps } from 'solid-js';

interface BaseMenuItemGroupProps extends CoreMenuItemGroupProps<JSX.Element> { }
export interface MenuItemGroupProps extends Assign<ComponentProps<'div'>, BaseMenuItemGroupProps> { }

export function MenuItemGroup(props: MenuItemGroupProps) {

	return (
		<ArkMenu.ItemGroup {...props} class={props.className}>
			{props.label && <ArkMenu.ItemGroupLabel>{props.label}</ArkMenu.ItemGroupLabel>}
			{props.children}
		</ArkMenu.ItemGroup>
	);
}
