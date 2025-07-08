import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import type { CheckboxProps as CoreCheckboxProps } from "@temporal-ui/core/checkbox";
import { CheckIcon } from "lucide-react";
import type React from "react";
import { forwardRef } from "react";
import { Field } from "../field";

export interface CheckboxProps extends CoreCheckboxProps<React.ReactNode> {
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {

	const {
		label,
		hint,
		error,
		required,
		readOnly,
		disabled,
		classes,
		defaultChecked,
		checked,
		onCheckedChange,
		...rest
	} = props;

	return (
		<Field
			label={undefined}
			hint={hint}
			classes={classes}
			required={required}
			readOnly={readOnly}
			error={error}
			disabled={disabled}
		>
			<ArkCheckbox.Root
				ref={ref}
				defaultChecked={defaultChecked}
				checked={checked}
				onCheckedChange={(details) => onCheckedChange?.(details.checked)}
			>
				<ArkCheckbox.Control>
					<ArkCheckbox.Indicator>
						<CheckIcon />
					</ArkCheckbox.Indicator>
				</ArkCheckbox.Control>
				<ArkCheckbox.Label>{label}</ArkCheckbox.Label>
				<ArkCheckbox.HiddenInput {...rest} />
			</ArkCheckbox.Root>
		</Field>
	);
});
