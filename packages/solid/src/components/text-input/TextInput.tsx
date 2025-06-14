import { type TextInputProps as CoreTextInputProps, cx, getSafeString } from "@temporal-ui/core";
import { type JSX, mergeProps } from "solid-js";

export interface TextInputProps extends CoreTextInputProps {
	startSection?: JSX.Element;
	endSection?: JSX.Element;
}

export function TextInput(_props: TextInputProps) {

	const props = mergeProps(
		{ size: "md", variant: "primary", icon: false } as TextInputProps,
		_props
	);

	const inputId = props.id ?? getSafeString(8);
	const baseClass = [ "input", props.size !== "md" ? props.size : "" ].filter(Boolean).join("-");

	return (
		<div class={cx("input-root", props.rootClass)}>
			{props.label && (
				<label
					class={cx("label", props.labelClass)}
					for={inputId}
				>
					{props.label}
				</label>
			)}
			<input
				id={inputId}
				class={cx(baseClass, props.inputClass)}
				type={props.type ?? "text"}
				disabled={props.disabled}
				placeholder={props.placeholder}
				aria-invalid={props.hasError}
			/>
			{props.description && (
				<div class={cx("input-description", props.descriptionClass)}>
					{props.description}
				</div>
			)}
			{props.hasError && props.errorText && (
				<div class={cx("input-error", props.errorClass)}>
					{props.errorText}
				</div>
			)}
		</div>
	);
}
