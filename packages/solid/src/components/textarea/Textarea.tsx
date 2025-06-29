import { cx, type TextareaProps as CoreTextareaProps } from "@temporal-ui/core";
import { Field as ArkField } from "@ark-ui/solid/field";
import { Field } from "../field";
import type { HTMLProps } from "@ark-ui/solid";
import { splitProps, type JSX } from 'solid-js';

export interface TextareaProps extends CoreTextareaProps<JSX.Element>, HTMLProps<"textarea"> {}

export function Textarea(_props: TextareaProps) {
	const [ fieldProps, textareaProps, restProps ] = splitProps(_props, [
		"label",
		"hint",
		"error",
		"required",
		"readOnly",
		"disabled",
		"classes",
	], [
		"className",
		"class",
	]);

	return (
		<Field
			label={fieldProps.label}
			hint={fieldProps.hint}
			error={fieldProps.error}
			required={fieldProps.required}
			disabled={fieldProps.disabled}
			readOnly={fieldProps.readOnly}
			classes={fieldProps.classes}
		>
			<ArkField.Textarea
				{...restProps}
				class={cx("textarea", textareaProps.className, textareaProps.class)}
			/>
		</Field>
	);
}
