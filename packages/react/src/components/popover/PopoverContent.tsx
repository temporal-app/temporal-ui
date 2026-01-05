import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { cx } from "@temporal-ui/core/utils/cx";
import { testId as testIdFn } from "@temporal-ui/core/utils/string";

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
	testId?: string;
	title?: string;
	description?: string;
	classes?: {
		content?: string;
		title?: string;
		description?: string;
	};
}

export function PopoverContent(props: PopoverContentProps) {
	const { title, description, classes, children, testId, ...elementProps } = props;

	const tid = testIdFn(testId);

	return (
		<ArkPopover.Positioner data-testid={tid("--positioner")}>
			<ArkPopover.Content
				data-testid={tid("--content")}
				className={cx(classes?.content, elementProps.className)}
			>
				{title && (
					<ArkPopover.Title
						className={classes?.title}
						data-testid={tid("--title")}
					>
						{title}
					</ArkPopover.Title>
				)}
				{description && (
					<ArkPopover.Description
						className={classes?.description}
						data-testid={tid("--description")}
					>
						{description}
					</ArkPopover.Description>
				)}
				{children}
			</ArkPopover.Content>
		</ArkPopover.Positioner>
	);
}
