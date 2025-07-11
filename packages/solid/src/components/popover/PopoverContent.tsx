import { children, splitProps } from "solid-js";
import { Box, type BoxProps } from "../box";
import { Popover as ArkPopover } from '@ark-ui/solid/popover';

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

	const [ contentProps, boxProps ] = splitProps(props, [
		"title",
		"description",
		"classes",
	]);

	return (
		<ArkPopover.Positioner>
			<ArkPopover.Content>
				<Box {...boxProps}>
					{contentProps.title && (
						<ArkPopover.Title
							class={contentProps.classes?.title}
						>
							{contentProps.title}
						</ArkPopover.Title>
					)}
					{contentProps.description && (
						<ArkPopover.Description
							class={contentProps.classes?.description}
						>
							{contentProps.description}
						</ArkPopover.Description>
					)}
					{children(() => boxProps.children)}
				</Box>
			</ArkPopover.Content>
		</ArkPopover.Positioner>
	);
}