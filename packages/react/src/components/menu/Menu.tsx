import type { MenuProps as CoreMenuProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";

export interface MenuProps extends CoreMenuProps<React.ReactNode> {
	trigger: React.ReactNode;
}

export function Menu(props: MenuProps) {
	const { trigger, children, className, onSelect, closeOnSelect, testId } = props;

	return (
		<ArkMenu.Root
			onSelect={(details) => onSelect?.(details.value)}
			closeOnSelect={closeOnSelect}
			data-testid={testId ? `${testId}--root` : undefined}
		>
			<ArkMenu.Trigger
				data-testid={testId ? `${testId}--trigger` : undefined}
				asChild
			>
				{trigger}
			</ArkMenu.Trigger>
			<ArkMenu.Positioner data-testid={testId ? `${testId}--positioner` : undefined}>
				<ArkMenu.Content
					className={className}
					data-testid={testId ? `${testId}--content` : undefined}
				>
					{children}
				</ArkMenu.Content>
			</ArkMenu.Positioner>
		</ArkMenu.Root>
	);
}
