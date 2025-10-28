import { Combobox, useComboboxContext } from "@ark-ui/react/combobox";
import { ChevronsUpDown, X } from "lucide-react";
import type { RenderItemFn } from "./SelectContent";
import { Stack } from "../stack";

export interface SelectControlProps<D = unknown> {
	icon?: React.ReactNode;
	testId?: string;
	placeholder?: string;
	renderItem?: RenderItemFn<D>;
	classes?: {
		control?: string;
		trigger?: string;
		valueText?: string;
	};
}

export function SelectControl<M = unknown>(props: SelectControlProps<M>) {
	const { testId, placeholder, renderItem, classes } = props;
	const context = useComboboxContext();

	return (
		<Combobox.Control
			className={classes?.control}
			onClick={() => context.setOpen(true)}
		>
			<button
				type="button"
				data-scope="combobox"
				data-part="value-text"
				data-placeholder={!context.valueAsString}
			>
				{context.hasSelectedItems &&
					(renderItem?.(context.selectedItems[0], "trigger") || (
						<Stack
							row
							align="center"
							gap={2}
						>
							{context.selectedItems[0]?.icon}
							{context.valueAsString}
						</Stack>
					))}
				{!context.hasSelectedItems && (placeholder ?? "Select option...")}
			</button>
			<Combobox.ClearTrigger data-testid={testId ? `${testId}--clear-trigger` : undefined}>
				<X />
			</Combobox.ClearTrigger>
			<Combobox.Trigger data-testid={testId ? `${testId}--trigger` : undefined}>
				<ChevronsUpDown />
			</Combobox.Trigger>
		</Combobox.Control>
	);
}
