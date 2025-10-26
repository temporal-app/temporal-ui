import { Portal } from "@ark-ui/react/portal";
import { Select as ArkSelect, createListCollection, type ListCollection } from "@ark-ui/react/select";
import type { SelectProps as CoreSelectProps } from "@temporal-ui/core/select";
import React, { forwardRef } from "react";
import { Field } from "../field";
import { SelectContent, type SelectItem } from "./SelectContent";
import { SelectTrigger } from "./SelectTrigger";

export interface SelectProps<M = unknown>
	extends CoreSelectProps<M, React.ReactNode>,
		Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "defaultValue" | "value" | "onBlur"> {
	collection?: ListCollection<SelectItem<M>>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const {
		label,
		hint,
		error,
		required,
		readOnly,
		disabled,
		classes,
		testId,
		collection,
		data,
		placeholder,
		indicator,
		portal,
		deselectable,
		defaultValue,
		value,
		className,
		onBlur,
		onValueChange,
		renderItem,
		startSection,
		maxDropdownHeight,
		...rest
	} = props;

	const listCollection = React.useMemo(
		() =>
			collection ??
			createListCollection({
				items: data ?? [],
				groupBy: (item) => item.group ?? "",
				isItemDisabled: (item) => item.disabled ?? false,
			}),
		[data, collection],
	);

	return (
		<Field
			hint={hint}
			classes={classes}
			required={required}
			readOnly={readOnly}
			error={error}
			disabled={disabled}
			testId={testId ? `${testId}-field` : undefined}
		>
			<ArkSelect.Root
				className={classes?.selectRoot}
				data-testid={testId ? `${testId}--root` : undefined}
				collection={listCollection}
				deselectable={deselectable}
				value={value ? [value] : value === null ? [] : undefined}
				defaultValue={defaultValue ? [defaultValue] : defaultValue === null ? [] : undefined}
				disabled={disabled}
				invalid={!!error}
				required={required}
				readOnly={readOnly}
				onFocusOutside={onBlur}
				onValueChange={onValueChange ? (details) => onValueChange?.(details.value[0] ?? null) : undefined}
				positioning={{
					offset: {
						mainAxis: 0,
					},
				}}
			>
				<ArkSelect.Label className={classes?.label}>{label}</ArkSelect.Label>
				<SelectTrigger
					className={className}
					testId={testId}
					placeholder={placeholder}
					indicator={indicator}
					renderItem={renderItem}
					startSection={startSection}
				/>
				{portal && (
					<Portal>
						<SelectContent
							testId={testId}
							collection={listCollection}
							renderItem={renderItem}
							maxHeight={maxDropdownHeight}
						/>
					</Portal>
				)}
				{!portal && (
					<SelectContent
						testId={testId}
						collection={listCollection}
						renderItem={renderItem}
						maxHeight={maxDropdownHeight}
					/>
				)}
				<ArkSelect.HiddenSelect
					ref={ref}
					data-testid={testId ? `${testId}--input` : undefined}
					{...rest}
				/>
			</ArkSelect.Root>
		</Field>
	);
});
