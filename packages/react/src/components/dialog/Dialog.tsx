import type { DialogProps as CoreDialogProps } from "@temporal-ui/core/dialog";
import type React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";
import { testId as testIdFn } from "@temporal-ui/core/utils/string";
import { cx } from "@temporal-ui/core/utils/cx";

export interface DialogProps
	extends CoreDialogProps<React.ReactNode>,
		Omit<React.HTMLAttributes<HTMLDivElement>, "role"> {
	trigger: React.ReactNode;
}

export function Dialog(props: DialogProps) {
	const {
		trigger,
		title,
		description,
		testId,
		open,
		onOpenChange,
		defaultOpen,
		closeOnEscape,
		closeOnInteractOutside,
		modal,
		role,
		lazyMount,
		unmountOnExit,
		classes,
		...rest
	} = props;

	const tid = testIdFn(testId);

	return (
		<ArkDialog.Root
			open={open}
			onOpenChange={(details) => onOpenChange?.(details.open)}
			defaultOpen={defaultOpen}
			closeOnEscape={closeOnEscape}
			closeOnInteractOutside={closeOnInteractOutside}
			modal={modal}
			role={role}
			lazyMount={lazyMount}
			unmountOnExit={unmountOnExit}
			data-testid={testId ? `${testId}--root` : undefined}
		>
			<ArkDialog.Trigger
				asChild
				data-testid={tid("--trigger")}
				className={classes?.trigger}
			>
				{trigger}
			</ArkDialog.Trigger>
			<Portal>
				<ArkDialog.Backdrop
					className={classes?.backdrop}
					data-testid={tid("--backdrop")}
				/>
				<ArkDialog.Positioner>
					<ArkDialog.Content
						{...rest}
						className={cx(classes?.content, rest.className)}
						data-testid={tid("--content")}
					>
						<div
							data-scope="dialog"
							data-part="header"
						>
							{title && (
								<ArkDialog.Title
									className={classes?.title}
									data-testid={tid("--title")}
								>
									{title}
								</ArkDialog.Title>
							)}
							{description && (
								<ArkDialog.Description
									className={classes?.description}
									data-testid={tid("--description")}
								>
									{description}
								</ArkDialog.Description>
							)}
							<ArkDialog.CloseTrigger
								className={classes?.closeTrigger}
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
