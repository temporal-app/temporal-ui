import type { TextInputProps as CoreTextInputProps } from "@temporal-ui/core/text-input";
import { type JSX, splitProps } from "solid-js";
import type { HTMLProps } from "@ark-ui/solid";
import { Field as ArkField } from "@ark-ui/solid/field";
import { Field } from "../field";
import { cx } from "@temporal-ui/core/utils/cx";

export interface TextInputProps extends CoreTextInputProps<JSX.Element>, HTMLProps<"input"> {}

export function TextInput(_props: TextInputProps & HTMLProps<"input">) {
	const [fieldProps, inputProps, restProps] = splitProps(
		_props,
		["label", "hint", "error", "required", "readOnly", "disabled", "classes", "testId"],
		["startSection", "endSection", "className", "class"],
	);

	return (
		<Field
			label={fieldProps.label}
			hint={fieldProps.hint}
			classes={fieldProps.classes}
			required={fieldProps.required}
			readOnly={fieldProps.readOnly}
			error={fieldProps.error}
			disabled={fieldProps.disabled}
			testId={fieldProps.testId ? `${fieldProps.testId}-field` : undefined}
		>
			<div
				class={"input-wrapper"}
				data-start-section={inputProps.startSection ? true : undefined}
				data-end-section={inputProps.endSection ? true : undefined}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--wrapper` : undefined}
			>
				{inputProps.startSection && (
					<div
						class={"input-start-section"}
						data-position={"start"}
						data-testid={`${fieldProps.testId}--start-section`}
					>
						{inputProps.startSection}
					</div>
				)}
				{inputProps.endSection && (
					<div
						class={"input-end-section"}
						data-position={"end"}
						data-testid={`${fieldProps.testId}--end-section`}
					>
						{inputProps.endSection}
					</div>
				)}
				<ArkField.Input
					{...restProps}
					class={cx("input", inputProps.className, inputProps.class)}
					aria-invalid={fieldProps.error ? true : undefined}
					data-testid={fieldProps.testId ? `${fieldProps.testId}--input` : undefined}
				/>
			</div>
		</Field>
	);
}
