import type { TextInputProps as CoreTextInputProps } from "@temporal-ui/core/text-input";
import { type JSX, splitProps } from "solid-js";
import type { HTMLProps } from "@ark-ui/solid";
import { Field as ArkField } from "@ark-ui/solid/field";
import { Field } from "../field";

export interface TextInputProps extends CoreTextInputProps<JSX.Element>, HTMLProps<"input"> {}

export function TextInput(_props: TextInputProps & HTMLProps<"input">) {
	const [fieldProps, inputProps, restProps] = splitProps(
		_props,
		["label", "hint", "error", "required", "readOnly", "disabled", "classes", "testId"],
		["startSection", "endSection"],
	);

	return (
		<Field
			{...fieldProps}
			testId={fieldProps.testId ? `${fieldProps.testId}-field` : undefined}
		>
			<div
				data-scope={"field"}
				data-part={"input-wrapper"}
				data-start-section={inputProps.startSection ? true : undefined}
				data-end-section={inputProps.endSection ? true : undefined}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--wrapper` : undefined}
			>
				{inputProps.startSection && (
					<div
						data-scope={"field"}
						data-part={"input-start-section"}
						data-testid={fieldProps.testId ? `${fieldProps.testId}--start-section` : undefined}
					>
						{inputProps.startSection}
					</div>
				)}
				{inputProps.endSection && (
					<div
						data-scope={"field"}
						data-part={"input-end-section"}
						data-testid={fieldProps.testId ? `${fieldProps.testId}--end-section` : undefined}
					>
						{inputProps.endSection}
					</div>
				)}
				<ArkField.Input
					{...restProps}
					aria-invalid={fieldProps.error ? true : undefined}
					data-testid={fieldProps.testId ? `${fieldProps.testId}--input` : undefined}
				/>
			</div>
		</Field>
	);
}
