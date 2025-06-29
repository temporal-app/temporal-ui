import { Field as ArkField } from "@ark-ui/react/field";
import { type TextInputProps as CoreTextInputProps, cx } from "@temporal-ui/core";
import type React from "react";
import { forwardRef } from "react";
import { Field } from "../field";

export interface TextInputProps
	extends CoreTextInputProps<React.ReactNode>, React.InputHTMLAttributes<HTMLInputElement> { };

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
		className,
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
		>
			<div
				className={"input-wrapper"}
				data-start-section={startSection ? true : undefined}
				data-end-section={endSection ? true : undefined}
			>
				{startSection && (
					<div className={"input-start-section"} data-position={"start"}>
						{startSection}
					</div>
				)}
				{endSection && (
					<div className={"input-end-section"} data-position={"end"}>
						{endSection}
					</div>
				)}
				<ArkField.Input
					{...rest}
					ref={ref}
					className={cx("input", className)}
					aria-invalid={error ? true : undefined}
				/>
			</div>
		</Field>
	);
});
