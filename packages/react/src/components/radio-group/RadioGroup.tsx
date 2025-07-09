import type { RadioGroupProps as CoreRadioGroupProps } from "@temporal-ui/core/radio-group";
import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group';
import type React from "react";
import { cx } from '@temporal-ui/core/utils/cx';

export interface RadioGroupProps extends CoreRadioGroupProps<React.ReactNode> { };

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
		orientation
	} = props;

	return (
		<ArkRadioGroup.Root
			className={cx("field-root", classes?.root)}
			defaultValue={defaultValue}
			disabled={disabled}
			value={value}
			onValueChange={(details) => onValueChange?.(details.value)}
			orientation={orientation}
		>
			{label && (
				<ArkRadioGroup.Label className={cx("field-label", classes?.label)}>
					{label}
				</ArkRadioGroup.Label>
			)}
			{hint && (
				<div
					className={cx("field-hint", classes?.hint)}
					aria-disabled={disabled}
				>
					{hint}
				</div>
			)}
			<ArkRadioGroup.Indicator />
			{items.map(item => (
				<ArkRadioGroup.Item key={item.value} value={item.value} disabled={item.disabled} invalid={!!error}>
					<ArkRadioGroup.ItemControl />
					<ArkRadioGroup.ItemText>{item.label}</ArkRadioGroup.ItemText>
					<ArkRadioGroup.ItemHiddenInput />
				</ArkRadioGroup.Item>
			))}
			{error && (
				<div className={cx("field-error", classes?.error)}>
					{error}
				</div>
			)}
		</ArkRadioGroup.Root>
	);
}