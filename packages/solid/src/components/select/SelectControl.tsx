import { ChevronsUpDown, X } from "lucide-solid";
import { mergeProps, Show, type JSX } from "solid-js";
import { Stack } from "../stack";
import type { RenderItemFn } from "./SelectContent";
import { Combobox, useComboboxContext } from "@ark-ui/solid/combobox";

export interface SelectControlProps<D = unknown> {
	icon?: JSX.Element;
	testId?: string;
	placeholder?: string;
	deselectable?: boolean;
	invalid?: boolean;
	renderItem?: RenderItemFn<D>;
	classes?: {
		control?: string;
		trigger?: string;
		valueText?: string;
	};
}

export function SelectControl<M = unknown>(_props: SelectControlProps<M>) {
	const props = mergeProps({ placeholder: "Select option..." }, _props);
	const context = useComboboxContext();

	return (
		<Combobox.Control
			class={props.classes?.control}
			aria-invalid={props.invalid}
		>
			<button
				type="button"
				data-scope="combobox"
				data-part="value-text"
				data-placeholder={!context().valueAsString}
				onClick={() => context().setOpen(true)}
			>
				<Show when={!!context().selectedItems[0]}>
					<Show when={!!props.renderItem}>
						<div style={{ "pointer-events": "none" }}>
							{props.renderItem?.(context().selectedItems[0], "trigger")}
						</div>
					</Show>
					<Show when={!props.renderItem}>
						<Stack
							row
							align="center"
							gap={2}
						>
							{context().selectedItems[0]?.icon}
							{context().valueAsString}
						</Stack>
					</Show>
				</Show>
				<Show when={!context().selectedItems[0]}>{props.placeholder}</Show>
			</button>
			<Show when={props.deselectable}>
				<Combobox.ClearTrigger data-testid={props.testId ? `${props.testId}--clear-trigger` : undefined}>
					<X />
				</Combobox.ClearTrigger>
			</Show>
			<Combobox.Trigger data-testid={props.testId ? `${props.testId}--trigger` : undefined}>
				<ChevronsUpDown />
			</Combobox.Trigger>
		</Combobox.Control>
	);
}
