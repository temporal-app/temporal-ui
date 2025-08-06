import { Field as ArkField } from "@ark-ui/react/field";
import type { FieldProps as CoreFieldProps } from "@temporal-ui/core/field";
import { cx } from "@temporal-ui/core/utils/cx";
import type React from "react";

export type FieldProps = CoreFieldProps<React.ReactNode>;

export function Field(props: FieldProps) {
	const { label, hint, error, children, disabled, readOnly, required, classes, testId } = props;

	return (
		<ArkField.Root
			className={cx("field-root", classes?.root)}
			invalid={!!error}
			data-testid={testId ? `${testId}--root` : undefined}
			disabled={disabled}
			readOnly={readOnly}
			required={required}
		>
			{label && (
				<ArkField.Label
					className={cx("field-label", classes?.label)}
					data-testid={testId ? `${testId}--label` : undefined}
				>
					{label}
				</ArkField.Label>
			)}
			{hint && (
				<ArkField.HelperText
					className={cx("field-hint", classes?.hint)}
					aria-disabled={disabled}
					data-testid={testId ? `${testId}--hint` : undefined}
				>
					{hint}
				</ArkField.HelperText>
			)}
			{children}
			{error && (
				<ArkField.ErrorText
					className={cx("field-error", classes?.error)}
					data-testid={testId ? `${testId}--error` : undefined}
				>
					{error}
				</ArkField.ErrorText>
			)}
		</ArkField.Root>
	);
}
