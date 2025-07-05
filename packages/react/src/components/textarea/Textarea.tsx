import { Field as ArkField } from "@ark-ui/react/field";
import type { TextareaProps as CoreTextareaProps } from "@temporal-ui/core/textarea";
import type React from "react";
import { forwardRef } from "react";
import { Field } from "../field";
import { cx } from "@temporal-ui/core/utils/cx";

export type TextareaProps = CoreTextareaProps<React.ReactNode> & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
	const {
		label,
		hint,
		error,
		required,
		disabled,
		readOnly,
		className,
		classes,
		...rest
	} = props;

	return (
		<Field
			label={label}
			hint={hint}
			error={error}
			required={required}
			disabled={disabled}
			readOnly={readOnly}
			classes={classes}
		>
			<ArkField.Textarea
				ref={ref}
				{...rest}
				className={cx("textarea", className)}
			/>
		</Field>
	);
});
