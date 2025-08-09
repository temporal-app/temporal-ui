export type NotificationAction = {
	label: string;
	onClick: () => void;
}

export interface NotificationConfig {
	title?: string;
	message: string;
	duration?: number;
	type?: "success" | "error" | "info" | "warning" | "loading" | "custom";
	placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end";
	action?: NotificationAction;
}

export interface NotificationsProps {
	placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end";
	max?: number;
	gap?: number;
}