import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import type { MenuProps as CoreMenuProps } from "@temporal-ui/core/menu";
import type { JSX } from "solid-js";

export interface MenuProps extends CoreMenuProps<JSX.Element> {
	trigger: (props: Record<string, unknown>) => JSX.Element;
}

export function Menu(menuProps: MenuProps) {

	return (
		<ArkMenu.Root
			onSelect={(details) => menuProps.onSelect?.(details.value)}
			closeOnSelect={menuProps.closeOnSelect}
		>
			<ArkMenu.Trigger
				asChild={props => menuProps.trigger({ ...props() })}
			/>
			<ArkMenu.Positioner>
				<ArkMenu.Content class={menuProps.className}>
					{menuProps.children}				
				</ArkMenu.Content>
			</ArkMenu.Positioner>
		</ArkMenu.Root>
	);
}