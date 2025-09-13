import type { SliderProps as CoreSliderProps } from "@temporal-ui/core/slider";
import { Slider as ArkSlider } from "@ark-ui/solid/slider";
import { Field } from "../field";
import type { HTMLProps } from "@ark-ui/solid/factory";
import { For, Show, splitProps, type JSX } from "solid-js";
export interface SliderProps extends CoreSliderProps<JSX.Element>, Omit<HTMLProps<"input">, "max" | "min" | "step"> {}

export function Slider(props: SliderProps) {
	const [fieldProps, rootProps, extraProps, inputProps] = splitProps(props,
		["label", "hint", "error", "required", "readOnly", "disabled", "testId"],
		["min", "max", "step"],
		["showValue", "marks", "showMarkDashes"],
	);
	return (
		<Field
			{...fieldProps}
			testId={props.testId ? `${props.testId}-field` : undefined}
		>
			<ArkSlider.Root
				{...rootProps}
				readOnly={fieldProps.readOnly}
				disabled={fieldProps.disabled}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--root` : undefined}
			>
				<ArkSlider.Control data-with-value={extraProps.showValue}>
					<ArkSlider.Track>
						<ArkSlider.Range />
					</ArkSlider.Track>
					<ArkSlider.Thumb index={0}>
						<ArkSlider.HiddenInput
							{...inputProps}
							data-testid={fieldProps.testId ? `${fieldProps.testId}--input` : undefined}
						/>
						<Show when={extraProps.showValue}>
							<ArkSlider.ValueText />
						</Show>
					</ArkSlider.Thumb>
				</ArkSlider.Control>
				<Show when={extraProps.marks}>
					<ArkSlider.MarkerGroup data-with-dashes={extraProps.showMarkDashes ? true : undefined}>
						<For each={Object.entries(extraProps.marks || {})}>
							{([value, label]) => <ArkSlider.Marker value={Number(value)}>{label}</ArkSlider.Marker>}
						</For>
					</ArkSlider.MarkerGroup>
				</Show>
			</ArkSlider.Root>
		</Field>
	);
}
