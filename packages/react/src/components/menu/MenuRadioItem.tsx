import type { Assign } from "@ark-ui/react";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type { MenuRadioItemProps as CoreMenuRadioItemProps } from "@temporal-ui/core/menu";
import type React from "react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuRadioItemProps extends CoreMenuRadioItemProps<React.ReactNode> { }
export interface MenuRadioItemProps extends Assign<ComponentPropsWithoutRef<'div'>, BaseMenuRadioItemProps> { }

export function MenuRadioItem(props: MenuRadioItemProps) {

	return (
		<ArkMenu.RadioItem {...props}>
			<ArkMenu.ItemIndicator>
				<div data-part="item-radio-indicator" />
			</ArkMenu.ItemIndicator>
			<ArkMenu.ItemText>
				{props.children}
			</ArkMenu.ItemText>
		</ArkMenu.RadioItem>
	);
}