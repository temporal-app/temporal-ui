import { Box, type BoxProps } from "../box";
import { Popover as ArkPopover } from '@ark-ui/react/popover';

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
	const { title, description, classes, children, ...boxProps } = props;
	
	return (
		<ArkPopover.Positioner>
			<ArkPopover.Content>
				<Box {...boxProps} className={classes?.content}>
					{title && (
						<ArkPopover.Title
							className={classes?.title}
						>
							{title}
						</ArkPopover.Title>
					)}
					{description && (
						<ArkPopover.Description
							className={classes?.description}
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