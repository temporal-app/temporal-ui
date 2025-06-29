import { Field as ArkField } from "@ark-ui/react/field";
import { type FieldProps as CoreFieldProps, cx } from "@temporal-ui/core";
import type React from "react";

export type FieldProps = CoreFieldProps<React.ReactNode>;

export function Field(props: FieldProps) {
	const { label, hint, error, children, disabled, readOnly, required, classes } = props;

	return (
		<ArkField.Root
			className={cx("field-root", classes?.root)}
			invalid={!!error}
			disabled={disabled}
			readOnly={readOnly}
			required={required}
		>
			{label && (
				<ArkField.Label className={cx("field-label", classes?.label)}>
					{label}
				</ArkField.Label>
			)}
			{children}
			{hint && (
				<ArkField.HelperText
					className={cx("field-hint", classes?.hint)}
					aria-disabled={disabled}
				>
					{hint}
				</ArkField.HelperText>
			)}
			{error && (
				<ArkField.ErrorText className={cx("field-error", classes?.error)}>
					{error}
				</ArkField.ErrorText>
			)}
		</ArkField.Root>
	);
}
