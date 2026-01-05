import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import { testId } from "@temporal-ui/core/utils/string";
import { Show, splitProps } from "solid-js";
import { cx } from "@temporal-ui/core/utils/cx";
import type { HTMLProps } from "@ark-ui/solid";

export interface PopoverContentProps extends HTMLProps<"div"> {
	testId?: string;
	title?: string;
	description?: string;
	className?: string;
	classes?: {
		content?: string;
		title?: string;
		description?: string;
	};
}

export function PopoverContent(props: PopoverContentProps) {
	const [contentProps, elementProps] = splitProps(props, [
		"title",
		"description",
		"classes",
		"children",
		"testId",
		"className",
	]);

	const tid = testId(props.testId);

	return (
		<ArkPopover.Positioner data-testid={tid("--positioner")}>
			<ArkPopover.Content
				{...elementProps}
				data-testid={tid("--content")}
				class={cx(contentProps.classes?.content, contentProps.className)}
			>
				<Show when={contentProps.title}>
					<ArkPopover.Title
						class={contentProps.classes?.title}
						data-testid={tid("--title")}
					>
						{contentProps.title}
					</ArkPopover.Title>
				</Show>
				<Show when={contentProps.description}>
					<ArkPopover.Description
						class={contentProps.classes?.description}
						data-testid={tid("--description")}
					>
						{contentProps.description}
					</ArkPopover.Description>
				</Show>
				{contentProps.children}
			</ArkPopover.Content>
		</ArkPopover.Positioner>
	);
}
