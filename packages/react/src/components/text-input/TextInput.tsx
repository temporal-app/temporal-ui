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
			<div
				className={"input-wrapper"}
				data-start-section={props.startSection ? true : undefined}
				data-end-section={props.endSection ? true : undefined}
			>
				{props.startSection && (
					<div className={"input-start-section"} data-position={"start"}>
						{props.startSection}
					</div>
				)}
				{props.endSection && (
					<div className={"input-end-section"} data-position={"end"}>
						{props.endSection}
					</div>
				)}
				<input
					id={inputId}
					className={cx(baseClass, props.inputClass)}
					type={props.type ?? "text"}
					disabled={props.disabled}
					placeholder={props.placeholder}
					aria-invalid={props.error ? true : undefined}
				/>
				{props.description && (
					<div
						className={cx("input-description", props.descriptionClass)}
						aria-disabled={props.disabled}
					>
						{props.description}
					</div>
				)}
				{props.error && (
					<div className={cx("input-error", props.errorClass)}>
						{props.error}
					</div>
				)}
			</div>
		</div>
	);
}
