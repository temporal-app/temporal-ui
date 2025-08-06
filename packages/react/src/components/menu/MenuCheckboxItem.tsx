import type { MenuCheckboxItemProps as CoreMenuCheckboxItemProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import type { Assign } from "@ark-ui/react";
import type { ComponentPropsWithoutRef } from "react";
import { CheckIcon } from "lucide-react";

interface BaseMenuCheckboxItemProps extends CoreMenuCheckboxItemProps<React.ReactNode> {}
export interface MenuCheckboxItemProps
	extends Assign<ComponentPropsWithoutRef<"div">, BaseMenuCheckboxItemProps> {}

export function MenuCheckboxItem(props: MenuCheckboxItemProps) {
	const { testId, children, ...rest } = props;

	return (
		<ArkMenu.CheckboxItem
			{...rest}
			data-testid={testId}
		>
			<ArkMenu.ItemIndicator data-testid={testId ? `${testId}--indicator` : undefined}>
				<CheckIcon />
			</ArkMenu.ItemIndicator>
			<ArkMenu.ItemText data-testid={testId ? `${testId}--text` : undefined}>
				{children}
			</ArkMenu.ItemText>
		</ArkMenu.CheckboxItem>
	);
}
