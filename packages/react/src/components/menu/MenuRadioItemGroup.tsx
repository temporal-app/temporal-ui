import type { MenuRadioItemGroupProps as CoreMenuRadioItemGroupProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuRadioItemGroupProps extends CoreMenuRadioItemGroupProps<React.ReactNode> {}
export interface MenuRadioItemGroupProps extends Assign<ComponentPropsWithoutRef<'div'>, BaseMenuRadioItemGroupProps> {}

export function MenuRadioItemGroup(props: MenuRadioItemGroupProps) {

	const { label, onValueChange, ...restProps } = props;

	return (
		<ArkMenu.RadioItemGroup
			onValueChange={details => onValueChange?.(details.value)}
			{...restProps}
		>
			{label && <ArkMenu.ItemGroupLabel>{label}</ArkMenu.ItemGroupLabel>}
			{props.children}
		</ArkMenu.RadioItemGroup>
	);
}