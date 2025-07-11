import type { PopoverProps as CorePopoverProps } from "@temporal-ui/core/popover";
import { Popover as ArkPopover } from '@ark-ui/solid/popover';
import { PopoverContent } from "./PopoverContent";
import { mergeProps, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";

export interface PopoverProps extends CorePopoverProps<JSX.Element> {
	trigger: (props: Record<string, unknown>) => JSX.Element;
};

export function Popover(props: PopoverProps) {
	const [ rootProps, contentProps ] = splitProps(
		mergeProps({ portal: true }, props),
		[
			"trigger",
			"portal",
			"modal",
			"autoFocus",
			"defaultOpen",
			"open",
			"onOpenChange",
			"closeOnEscape",
			"closeOnInteractOutside",
			"position",
		]
	);

	return (
		<ArkPopover.Root
			portalled={rootProps.portal}
			modal={rootProps.modal}
			autoFocus={rootProps.autoFocus}
			defaultOpen={rootProps.defaultOpen}
			open={rootProps.open}
			onOpenChange={(details) => rootProps.onOpenChange?.(details.open)}
			closeOnEscape={rootProps.closeOnEscape}
			closeOnInteractOutside={rootProps.closeOnInteractOutside}
			positioning={rootProps.position}
		>
			<ArkPopover.Trigger
				asChild={props => rootProps.trigger({ ...props() })}
				class={contentProps.classes?.trigger}
			/>
			{rootProps.portal && (
				<Portal>
					<PopoverContent {...contentProps} />
				</Portal>
			)}
			{!rootProps.portal && <PopoverContent {...contentProps} />}
		</ArkPopover.Root>
	);
}