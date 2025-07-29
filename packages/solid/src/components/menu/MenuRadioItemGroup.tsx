import type { MenuRadioItemGroupProps as CoreMenuRadioItemGroupProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import { children, type JSX } from "solid-js";
import type { Assign } from "@ark-ui/solid";
import type { ComponentProps } from "solid-js";

interface BaseMenuRadioItemGroupProps extends CoreMenuRadioItemGroupProps<JSX.Element> {}
export interface MenuRadioItemGroupProps extends Assign<ComponentProps<'div'>, BaseMenuRadioItemGroupProps> {}

export function MenuRadioItemGroup(props: MenuRadioItemGroupProps) {

	return (
		<ArkMenu.RadioItemGroup
			{...props}
			class={props.className}
			onValueChange={details => props.onValueChange?.(details.value)}
		>
			{props.label && <ArkMenu.ItemGroupLabel>{props.label}</ArkMenu.ItemGroupLabel>}
			{children(() => props.children)}
		</ArkMenu.RadioItemGroup>
	);
}
