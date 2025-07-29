import type { MenuCheckboxItemProps as CoreMenuCheckboxItemProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";
import { CheckIcon } from "lucide-react";

interface BaseMenuCheckboxItemProps extends CoreMenuCheckboxItemProps<React.ReactNode> { }
export interface MenuCheckboxItemProps extends Assign<ComponentPropsWithoutRef<'div'>, BaseMenuCheckboxItemProps> { }

export function MenuCheckboxItem(props: MenuCheckboxItemProps) {

	return (
		<ArkMenu.CheckboxItem {...props}>
			<ArkMenu.ItemIndicator>
				<CheckIcon />
			</ArkMenu.ItemIndicator>
			<ArkMenu.ItemText>
				{props.children}
			</ArkMenu.ItemText>
		</ArkMenu.CheckboxItem>
	);
}