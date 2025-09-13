import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { Portal } from "@ark-ui/react/portal";
import type { ColorInputProps as CoreColorInputProps } from "@temporal-ui/core/color-input";
import type React from "react";
import { forwardRef } from "react";
import { Field } from "../field";

export interface ColorInputProps
	extends CoreColorInputProps<React.ReactNode>,
		Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value"> {}

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>((props, ref) => {
	const {
		label,
		hint,
		error,
		required,
		readOnly,
		disabled,
		testId,
		value,
		defaultValue,
		onValueChange,
		className,
		...inputProps
	} = props;
	return (
		<Field
			label={label}
			hint={hint}
			required={required}
			readOnly={readOnly}
			error={error}
			disabled={disabled}
			testId={testId ? `${testId}-field` : undefined}
		>
			<ColorPicker.Root
				value={value ? parseColor(String(value)) : undefined}
				defaultValue={defaultValue ? parseColor(String(defaultValue)) : undefined}
				onValueChange={(details) => onValueChange?.(details.valueAsString)}
				data-testid={testId ? `${testId}--root` : undefined}
				data-scope={"color-input"}
				openAutoFocus={false}
			>
				<ColorPicker.Control data-scope={"color-input"}>
					<ColorPicker.Trigger
						data-scope={"color-input"}
						className={className}
						aria-invalid={error ? true : undefined}
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
					ref={ref}
					{...inputProps}
					data-testid={testId ? `${testId}--input` : undefined}
					data-scope={"color-input"}
				/>
			</ColorPicker.Root>
		</Field>
	);
});
