import { Select as ArkSelect, createListCollection, type ListCollection } from "@ark-ui/solid/select";
import type { SelectProps as CoreSelectProps } from "@temporal-ui/core/select";
import { mergeProps, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { Field } from "../field";
import { SelectContent, type SelectItem } from "./SelectContent";
import { SelectTrigger } from "./SelectTrigger";
import type { HTMLProps } from "@ark-ui/solid";

export interface SelectProps<M> extends CoreSelectProps<M, JSX.Element>, Omit<HTMLProps<'select'>, 'onBlur' | 'defaultValue' | 'value'> {
	collection?: ListCollection<SelectItem<M>>;
	class?: string;
}

export function Select<M = unknown>(_props: SelectProps<M>) {
	const [fieldProps, rootProps, triggerProps, contentProps, selectProps] = splitProps(
		mergeProps({ portal: true }, _props),
		["label", "hint", "error", "required", "readOnly", "disabled", "classes", "testId"],
		["collection", "data", "portal", "deselectable", "defaultValue", "value", "onValueChange", "onBlur"],
		["className", "class", "placeholder", "indicator", "renderItem", "startSection"],
		["maxDropdownHeight"],
	);

	const listCollection = () =>
		rootProps.collection ??
		createListCollection({
			items: rootProps.data ?? [],
			groupBy: (item) => item.group ?? "",
			isItemDisabled: (item) => item.disabled ?? false,
		});

	return (
		<Field
			{...fieldProps}
			testId={fieldProps.testId ? `${fieldProps.testId}-field` : undefined}
		>
			<ArkSelect.Root
				{...rootProps}
				class={fieldProps.classes?.selectRoot}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--root` : undefined}
				collection={listCollection()}
				disabled={fieldProps.disabled}
				invalid={!!fieldProps.error}
				required={fieldProps.required}
				readOnly={fieldProps.readOnly}
				value={rootProps.value ? [rootProps.value] : rootProps.value === null ? [] : undefined}
				defaultValue={rootProps.defaultValue ? [rootProps.defaultValue] : rootProps.defaultValue === null ? [] : undefined}
				onValueChange={(details) => rootProps.onValueChange?.(details.value[0] ?? null)}
				onFocusOutside={rootProps.onBlur}
				positioning={{
					offset: {
						mainAxis: 0,
					},
				}}
			>
				<SelectTrigger
					{...triggerProps}
					testId={fieldProps.testId}
				/>
				{rootProps.portal ? (
					<Portal>
						<SelectContent
							testId={fieldProps.testId}
							collection={listCollection()}
							renderItem={triggerProps.renderItem}
							maxHeight={contentProps.maxDropdownHeight}
						/>
					</Portal>
				) : (
					<SelectContent
						testId={fieldProps.testId}
						collection={listCollection()}
						renderItem={triggerProps.renderItem}
						maxHeight={contentProps.maxDropdownHeight}
					/>
				)}
				<ArkSelect.HiddenSelect
					{...selectProps}
					data-testid={fieldProps.testId ? `${fieldProps.testId}--input` : undefined}
				/>
			</ArkSelect.Root>
		</Field>
	);
}
