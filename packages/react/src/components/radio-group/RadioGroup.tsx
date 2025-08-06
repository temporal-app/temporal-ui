import type { RadioGroupProps as CoreRadioGroupProps } from "@temporal-ui/core/radio-group";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import type React from "react";
import { cx } from "@temporal-ui/core/utils/cx";

export interface RadioGroupProps extends CoreRadioGroupProps<React.ReactNode> {}

export type { RadioGroupItem } from "@temporal-ui/core/radio-group";

export function RadioGroup(props: RadioGroupProps) {
	const {
		label,
		hint,
		error,
		disabled,
		classes,
		items,
		defaultValue,
		value,
		onValueChange,
		orientation,
		testId,
	} = props;

	return (
		<ArkRadioGroup.Root
			className={cx("field-root", classes?.root)}
			defaultValue={defaultValue}
			disabled={disabled}
			value={value}
			onValueChange={(details) => onValueChange?.(details.value)}
			orientation={orientation}
			readOnly={props.readOnly}
			aria-required={props.required}
			data-testid={testId ? `${testId}--root` : undefined}
		>
			{label && (
				<ArkRadioGroup.Label
					className={cx("field-label", classes?.label)}
					data-testid={testId ? `${testId}--label` : undefined}
				>
					{label}
				</ArkRadioGroup.Label>
			)}
			{hint && (
				<div
					className={cx("field-hint", classes?.hint)}
					aria-disabled={disabled}
					data-testid={testId ? `${testId}--hint` : undefined}
				>
					{hint}
				</div>
			)}
			<ArkRadioGroup.Indicator />
			{items.map((item, i) => (
				<ArkRadioGroup.Item
					key={item.value}
					value={item.value}
					disabled={item.disabled}
					invalid={!!error}
					data-testid={testId ? `${testId}--item-${i}` : undefined}
				>
					<ArkRadioGroup.ItemControl
						data-testid={testId ? `${testId}--item-control-${i}` : undefined}
					/>
					<ArkRadioGroup.ItemText
						data-testid={testId ? `${testId}--item-text-${i}` : undefined}
					>
						{item.label}
					</ArkRadioGroup.ItemText>
					<ArkRadioGroup.ItemHiddenInput
						data-testid={testId ? `${testId}--item-input-${i}` : undefined}
					/>
				</ArkRadioGroup.Item>
			))}
			{error && (
				<div
					className={cx("field-error", classes?.error)}
					data-testid={testId ? `${testId}--error` : undefined}
				>
					{error}
				</div>
			)}
		</ArkRadioGroup.Root>
	);
}
