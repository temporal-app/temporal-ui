import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import type { RadioGroupProps as CoreRadioGroupProps } from "@temporal-ui/core/radio-group";
import type React from "react";
import { Field } from "../field";

export interface RadioGroupProps extends CoreRadioGroupProps<React.ReactNode> {}

export type { RadioGroupItem } from "@temporal-ui/core/radio-group";

export function RadioGroup(props: RadioGroupProps) {
	const { label, hint, error, disabled, items, defaultValue, value, required, readOnly, onValueChange, orientation, testId } = props;

	return (
		<Field
			label={label}
			hint={hint}
			error={error}
			disabled={disabled}
			required={required}
			readOnly={readOnly}
			testId={testId ? `${testId}-field` : undefined}
		>
			<ArkRadioGroup.Root
				defaultValue={defaultValue}
				disabled={disabled}
				value={value}
				onValueChange={(details) => onValueChange?.(details.value)}
				orientation={orientation}
				readOnly={readOnly}
				aria-required={required}
				data-testid={testId ? `${testId}--root` : undefined}
			>
				<ArkRadioGroup.Indicator />
				{items.map((item, i) => (
					<ArkRadioGroup.Item
						key={item.value}
						value={item.value}
						disabled={item.disabled}
						invalid={!!error}
						data-testid={testId ? `${testId}--item-${i}` : undefined}
					>
						<ArkRadioGroup.ItemControl data-testid={testId ? `${testId}--item-control-${i}` : undefined} />
						<ArkRadioGroup.ItemText data-testid={testId ? `${testId}--item-text-${i}` : undefined}>
							{item.label}
						</ArkRadioGroup.ItemText>
						<ArkRadioGroup.ItemHiddenInput
							data-testid={testId ? `${testId}--item-input-${i}` : undefined}
						/>
					</ArkRadioGroup.Item>
				))}
			</ArkRadioGroup.Root>
		</Field>
	);
}
