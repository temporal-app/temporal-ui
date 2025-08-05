import { Field as ArkField } from "@ark-ui/solid/field";
import type { FieldProps as CoreFieldProps } from "@temporal-ui/core/field";
import { cx } from "@temporal-ui/core/utils/cx";
import { children, type JSX, splitProps } from 'solid-js';

export type FieldProps = CoreFieldProps<JSX.Element>;

export function Field(_props: FieldProps) {

	const [ props ] = splitProps(
		_props,
		[ "label", "hint", "error", "children", "disabled", "readOnly", "required", "classes" ]
	);

	return (
		<ArkField.Root
			class={cx("field-root", props.classes?.root)}
			invalid={!!props.error}
			disabled={props.disabled}
			readOnly={props.readOnly}
			required={props.required}
		>
			{props.label && (
				<ArkField.Label class={cx("field-label", props.classes?.label)}>
					{props.label}
				</ArkField.Label>
			)}
			{props.hint && (
				<ArkField.HelperText
					class={cx("field-hint", props.classes?.hint)}
					aria-disabled={props.disabled}
				>
					{props.hint}
				</ArkField.HelperText>
			)}
			{children(() => props.children)}
			{props.error && (
				<ArkField.ErrorText class={cx("field-error", props.classes?.error)}>
					{props.error}
				</ArkField.ErrorText>
			)}
		</ArkField.Root>
	);
}
