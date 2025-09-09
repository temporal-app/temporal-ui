import type { DialogProps as CoreDialogProps } from "@temporal-ui/core/dialog";
import type React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";
import { Box } from "../box";

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
		...rest
	} = props;

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
			<ArkDialog.Trigger asChild>{trigger}</ArkDialog.Trigger>
			<Portal>
				<ArkDialog.Backdrop />
				<ArkDialog.Positioner>
					<ArkDialog.Content>
						<Box {...rest}>
							<Box
								data-scope="dialog"
								data-part="header"
							>
								{title && <ArkDialog.Title>{title}</ArkDialog.Title>}
								{description && <ArkDialog.Description>{description}</ArkDialog.Description>}
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
