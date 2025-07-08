import { Checkbox as ArkCheckbox } from "@ark-ui/solid/checkbox";
import type { CheckboxGroupProps as CoreCheckboxGroupProps } from "@temporal-ui/core/checkbox";
import { cx } from "@temporal-ui/core/utils/cx";
import { CheckIcon } from "lucide-solid";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";

export interface CheckboxGroupProps extends CoreCheckboxGroupProps<JSX.Element> {
}

export type { CheckboxGroupItem } from "@temporal-ui/core/checkbox";

export function CheckboxGroup(_props: CheckboxGroupProps) {
	const [ fieldProps, groupProps ] = splitProps(_props, [
		"label",
		"hint",
		"error",
		"required",
		"readOnly",
		"disabled",
		"classes",
	], [
		"name",
		"items",
		"defaultValues",
		"values",
		"onValuesChange"
	]);

	return (
		<fieldset class={cx("field-root", fieldProps.classes?.root)}>
			{fieldProps.label && (
				<legend class={cx("field-label", fieldProps.classes?.label)}>
					{fieldProps.label}
					{fieldProps.required && <span title="required">*</span>}
				</legend>
			)}
			{fieldProps.hint && (
				<div
					class={cx("field-hint", fieldProps.classes?.hint)}
					aria-disabled={fieldProps.disabled}
				>
					{fieldProps.hint}
				</div>
			)}
			<ArkCheckbox.Group
				name={groupProps.name}
				value={groupProps.values ? () => groupProps.values || []: undefined}
				disabled={fieldProps.disabled}
				invalid={!!fieldProps.error}
				readOnly={fieldProps.readOnly}
				defaultValue={groupProps.defaultValues}
				onValueChange={groupProps.onValuesChange}
			>
				<For each={groupProps.items}>
					{(item) => (
						<ArkCheckbox.Root value={item.value}>
							<ArkCheckbox.Control>
								<ArkCheckbox.Indicator>
									<CheckIcon />
								</ArkCheckbox.Indicator>
							</ArkCheckbox.Control>
							<ArkCheckbox.Label>{item.label}</ArkCheckbox.Label>
							<ArkCheckbox.HiddenInput />
						</ArkCheckbox.Root>
					)}
				</For>
			</ArkCheckbox.Group>
			{fieldProps.error && (
				<div class={cx("field-error", fieldProps.classes?.error)}>
					{fieldProps.error}
				</div>
			)}
		</fieldset>
	);
}
