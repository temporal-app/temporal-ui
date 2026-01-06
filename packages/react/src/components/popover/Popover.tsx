import type { PopoverProps as CorePopoverProps } from "@temporal-ui/core/popover";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import type React from "react";
import { Portal } from "@ark-ui/react";
import { PopoverContent } from "./PopoverContent";
import { testId as testIdFn } from "@temporal-ui/core/utils/string";

export interface PopoverProps
	extends CorePopoverProps<React.ReactNode>,
		Omit<React.ComponentProps<typeof ArkPopover.Root>, "onOpenChange"> {
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

	const tid = testIdFn(testId);

	return (
		<ArkPopover.Root
			portalled={portal}
			{...props}
			onOpenChange={(details) => onOpenChange?.(details.open)}
			positioning={position}
			data-testid={tid("--root")}
		>
			<ArkPopover.Trigger
				asChild
				className={props.classes?.trigger}
				data-testid={tid("--trigger")}
			>
				{trigger}
			</ArkPopover.Trigger>
			{portal && (
				<Portal>
					<PopoverContent
						{...contentProps}
						data-testid={tid("--content")}
					/>
				</Portal>
			)}
			{!portal && (
				<PopoverContent
					{...contentProps}
					data-testid={tid("--content")}
				/>
			)}
		</ArkPopover.Root>
	);
}
