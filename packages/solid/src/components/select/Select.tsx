import { Select as ArkSelect, createListCollection } from "@ark-ui/solid/select";
import type { SelectProps as CoreSelectProps, SelectItem } from "@temporal-ui/core/select";
import { mergeProps, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { Field } from "../field";
import { SelectContent } from "./SelectContent";
import { SelectTrigger } from "./SelectTrigger";

export interface SelectProps extends CoreSelectProps<JSX.Element> {
	collection?: ReturnType<typeof createListCollection<SelectItem<JSX.Element>>>;
	class?: string;
}

export function Select(_props: SelectProps) {
	const [fieldProps, rootProps, triggerProps, selectProps] = splitProps(
		mergeProps({ portal: true }, _props),
		["label", "hint", "error", "required", "readOnly", "disabled", "classes", "testId"],
		["collection", "data", "portal", "deselectable", "defaultValue", "value", "onValueChange"],
		["className", "class", "placeholder", "indicator", "renderItem"],
	);

	const listCollection = () =>
		rootProps.collection ??
		createListCollection<SelectItem<JSX.Element>>({
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
				data-testid={fieldProps.testId ? `${fieldProps.testId}--root` : undefined}
				collection={listCollection()}
				disabled={fieldProps.disabled}
				invalid={!!fieldProps.error}
				required={fieldProps.required}
				readOnly={fieldProps.readOnly}
				onValueChange={(details) => rootProps.onValueChange?.(details.value)}
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
						/>
					</Portal>
				) : (
					<SelectContent
						testId={fieldProps.testId}
						collection={listCollection()}
						renderItem={triggerProps.renderItem}
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
