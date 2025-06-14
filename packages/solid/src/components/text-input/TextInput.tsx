import { type TextInputProps as CoreTextInputProps, cx, getSafeString } from "@temporal-ui/core";
import type { JSX } from "solid-js";

export interface TextInputProps extends CoreTextInputProps {
	startSection?: JSX.Element;
	endSection?: JSX.Element;
}

export function TextInput(props: TextInputProps) {

	const inputId = props.id ?? getSafeString(8);
	const baseClass = [ "input", props.size !== "md" ? props.size : "" ].filter(Boolean).join("-");

	return (
		<div
			class={cx("input-root", props.rootClass)}
			aria-disabled={props.disabled}
		>
			{props.label && (
				<label
					class={cx("label", props.labelClass)}
					for={inputId}
				>
					{props.label}
				</label>
			)}
			<div
				class={"input-wrapper"}
				data-start-section={props.startSection ? true : undefined}
				data-end-section={props.endSection ? true : undefined}
			>
				{props.startSection && (
					<div class={"input-start-section"} data-position={"start"}>
						{props.startSection}
					</div>
				)}
				{props.endSection && (
					<div class={"input-end-section"} data-position={"end"}>
						{props.endSection}
					</div>
				)}
				<input
					id={inputId}
					class={cx(baseClass, props.inputClass)}
					type={props.type ?? "text"}
					disabled={props.disabled}
					placeholder={props.placeholder}
					aria-invalid={props.error ? true : undefined}
					readOnly={props.readOnly}
				/>
			</div>
			{props.description && (
				<div
					class={cx("input-description", props.descriptionClass)}
					aria-disabled={props.disabled}
				>
					{props.description}
				</div>
			)}
			{props.error && (
				<div class={cx("input-error", props.errorClass)}>
					{props.error}
				</div>
			)}
		</div>
	);
}
