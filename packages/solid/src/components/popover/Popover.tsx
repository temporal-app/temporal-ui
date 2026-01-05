import type { PopoverProps as CorePopoverProps } from "@temporal-ui/core/popover";
import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import { PopoverContent } from "./PopoverContent";
import { mergeProps, Show, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { testId } from "@temporal-ui/core/utils/string";

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

	const tid = testId(rootProps.testId);

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
			data-testid={tid("--root")}
		>
			<ArkPopover.Trigger
				asChild={(props) => rootProps.trigger({ ...props() })}
				class={contentProps.classes?.trigger}
				data-testid={tid("--trigger")}
			/>
			<Show when={rootProps.portal}>
				<Portal data-testid={tid("--portal")}>
					<PopoverContent
						{...contentProps}
						testId={rootProps.testId}
					/>
				</Portal>
			</Show>
			<Show when={!rootProps.portal}>
				<PopoverContent
					{...contentProps}
					testId={rootProps.testId}
				/>
			</Show>
		</ArkPopover.Root>
	);
}
