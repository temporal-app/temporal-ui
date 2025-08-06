import { Box, type BoxProps } from "../box";
import { Popover as ArkPopover } from "@ark-ui/react/popover";

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
	const { title, description, classes, children, testId, ...boxProps } = props;

	return (
		<ArkPopover.Positioner data-testid={testId ? `${testId}--positioner` : undefined}>
			<ArkPopover.Content data-testid={testId ? `${testId}--content` : undefined}>
				<Box
					{...boxProps}
					className={classes?.content}
				>
					{title && (
						<ArkPopover.Title
							className={classes?.title}
							data-testid={testId ? `${testId}--title` : undefined}
						>
							{title}
						</ArkPopover.Title>
					)}
					{description && (
						<ArkPopover.Description
							className={classes?.description}
							data-testid={testId ? `${testId}--description` : undefined}
						>
							{description}
						</ArkPopover.Description>
					)}
					{children}
				</Box>
			</ArkPopover.Content>
		</ArkPopover.Positioner>
	);
}
