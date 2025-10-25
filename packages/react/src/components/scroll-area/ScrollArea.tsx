import type { ScrollAreaProps as CoreScrollAreaProps } from "@temporal-ui/core/scroll-area";
import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";

export interface ScrollAreaProps extends CoreScrollAreaProps<React.ReactNode> {}

export function ScrollArea(props: ScrollAreaProps) {
	const { orientation = "vertical", width, height, ...boxProps } = props;
	return (
		<ArkScrollArea.Root style={{ width, height }}>
			<ArkScrollArea.Viewport style={{ height: "100%" }}>
				<ArkScrollArea.Content {...boxProps} />
			</ArkScrollArea.Viewport>
			{["vertical", "both"].includes(orientation) && (
				<ArkScrollArea.Scrollbar orientation="vertical">
					<ArkScrollArea.Thumb />
				</ArkScrollArea.Scrollbar>
			)}
			{orientation && ["horizontal", "both"].includes(orientation) && (
				<ArkScrollArea.Scrollbar orientation="horizontal">
					<ArkScrollArea.Thumb />
				</ArkScrollArea.Scrollbar>
			)}
			<ArkScrollArea.Corner />
		</ArkScrollArea.Root>
	);
}
