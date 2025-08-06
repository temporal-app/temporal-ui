import type { Assign } from "@ark-ui/react";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type { MenuRadioItemProps as CoreMenuRadioItemProps } from "@temporal-ui/core/menu";
import type React from "react";
import type { ComponentPropsWithoutRef } from "react";

interface BaseMenuRadioItemProps extends CoreMenuRadioItemProps<React.ReactNode> {}
export interface MenuRadioItemProps
	extends Assign<ComponentPropsWithoutRef<"div">, BaseMenuRadioItemProps> {}

export function MenuRadioItem(props: MenuRadioItemProps) {
	const { testId, ...rest } = props;

	return (
		<ArkMenu.RadioItem
			{...rest}
			data-testid={testId}
		>
			<ArkMenu.ItemIndicator data-testid={testId ? `${testId}--indicator` : undefined}>
				<div data-part="item-radio-indicator" />
			</ArkMenu.ItemIndicator>
			<ArkMenu.ItemText data-testid={testId ? `${testId}--text` : undefined}>
				{props.children}
			</ArkMenu.ItemText>
		</ArkMenu.RadioItem>
	);
}
