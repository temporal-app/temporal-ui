import type { ScrollAreaProps as CoreScrollAreaProps } from "@temporal-ui/core/scroll-area";
import { ScrollArea as ArkScrollArea } from "@ark-ui/solid/scroll-area";
import { mergeProps, Show, splitProps, type JSX } from "solid-js";

export interface ScrollAreaProps extends CoreScrollAreaProps<JSX.Element> {}

export function ScrollArea(props: ScrollAreaProps) {
	const [controlProps, boxProps] = splitProps(mergeProps({ orientation: "vertical" }, props), [
		"orientation",
		"width",
		"height",
	]);
	return (
		<ArkScrollArea.Root style={{ width: controlProps.width, height: controlProps.height }}>
			<ArkScrollArea.Viewport style={{ height: "100%" }}>
				<ArkScrollArea.Content {...boxProps} />
			</ArkScrollArea.Viewport>
			<Show when={["vertical", "both"].includes(controlProps.orientation)}>
				<ArkScrollArea.Scrollbar orientation="vertical">
					<ArkScrollArea.Thumb />
				</ArkScrollArea.Scrollbar>
			</Show>
			<Show when={["horizontal", "both"].includes(controlProps.orientation)}>
				<ArkScrollArea.Scrollbar orientation="horizontal">
					<ArkScrollArea.Thumb />
				</ArkScrollArea.Scrollbar>
			</Show>
			<ArkScrollArea.Corner />
		</ArkScrollArea.Root>
	);
}
