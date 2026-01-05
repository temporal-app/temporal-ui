import type { DialogProps as CoreDialogProps } from "@temporal-ui/core/dialog";
import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { X } from "lucide-solid";
import type { HTMLProps } from "@ark-ui/solid";
import { Show, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { testId } from "@temporal-ui/core/utils/string";
import { cx } from "@temporal-ui/core/utils/cx";

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

	const tid = testId(rootProps.testId);

	return (
		<ArkDialog.Root
			{...rootProps}
			onOpenChange={(details) => rootProps.onOpenChange?.(details.open)}
			data-testid={tid("--root")}
		>
			<ArkDialog.Trigger
				data-testid={tid("--trigger")}
				class={contentProps.classes?.trigger}
				asChild={(props) => dialogProps.trigger({ ...props() })}
			/>
			<Portal>
				<ArkDialog.Backdrop
					data-testid={tid("--backdrop")}
					class={contentProps.classes?.backdrop}
				/>
				<ArkDialog.Positioner data-testid={tid("--positioner")}>
					<ArkDialog.Content
						{...contentProps}
						data-testid={tid("--content")}
						class={cx(contentProps.classes?.content, contentProps.class)}
					>
						<div
							data-scope="dialog"
							data-part="header"
							class={contentProps.classes?.header}
						>
							<Show when={dialogProps.title}>
								<ArkDialog.Title
									class={contentProps.classes?.title}
									data-testid={tid("--title")}
								>
									{dialogProps.title}
								</ArkDialog.Title>
							</Show>
							<Show when={dialogProps.description}>
								<ArkDialog.Description
									class={contentProps.classes?.description}
									data-testid={tid("--description")}
								>
									{dialogProps.description}
								</ArkDialog.Description>
							</Show>
							<ArkDialog.CloseTrigger
								class={contentProps.classes?.closeTrigger}
								data-testid={tid("--close-trigger")}
							>
								<X />
							</ArkDialog.CloseTrigger>
						</div>
						{props.children}
					</ArkDialog.Content>
				</ArkDialog.Positioner>
			</Portal>
		</ArkDialog.Root>
	);
}
