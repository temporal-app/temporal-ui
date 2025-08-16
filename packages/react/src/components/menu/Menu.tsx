import type { MenuProps as CoreMenuProps } from "@temporal-ui/core/menu";
import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
import { Portal } from "@ark-ui/react/portal";

export interface MenuProps extends CoreMenuProps<React.ReactNode> {
	trigger: React.ReactNode;
}

export function Menu(props: MenuProps) {
	const { trigger, children, className, onSelect, closeOnSelect, testId, position } = props;

	return (
		<ArkMenu.Root
			onSelect={(details) => onSelect?.(details.value)}
			closeOnSelect={closeOnSelect}
			data-testid={testId ? `${testId}--root` : undefined}
			positioning={position}
		>
			<ArkMenu.Trigger
				data-testid={testId ? `${testId}--trigger` : undefined}
				asChild
			>
				{trigger}
			</ArkMenu.Trigger>
			<Portal>
				<ArkMenu.Positioner data-testid={testId ? `${testId}--positioner` : undefined}>
					<ArkMenu.Content
						className={className}
						data-testid={testId ? `${testId}--content` : undefined}
					>
						{children}
					</ArkMenu.Content>
				</ArkMenu.Positioner>
			</Portal>
		</ArkMenu.Root>
	);
}
