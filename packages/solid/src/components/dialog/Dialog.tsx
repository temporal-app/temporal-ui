import type { DialogProps as CoreDialogProps } from "@temporal-ui/core/dialog";
import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { X } from "lucide-solid";
import { Box } from "../box";
import type { HTMLProps } from "@ark-ui/solid";
import { Show, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";

export interface DialogProps extends CoreDialogProps<JSX.Element>, Omit<HTMLProps<"div">, "role"> {
	trigger: (props: Record<string, unknown>) => JSX.Element;
}

export function Dialog(props: DialogProps) {
	const [rootProps, dialogProps, contentProps] = splitProps(
		props,
		[
			"modal",
			"defaultOpen",
			"open",
			"onOpenChange",
			"closeOnEscape",
			"closeOnInteractOutside",
			"lazyMount",
			"unmountOnExit",
			"testId",
		],
		["trigger", "title", "description"],
	);

	return (
		<ArkDialog.Root
			{...rootProps}
			onOpenChange={(details) => rootProps.onOpenChange?.(details.open)}
			data-testid={rootProps.testId ? `${rootProps.testId}--root` : undefined}
		>
			<ArkDialog.Trigger asChild={(props) => dialogProps.trigger({ ...props() })} />
			<Portal>
				<ArkDialog.Backdrop />
				<ArkDialog.Positioner>
					<ArkDialog.Content>
						<Box {...contentProps}>
							<Box
								data-scope="dialog"
								data-part="header"
							>
								<Show when={dialogProps.title}>
									<ArkDialog.Title>{dialogProps.title}</ArkDialog.Title>
								</Show>
								<Show when={dialogProps.description}>
									<ArkDialog.Description>{dialogProps.description}</ArkDialog.Description>
								</Show>
								<ArkDialog.CloseTrigger>
									<X />
								</ArkDialog.CloseTrigger>
							</Box>
							{props.children}
						</Box>
					</ArkDialog.Content>
				</ArkDialog.Positioner>
			</Portal>
		</ArkDialog.Root>
	);
}
