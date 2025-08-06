import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import { splitProps } from "solid-js";
import { Box, type BoxProps } from "../box";

export interface PopoverContentProps extends BoxProps {
	title?: string;
	description?: string;
	classes?: {
		content?: string;
		title?: string;
		description?: string;
	};
}

export function PopoverContent(props: PopoverContentProps) {
	const [contentProps, boxProps] = splitProps(props, [
		"title",
		"description",
		"classes",
		"children",
		"testId",
	]);

	return (
		<ArkPopover.Positioner
			data-testid={props.testId ? `${props.testId}--positioner` : undefined}
		>
			<ArkPopover.Content data-testid={props.testId ? `${props.testId}--content` : undefined}>
				<Box {...boxProps}>
					{contentProps.title && (
						<ArkPopover.Title
							class={contentProps.classes?.title}
							data-testid={
								contentProps.testId ? `${contentProps.testId}--title` : undefined
							}
						>
							{contentProps.title}
						</ArkPopover.Title>
					)}
					{contentProps.description && (
						<ArkPopover.Description
							class={contentProps.classes?.description}
							data-testid={
								contentProps.testId
									? `${contentProps.testId}--description`
									: undefined
							}
						>
							{contentProps.description}
						</ArkPopover.Description>
					)}
					{contentProps.children}
				</Box>
			</ArkPopover.Content>
		</ArkPopover.Positioner>
	);
}
