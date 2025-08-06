import { Field as ArkField } from "@ark-ui/solid/field";
import type { FieldProps as CoreFieldProps } from "@temporal-ui/core/field";
import { cx } from "@temporal-ui/core/utils/cx";
import type { JSX } from "solid-js";

export type FieldProps = CoreFieldProps<JSX.Element>;

export function Field(props: FieldProps) {

	return (
		<ArkField.Root
			class={cx("field-root", props.classes?.root)}
			invalid={!!props.error}
			disabled={props.disabled}
			readOnly={props.readOnly}
			required={props.required}
			data-testid={props.testId ? `${props.testId}--root` : undefined}
		>
			{props.label && (
				<ArkField.Label
					class={cx("field-label", props.classes?.label)}
					data-testid={props.testId ? `${props.testId}--label` : undefined}
				>
					{props.label}
				</ArkField.Label>
			)}
			{props.hint && (
				<ArkField.HelperText
					class={cx("field-hint", props.classes?.hint)}
					aria-disabled={props.disabled}
					data-testid={props.testId ? `${props.testId}--hint` : undefined}
				>
					{props.hint}
				</ArkField.HelperText>
			)}
			{props.children}
			{props.error && (
				<ArkField.ErrorText
					class={cx("field-error", props.classes?.error)}
					data-testid={props.testId ? `${props.testId}--error` : undefined}
				>
					{props.error}
				</ArkField.ErrorText>
			)}
		</ArkField.Root>
	);
}
