import type { PopoverProps as CorePopoverProps } from "@temporal-ui/core/popover";
import { Popover as ArkPopover } from "@ark-ui/react/popover";
import type React from "react";
import { Portal } from "@ark-ui/react";
import { PopoverContent } from "./PopoverContent";
import { testId as testIdFn } from "@temporal-ui/core/utils/string";

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

	const tid = testIdFn(testId);

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
				<Portal data-testid={tid("--portal")}>
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
