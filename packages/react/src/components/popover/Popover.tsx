import type { PopoverProps as CorePopoverProps } from "@temporal-ui/core/popover";
import { Popover as ArkPopover } from '@ark-ui/react/popover';
import type React from "react";
import { Portal } from "@ark-ui/react";
import { PopoverContent } from "./PopoverContent";

export interface PopoverProps extends CorePopoverProps<React.ReactNode> {
	trigger: React.ReactNode;
};

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
		>
			<ArkPopover.Trigger asChild className={props.classes?.trigger}>
				{trigger}
			</ArkPopover.Trigger>
			{portal && (
				<Portal>
					<PopoverContent {...contentProps}/>
				</Portal>
			)}
			{!portal && <PopoverContent {...contentProps} />}
		</ArkPopover.Root>
	);
}