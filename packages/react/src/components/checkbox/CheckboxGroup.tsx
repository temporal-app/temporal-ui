import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import type { CheckboxGroupProps as CoreCheckboxGroupProps } from "@temporal-ui/core/checkbox";
import { cx } from '@temporal-ui/core/utils/cx';
import { CheckIcon } from "lucide-react";
import type React from "react";

export interface CheckboxGroupProps extends CoreCheckboxGroupProps<React.ReactNode> {
}

export type { CheckboxGroupItem } from "@temporal-ui/core/checkbox";

export function CheckboxGroup(props: CheckboxGroupProps) {

	const {
		label,
		hint,
		error,
		required,
		readOnly,
		disabled,
		classes,
		name,
		items,
		defaultValues,
		values,
		onValuesChange
	} = props;

	return (
		<fieldset className={cx("field-root", classes?.root)}>
			{label && (
				<legend className={cx("field-label", classes?.label)}>
					{label}
					{required && <span title="required">*</span>}
				</legend>
			)}
			{hint && (
				<div
					className={cx("field-hint", classes?.hint)}
					aria-disabled={disabled}
				>
					{hint}
				</div>
			)}
			<ArkCheckbox.Group
				name={name}
				value={values}
				disabled={disabled}
				invalid={!!error}
				readOnly={readOnly}
				defaultValue={defaultValues}
				onValueChange={onValuesChange}
			>
				{items.map((item) => (
					<ArkCheckbox.Root value={item.value} key={item.value}>
						<ArkCheckbox.Control>
							<ArkCheckbox.Indicator>
								<CheckIcon />
							</ArkCheckbox.Indicator>
						</ArkCheckbox.Control>
						<ArkCheckbox.Label>{item.label}</ArkCheckbox.Label>
						<ArkCheckbox.HiddenInput />
					</ArkCheckbox.Root>
				))}
			</ArkCheckbox.Group>
			{error && (
				<div className={cx("field-error", classes?.error)}>
					{error}
				</div>
			)}
		</fieldset>
	);
}
