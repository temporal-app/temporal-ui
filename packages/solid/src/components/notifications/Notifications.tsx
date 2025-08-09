import { Toast, Toaster, createToaster } from "@ark-ui/solid";
import type { NotificationsProps } from "@temporal-ui/core/notifications";
import { XIcon } from "lucide-solid";
import { Loader } from "../loader";
import type { NotificationConfig } from "@temporal-ui/core/notifications";
import { Show } from "solid-js";

export type { NotificationsProps } from "@temporal-ui/core/notifications";

const toaster = createToaster({
	placement: "bottom-end",
	gap: 12,
});

export function showNotification(props: NotificationConfig) {
	return toaster.create({
		title: props.title,
		description: props.message,
		duration: props.duration,
		type: props.type ?? "info",
		action: props.action,
	});
}

export function Notifications(props: NotificationsProps) {

	toaster.attrs.placement = props.placement ?? "bottom-end";
	toaster.attrs.max = props.max ?? 10;
	toaster.attrs.gap = props.gap ?? 12;

	return (
		<Toaster toaster={toaster}>
			{(toast) => (
				<Toast.Root>
					<Toast.Title>
						<Show when={toast().type === "loading"}>
							<Loader size="xs" />
						</Show>
						{toast().title}
					</Toast.Title>
					<Toast.Description>{toast().description}</Toast.Description>
					<Show when={toast().action}>
						<Toast.ActionTrigger>{toast().action?.label}</Toast.ActionTrigger>
					</Show>
					<Toast.CloseTrigger>
						<XIcon />
					</Toast.CloseTrigger>
				</Toast.Root>
			)}
		</Toaster>
	);
}