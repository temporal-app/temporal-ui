import type { MenuItemSeparatorProps as CoreMenuItemSeparatorProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import type { JSX } from "solid-js";
import type { Assign } from "@ark-ui/solid";
import type { ComponentProps } from "solid-js";

interface BaseMenuItemSeparatorProps extends CoreMenuItemSeparatorProps<JSX.Element> {}
export interface MenuItemSeparatorProps
	extends Assign<ComponentProps<"hr">, BaseMenuItemSeparatorProps> {}

export function MenuItemSeparator(props: MenuItemSeparatorProps) {
	return (
		<ArkMenu.Separator
			{...props}
			class={props.className}
			data-testid={props.testId}
		/>
	);
}
