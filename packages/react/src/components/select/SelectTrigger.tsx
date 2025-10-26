import { Select, useSelectContext } from "@ark-ui/react/select";
import { ChevronsUpDown } from "lucide-react";
import { Stack } from "../stack";
import type { RenderItemFn } from "./SelectContent";

export interface SelectTriggerProps<M = unknown> {
	className?: string;
	testId?: string;
	placeholder?: string;
	indicator?: React.ReactNode;
	renderItem?: RenderItemFn<M>;
	startSection?: React.ReactNode;
	classes?: {
		control?: string;
		valueText?: string;
		indicator?: string;
	};
}

export function SelectTrigger<M = unknown>({
	className,
	testId,
	placeholder,
	indicator,
	renderItem,
	startSection,
	classes,
}: SelectTriggerProps<M>) {
	const context = useSelectContext();

	return (
		<Select.Control className={classes?.control}>
			<Select.Trigger
				className={className}
				data-testid={testId ? `${testId}--trigger` : undefined}
			>
				{context.hasSelectedItems &&
					(renderItem?.(context.selectedItems[0], "trigger") ?? (
						<Stack
							row
							align="center"
							gap={2}
						>
							{context.selectedItems[0]?.icon ?? startSection}
							<Select.ValueText className={classes?.valueText} />
						</Stack>
					))}
				{!context.hasSelectedItems && (
					<Select.ValueText
						className={classes?.valueText}
						placeholder={placeholder ?? "Select an option..."}
					/>
				)}
				<Select.Indicator className={classes?.indicator}>{indicator ?? <ChevronsUpDown />}</Select.Indicator>
			</Select.Trigger>
		</Select.Control>
	);
}
