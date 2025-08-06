import type { PopoverProps as CorePopoverProps } from "@temporal-ui/core/popover";
import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import { PopoverContent } from "./PopoverContent";
import { mergeProps, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";

export interface PopoverProps extends CorePopoverProps<JSX.Element> {
	trigger: (props: Record<string, unknown>) => JSX.Element;
}

export function Popover(props: PopoverProps) {
	const [rootProps, contentProps] = splitProps(mergeProps({ portal: true }, props), [
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
		"testId",
	]);

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
			data-testid={rootProps.testId ? `${rootProps.testId}--root` : undefined}
		>
			<ArkPopover.Trigger
				asChild={(props) => rootProps.trigger({ ...props() })}
				class={contentProps.classes?.trigger}
				data-testid={rootProps.testId ? `${rootProps.testId}--trigger` : undefined}
			/>
			{rootProps.portal && (
				<Portal data-testid={rootProps.testId ? `${rootProps.testId}--portal` : undefined}>
					<PopoverContent
						{...contentProps}
						data-testid={rootProps.testId ? `${rootProps.testId}--content` : undefined}
					/>
				</Portal>
			)}
			{!rootProps.portal && (
				<PopoverContent
					{...contentProps}
					data-testid={rootProps.testId ? `${rootProps.testId}--content` : undefined}
				/>
			)}
		</ArkPopover.Root>
	);
}
