// noinspection JSUnusedGlobalSymbols

export interface TextInputProps {
	/** The ID of the input. */
	id?: string;
	/** The visual variant of the input. */
	variant?: "default";
	/** The type of the input. */
	type?: "text" | "email" | "password" | "tel" | "url" | "search";
	/** The label for the input. */
	label?: string
	/** The description of the input. */
	description?: string;
	/** The error message to display. */
	error?: string;
	/** Whether the input is disabled. */
	disabled?: boolean
	/** The placeholder text for the input. */
	placeholder?: string
	/** The value of the input. */
	value?: string
	/** The size of the input. */
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	/** Whether the input is required. */
	required?: boolean;
	/** Whether the input is read-only. */
	readOnly?: boolean;
	/** Event handler for when the input value changes. */
	onChange?: (value: string) => void;
	/** Custom CSS classes to apply to the input. */
	class?: string
	/** The start section of the input. */
	startSection?: unknown;
	/** The end section of the input. */
	endSection?: unknown;
	/** Custom CSS classes to apply to the root element. */
	rootClass?: string;
	/** Custom CSS classes to apply to the label element. */
	labelClass?: string;
	/** Custom CSS classes to apply to the input element. */
	inputClass?: string;
	/** Custom CSS classes to apply to the description element. */
	descriptionClass?: string;
	/** Custom CSS classes to apply to the error element. */
	errorClass?: string;
}
