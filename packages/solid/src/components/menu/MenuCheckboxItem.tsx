import type { MenuCheckboxItemProps as CoreMenuCheckboxItemProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import type { JSX } from "solid-js";
import type { Assign } from "@ark-ui/solid";
import type { ComponentProps } from 'solid-js';
import { CheckIcon } from 'lucide-solid';

interface BaseMenuCheckboxItemProps extends CoreMenuCheckboxItemProps<JSX.Element> { }
export interface MenuCheckboxItemProps extends Assign<ComponentProps<'div'>, BaseMenuCheckboxItemProps> { }

export function MenuCheckboxItem(props: MenuCheckboxItemProps) {

	return (
		<ArkMenu.CheckboxItem {...props} class={props.className}>
			<ArkMenu.ItemIndicator>
				<CheckIcon />
			</ArkMenu.ItemIndicator>
			<ArkMenu.ItemText>
				{props.children}
			</ArkMenu.ItemText>
		</ArkMenu.CheckboxItem>
	);
}
