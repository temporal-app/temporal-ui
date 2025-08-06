import { RadioGroup as ArkRadioGroup } from "@ark-ui/solid/radio-group";
import type { RadioGroupProps as CoreRadioGroupProps } from "@temporal-ui/core/radio-group";
import { cx } from "@temporal-ui/core/utils/cx";
import type { JSX } from "solid-js";
import { Index, splitProps } from "solid-js";

export interface RadioGroupProps extends CoreRadioGroupProps<JSX.Element> {}

export type { RadioGroupItem } from "@temporal-ui/core/radio-group";

export function RadioGroup(_props: RadioGroupProps) {
	const [fieldProps, groupProps] = splitProps(
		_props,
		["label", "hint", "error", "required", "readOnly", "disabled", "classes", "testId"],
		["items", "orientation", "defaultValue", "value", "onValueChange"],
	);

	return (
		<ArkRadioGroup.Root
			class={cx("field-root", fieldProps.classes?.root)}
			defaultValue={groupProps.defaultValue}
			value={groupProps.value}
			disabled={fieldProps.disabled}
			aria-required={fieldProps.required}
			readOnly={fieldProps.readOnly}
			onValueChange={(details) => groupProps.onValueChange?.(details.value)}
			orientation={groupProps.orientation}
			data-testid={fieldProps.testId ? `${fieldProps.testId}--group` : undefined}
		>
			{fieldProps.label && (
				<ArkRadioGroup.Label
					class={cx("field-label", fieldProps.classes?.label)}
					data-testid={fieldProps.testId ? `${fieldProps.testId}--label` : undefined}
				>
					{fieldProps.label}
				</ArkRadioGroup.Label>
			)}
			{fieldProps.hint && (
				<div
					class={cx("field-hint", fieldProps.classes?.hint)}
					aria-disabled={fieldProps.disabled}
					data-testid={fieldProps.testId ? `${fieldProps.testId}--hint` : undefined}
				>
					{fieldProps.hint}
				</div>
			)}
			<Index each={groupProps.items}>
				{(item, i) => (
					<ArkRadioGroup.Item
						value={item().value}
						disabled={item().disabled}
						invalid={!!fieldProps.error}
						data-testid={
							fieldProps.testId ? `${fieldProps.testId}--item-${i}` : undefined
						}
					>
						<ArkRadioGroup.ItemControl
							data-testid={
								fieldProps.testId
									? `${fieldProps.testId}--item-control-${i}`
									: undefined
							}
						/>
						<ArkRadioGroup.ItemText
							data-testid={
								fieldProps.testId
									? `${fieldProps.testId}--item-text-${i}`
									: undefined
							}
						>
							{item().label}
						</ArkRadioGroup.ItemText>
						<ArkRadioGroup.ItemHiddenInput
							data-testid={
								fieldProps.testId
									? `${fieldProps.testId}--item-input-${i}`
									: undefined
							}
						/>
					</ArkRadioGroup.Item>
				)}
			</Index>
			{fieldProps.error && (
				<div
					class={cx("field-error", fieldProps.classes?.error)}
					data-testid={fieldProps.testId ? `${fieldProps.testId}--error` : undefined}
				>
					{fieldProps.error}
				</div>
			)}
		</ArkRadioGroup.Root>
	);
}
