import { Checkbox as ArkCheckbox } from "@ark-ui/solid/checkbox";
import type { CheckboxProps as CoreCheckboxProps } from "@temporal-ui/core/checkbox";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Field } from "../field";
import type { HTMLProps } from "@ark-ui/solid";
import { CheckIcon } from "lucide-solid";

export interface CheckboxProps extends CoreCheckboxProps<JSX.Element>, Omit<HTMLProps<'input'>, 'checked' | 'onInput'> {
}

export function Checkbox(_props: CheckboxProps) {
	const [ fieldProps, rootProps ] = splitProps(_props, [
		"label",
		"hint",
		"error",
		"required",
		"readOnly",
		"disabled",
		"classes"
	], [
		"defaultChecked",
		"checked",
		"onCheckedChange"
	]);

	return (
		<Field
			label={undefined}
			hint={fieldProps.hint}
			classes={fieldProps.classes}
			required={fieldProps.required}
			readOnly={fieldProps.readOnly}
			error={fieldProps.error}
			disabled={fieldProps.disabled}
		>
			<ArkCheckbox.Root
				defaultChecked={rootProps.defaultChecked}
				checked={rootProps.checked}
				onCheckedChange={(details) => rootProps.onCheckedChange?.(details.checked)}
				disabled={fieldProps.disabled}
				readOnly={fieldProps.readOnly}
				invalid={!!fieldProps.error}
				required={fieldProps.required}
			>
				<ArkCheckbox.Control>
					<ArkCheckbox.Indicator>
						<CheckIcon />
					</ArkCheckbox.Indicator>
				</ArkCheckbox.Control>
				{fieldProps.label && <ArkCheckbox.Label>{fieldProps.label}</ArkCheckbox.Label>}
				<ArkCheckbox.HiddenInput />
			</ArkCheckbox.Root>
		</Field>
	);
}
