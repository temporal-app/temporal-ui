import type { Assign } from "@ark-ui/solid";
import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import type { MenuRadioItemProps as CoreMenuRadioItemProps } from "@temporal-ui/core/menu";
import { children, type JSX } from "solid-js";
import type { ComponentProps } from "solid-js";

interface BaseMenuRadioItemProps extends CoreMenuRadioItemProps<JSX.Element> { }
export interface MenuRadioItemProps extends Assign<ComponentProps<'div'>, BaseMenuRadioItemProps> { }

export function MenuRadioItem(props: MenuRadioItemProps) {

	return (
		<ArkMenu.RadioItem {...props} class={props.className}>
			<ArkMenu.ItemIndicator>
				<div data-part="item-radio-indicator" />
			</ArkMenu.ItemIndicator>
			<ArkMenu.ItemText>
				{children(() => props.children)}
			</ArkMenu.ItemText>
		</ArkMenu.RadioItem>
	);
}
