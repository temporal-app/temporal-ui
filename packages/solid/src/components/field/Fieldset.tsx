import { Fieldset as ArkFieldset } from "@ark-ui/solid/fieldset";
import type { FieldsetProps as CoreFieldsetProps } from "@temporal-ui/core/field";
import { splitProps, type JSX } from "solid-js";

export type FieldsetProps = CoreFieldsetProps<JSX.Element>;

export function Fieldset(_props: FieldsetProps) {
	const [controlProps, props] = splitProps(_props, ["legend", "variant"]);
	return (
		<ArkFieldset.Root
			data-variant={controlProps.variant}
			class={props.classes?.root}
			invalid={!!props.error}
			disabled={props.disabled}
			data-testid={props.testId ? `${props.testId}--root` : undefined}
		>
			{controlProps.legend && (
				<ArkFieldset.Legend
					class={props.classes?.label}
					aria-disabled={props.disabled}
					data-testid={props.testId ? `${props.testId}--label` : undefined}
				>
					{controlProps.legend}
				</ArkFieldset.Legend>
			)}
			{props.hint && (
				<ArkFieldset.HelperText
					class={props.classes?.hint}
					aria-disabled={props.disabled}
					data-testid={props.testId ? `${props.testId}--hint` : undefined}
				>
					{props.hint}
				</ArkFieldset.HelperText>
			)}
			{props.error && (
				<ArkFieldset.ErrorText
					class={props.classes?.error}
					data-testid={props.testId ? `${props.testId}--error` : undefined}
				>
					{props.error}
				</ArkFieldset.ErrorText>
			)}
			{props.children}
		</ArkFieldset.Root>
	);
}

export const FieldsetRoot = ArkFieldset.Root;
export const FieldsetLegend = ArkFieldset.Legend;
export const FieldsetHint = ArkFieldset.HelperText;
export const FieldsetError = ArkFieldset.ErrorText;