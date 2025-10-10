import { Select, useSelectContext } from "@ark-ui/solid/select";
import { ChevronsUpDown } from "lucide-solid";
import type { JSX } from "solid-js";
import { Stack } from "../stack";
import type { RenderItemFn } from "./SelectContent";

export interface SelectTriggerProps<M> {
	className?: string;
	class?: string;
	testId?: string;
	placeholder?: string;
	indicator?: JSX.Element;
	renderItem?: RenderItemFn<M>;
	startSection?: JSX.Element;
}

export function SelectTrigger<M = unknown>(props: SelectTriggerProps<M>) {
	const context = useSelectContext();

	return (
		<Select.Control>
			<Select.Trigger
				class={props.className ?? props.class}
				data-testid={props.testId ? `${props.testId}--trigger` : undefined}
			>
				{context().hasSelectedItems &&
					context().selectedItems[0] &&
					(props.renderItem ? (
						<div style={{ "pointer-events": "none" }}>
							{props.renderItem(context().selectedItems[0], "trigger")}
						</div>
					) : (
						<Stack
							row
							align="center"
							gap={2}
						>
							{context().selectedItems[0]?.icon ?? props.startSection}
							<Select.ValueText />
						</Stack>
					))}
				{!context().hasSelectedItems && (
					<Select.ValueText placeholder={props.placeholder ?? "Select an option..."} />
				)}
				<Select.Indicator>{props.indicator ?? <ChevronsUpDown />}</Select.Indicator>
			</Select.Trigger>
		</Select.Control>
	);
}
