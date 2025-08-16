import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import type { CheckboxProps as CoreCheckboxProps } from "@temporal-ui/core/checkbox";
import { CheckIcon } from "lucide-react";
import type React from "react";
import { forwardRef } from "react";
import { Field } from "../field";

export interface CheckboxProps extends CoreCheckboxProps<React.ReactNode> {}

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
		testId,
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
			testId={testId ? `${testId}-field` : undefined}
		>
			<ArkCheckbox.Root
				defaultChecked={defaultChecked}
				checked={checked}
				onCheckedChange={(details) => onCheckedChange?.(details.checked)}
				data-testid={testId ? `${testId}--root` : undefined}
			>
				<ArkCheckbox.Control data-testid={testId ? `${testId}--control` : undefined}>
					<ArkCheckbox.Indicator data-testid={testId ? `${testId}--indicator` : undefined}>
						<CheckIcon />
					</ArkCheckbox.Indicator>
				</ArkCheckbox.Control>
				<ArkCheckbox.Label data-testid={testId ? `${testId}--label` : undefined}>{label}</ArkCheckbox.Label>
				<ArkCheckbox.HiddenInput
					ref={ref}
					data-testid={testId ? `${testId}--input` : undefined}
					{...rest}
				/>
			</ArkCheckbox.Root>
		</Field>
	);
});
