import { Field as ArkField } from "@ark-ui/react/field";
import type { TextInputProps as CoreTextInputProps } from "@temporal-ui/core/text-input";
import type React from "react";
import { forwardRef } from "react";
import { Field } from "../field";

export interface TextInputProps
	extends CoreTextInputProps<React.ReactNode>,
		React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	const {
		label,
		hint,
		error,
		required,
		readOnly,
		disabled,
		classes,
		startSection,
		endSection,
		testId,
		...rest
	} = props;

	return (
		<Field
			label={label}
			hint={hint}
			classes={classes}
			required={required}
			readOnly={readOnly}
			error={error}
			disabled={disabled}
			testId={testId ? `${testId}-field` : undefined}
		>
			<div
				data-scope={"field"}
				data-part={"input-wrapper"}
				data-start-section={startSection ? true : undefined}
				data-end-section={endSection ? true : undefined}
				data-testid={testId ? `${testId}--wrapper` : undefined}
			>
				{startSection && (
					<div
						data-scope={"field"}
						data-part={"input-start-section"}
						data-testid={testId ? `${testId}--start-section` : undefined}
					>
						{startSection}
					</div>
				)}
				{endSection && (
					<div
						data-scope={"field"}
						data-part={"input-end-section"}
						data-testid={testId ? `${testId}--end-section` : undefined}
					>
						{endSection}
					</div>
				)}
				<ArkField.Input
					{...rest}
					ref={ref}
					aria-invalid={error ? true : undefined}
					data-testid={testId ? `${testId}--input` : undefined}
				/>
			</div>
		</Field>
	);
});
