import type { MenuItemProps as CoreMenuItemProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import type { JSX } from "solid-js";
import type { Assign } from "@ark-ui/solid";
import { type ComponentProps, children } from 'solid-js';

interface BaseMenuItemProps extends CoreMenuItemProps<JSX.Element> { }
export interface MenuItemProps extends Assign<ComponentProps<'div'>, BaseMenuItemProps> { }

export function MenuItem(props: MenuItemProps) {

	return (
		<ArkMenu.Item {...props} class={props.className}>
			{children(() => props.children)}
		</ArkMenu.Item>
	);
}
