import type { HTMLProps } from "@ark-ui/solid";
import { ColorPicker, parseColor } from "@ark-ui/solid/color-picker";
import type { ColorInputProps as CoreColorInputProps } from "@temporal-ui/core/color-input";
import { cx } from "@temporal-ui/core/utils/cx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Field } from "../field";
import { Portal } from "solid-js/web";

export interface ColorInputProps extends CoreColorInputProps<JSX.Element>, Omit<HTMLProps<"input">, "value"> {
	defaultValue?: string;
}

export function ColorInput(_props: ColorInputProps) {
	const [fieldProps, rootProps, inputProps] = splitProps(
		_props,
		["label", "hint", "error", "required", "readOnly", "disabled", "testId"],
		["value", "onValueChange", "defaultValue", "className", "class"],
	);

	return (
		<Field
			{...fieldProps}
			testId={fieldProps.testId ? `${fieldProps.testId}-field` : undefined}
		>
			<ColorPicker.Root
				value={rootProps.value ? parseColor(String(rootProps.value)) : undefined}
				defaultValue={rootProps.defaultValue ? parseColor(String(rootProps.defaultValue)) : undefined}
				onValueChange={(details) => rootProps.onValueChange?.(details.valueAsString)}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--root` : undefined}
				data-scope={"color-input"}
				openAutoFocus={false}
			>
				<ColorPicker.Control data-scope={"color-input"}>
					<ColorPicker.Trigger
						data-scope={"color-input"}
						class={cx(rootProps.className, rootProps.class)}
						aria-invalid={fieldProps.error ? true : undefined}
					>
						<ColorPicker.ChannelInput
							channel="hex"
							data-scope={"color-input"}
						/>
						<ColorPicker.ValueSwatch
							style={{ position: "absolute" }}
							data-scope={"color-input"}
						/>
					</ColorPicker.Trigger>
				</ColorPicker.Control>
				<Portal>
					<ColorPicker.Positioner data-scope={"color-input"}>
						<ColorPicker.Content data-scope={"color-input"}>
							<ColorPicker.Area data-scope={"color-input"}>
								<ColorPicker.AreaBackground data-scope={"color-input"} />
								<ColorPicker.AreaThumb data-scope={"color-input"} />
							</ColorPicker.Area>
							<ColorPicker.ChannelSlider
								channel="hue"
								data-scope={"color-input"}
							>
								<ColorPicker.ChannelSliderTrack data-scope={"color-input"} />
								<ColorPicker.ChannelSliderThumb data-scope={"color-input"} />
							</ColorPicker.ChannelSlider>
						</ColorPicker.Content>
					</ColorPicker.Positioner>
				</Portal>
				<ColorPicker.HiddenInput
					{...inputProps}
					data-testid={fieldProps.testId ? `${fieldProps.testId}--input` : undefined}
					data-scope={"color-input"}
				/>
			</ColorPicker.Root>
		</Field>
	);
}
