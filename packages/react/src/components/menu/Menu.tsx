import type { MenuProps as CoreMenuProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";

export interface MenuProps extends CoreMenuProps<React.ReactNode> {
	trigger: React.ReactNode;
}

export function Menu(props: MenuProps) {

	return (
		<ArkMenu.Root
			onSelect={(details) => props.onSelect?.(details.value)}
			closeOnSelect={props.closeOnSelect}
		>
			<ArkMenu.Trigger asChild>{props.trigger}</ArkMenu.Trigger>
			<ArkMenu.Positioner>
				<ArkMenu.Content className={props.className}>
					{props.children}
				</ArkMenu.Content>
			</ArkMenu.Positioner>
		</ArkMenu.Root>
	)
}