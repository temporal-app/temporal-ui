import { type TextInputProps as CoreTextInputProps, cx, getSafeString } from "@temporal-ui/core";
import type { ReactNode } from "react";

export interface TextInputProps extends CoreTextInputProps {
	startSection?: ReactNode;
	endSection?: ReactNode;
}

export function TextInput(props: TextInputProps) {

	const inputId = props.id ?? getSafeString(8);
	const size = props.size !== "md" ? props.size : "";
	const baseClass = [ "input", size ].filter(Boolean).join("-");

	return (
		<div className={cx("input-root", props.rootClass)}>
			{props.label && (
				<label
					className={cx("label", props.labelClass)}
					htmlFor={inputId}
				>
					{props.label}
				</label>
			)}
			<input
				id={inputId}
				className={cx(baseClass, props.inputClass)}
				type={props.type ?? "text"}
				disabled={props.disabled}
				placeholder={props.placeholder}
				aria-invalid={props.hasError}
			/>
			{props.description && (
				<div className={cx("input-description", props.descriptionClass)}>
					{props.description}
				</div>
			)}
			{props.hasError && props.errorText && (
				<div className={cx("input-error", props.errorClass)}>
					{props.errorText}
				</div>
			)}
		</div>
	);
}
