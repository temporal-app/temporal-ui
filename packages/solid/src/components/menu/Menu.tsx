import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import type { MenuProps as CoreMenuProps } from "@temporal-ui/core/menu";
import type { JSX } from "solid-js";
import { Portal } from "solid-js/web";

export interface MenuProps extends CoreMenuProps<JSX.Element> {
	trigger: (props: Record<string, unknown>) => JSX.Element;
}

export function Menu(menuProps: MenuProps) {
	return (
		<ArkMenu.Root
			onSelect={(details) => menuProps.onSelect?.(details.value)}
			closeOnSelect={menuProps.closeOnSelect}
			positioning={menuProps.position}
			data-testid={menuProps.testId ? `${menuProps.testId}--root` : undefined}
		>
			<ArkMenu.Trigger
				asChild={(props) => menuProps.trigger({ ...props() })}
				data-testid={menuProps.testId ? `${menuProps.testId}--trigger` : undefined}
			/>
			<Portal>
				<ArkMenu.Positioner data-testid={menuProps.testId ? `${menuProps.testId}--positioner` : undefined}>
					<ArkMenu.Content
						class={menuProps.className}
						data-testid={menuProps.testId ? `${menuProps.testId}--content` : undefined}
					>
						{menuProps.children}
					</ArkMenu.Content>
				</ArkMenu.Positioner>
			</Portal>
		</ArkMenu.Root>
	);
}
