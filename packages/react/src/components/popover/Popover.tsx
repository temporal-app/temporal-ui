import type { PopoverProps as CorePopoverProps } from "@temporal-ui/core/popover";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import type React from "react";
import { Portal } from "@ark-ui/react";
import { PopoverContent } from "./PopoverContent";

export interface PopoverProps extends CorePopoverProps<React.ReactNode> {
	trigger: React.ReactNode;
}

export function Popover(props: PopoverProps) {
	const {
		trigger,
		portal = true,
		modal,
		autoFocus,
		defaultOpen,
		open,
		onOpenChange,
		closeOnEscape,
		closeOnInteractOutside,
		position,
		testId,
		...contentProps
	} = props;

	return (
		<ArkPopover.Root
			portalled={portal}
			modal={modal}
			autoFocus={autoFocus}
			defaultOpen={defaultOpen}
			open={open}
			onOpenChange={(details) => onOpenChange?.(details.open)}
			closeOnEscape={closeOnEscape}
			closeOnInteractOutside={closeOnInteractOutside}
			positioning={position}
			data-testid={testId ? `${testId}--root` : undefined}
		>
			<ArkPopover.Trigger
				asChild
				className={props.classes?.trigger}
				data-testid={testId ? `${testId}--trigger` : undefined}
			>
				{trigger}
			</ArkPopover.Trigger>
			{portal && (
				<Portal data-testid={testId ? `${testId}--portal` : undefined}>
					<PopoverContent
						{...contentProps}
						data-testid={testId ? `${testId}-content` : undefined}
					/>
				</Portal>
			)}
			{!portal && (
				<PopoverContent
					{...contentProps}
					data-testid={testId ? `${testId}-content` : undefined}
				/>
			)}
		</ArkPopover.Root>
	);
}
