import { Select, useSelectContext } from "@ark-ui/react/select";
import { ChevronsUpDown } from "lucide-react";
import { Stack } from "../stack";
import type { SelectItem } from "./SelectContent";

export interface SelectTriggerProps<M = unknown> {
	className?: string;
	testId?: string;
	placeholder?: string;
	indicator?: React.ReactNode;
	renderItem?: (item: SelectItem<M>) => React.ReactNode;
}

export function SelectTrigger<M = unknown>({ className, testId, placeholder, indicator, renderItem }: SelectTriggerProps<M>) {
	const context = useSelectContext();

	return (
		<Select.Control>
			<Select.Trigger
				className={className}
				data-testid={testId ? `${testId}--trigger` : undefined}
			>
				{context.hasSelectedItems &&
					(renderItem?.(context.selectedItems[0]) ?? (
						<Stack row align="center" gap={2}>
							{context.selectedItems[0]?.icon}
							<Select.ValueText />
						</Stack>
					))}
				{!context.hasSelectedItems && <Select.ValueText placeholder={placeholder ?? "Select an option..."} />}
				<Select.Indicator>{indicator ?? <ChevronsUpDown />}</Select.Indicator>
			</Select.Trigger>
		</Select.Control>
	);
}
