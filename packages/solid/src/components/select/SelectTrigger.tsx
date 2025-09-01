import { Select, useSelectContext } from "@ark-ui/solid/select";
import type { SelectItem } from "@temporal-ui/core/select";
import type { JSX } from "solid-js";
import { Stack } from "../stack";
import { ChevronsUpDown } from "lucide-solid";

export interface SelectTriggerProps {
	className?: string;
	class?: string;
	testId?: string;
	placeholder?: string;
	indicator?: JSX.Element;
	renderItem?: (item: SelectItem<JSX.Element>) => JSX.Element;
}

export function SelectTrigger(props: SelectTriggerProps) {
	const context = useSelectContext();

	return (
		<Select.Control>
			<Select.Trigger
				class={props.className ?? props.class}
				data-testid={props.testId ? `${props.testId}--trigger` : undefined}
			>
				{context().hasSelectedItems &&
					context().selectedItems[0] &&
					(props.renderItem?.(context().selectedItems[0]) ?? (
						<Stack
							row
							align="center"
							gap={2}
						>
							{context().selectedItems[0]?.icon}
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
