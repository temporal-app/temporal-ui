import { Field as ArkField } from "@ark-ui/solid/field";
import type { FieldProps as CoreFieldProps } from "@temporal-ui/core/field";
import type { JSX } from "solid-js";

export type FieldProps = CoreFieldProps<JSX.Element>;

export function Field(props: FieldProps) {
	return (
		<ArkField.Root
			class={props.classes?.root}
			invalid={!!props.error}
			disabled={props.disabled}
			readOnly={props.readOnly}
			required={props.required}
			data-testid={props.testId ? `${props.testId}--root` : undefined}
		>
			{props.label && (
				<ArkField.Label
					class={props.classes?.label}
					aria-disabled={props.disabled}
					data-testid={props.testId ? `${props.testId}--label` : undefined}
				>
					{props.label}
				</ArkField.Label>
			)}
			{props.hint && (
				<ArkField.HelperText
					class={props.classes?.hint}
					aria-disabled={props.disabled}
					data-testid={props.testId ? `${props.testId}--hint` : undefined}
				>
					{props.hint}
				</ArkField.HelperText>
			)}
			{props.children}
			{props.error && (
				<ArkField.ErrorText
					class={props.classes?.error}
					data-testid={props.testId ? `${props.testId}--error` : undefined}
				>
					{props.error}
				</ArkField.ErrorText>
			)}
		</ArkField.Root>
	);
}

export const FieldRoot = ArkField.Root;
export const FieldLabel = ArkField.Label;
export const FieldHint = ArkField.HelperText;
export const FieldError = ArkField.ErrorText;
