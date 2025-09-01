import { Portal } from "@ark-ui/react/portal";
import { Select as ArkSelect, createListCollection } from "@ark-ui/react/select";
import type { SelectProps as CoreSelectProps, SelectItem } from "@temporal-ui/core/select";
import React, { forwardRef } from "react";
import { Field } from "../field";
import { SelectContent } from "./SelectContent";
import { SelectTrigger } from "./SelectTrigger";

export interface SelectProps
	extends CoreSelectProps<React.ReactNode>,
		Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "defaultValue" | "value"> {
	collection?: ReturnType<typeof createListCollection<SelectItem<React.ReactNode>>>;
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
		onValueChange,
		renderItem,
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
				data-testid={testId ? `${testId}--root` : undefined}
				collection={listCollection}
				deselectable={deselectable}
				value={value}
				defaultValue={defaultValue}
				disabled={disabled}
				invalid={!!error}
				required={required}
				readOnly={readOnly}
				onValueChange={onValueChange ? (details) => onValueChange?.(details.value) : undefined}
				positioning={{
					offset: {
						mainAxis: 0,
					},
				}}
			>
				<ArkSelect.Label>{label}</ArkSelect.Label>
				<SelectTrigger
					className={className}
					testId={testId}
					placeholder={placeholder}
					indicator={indicator}
					renderItem={renderItem}
				/>
				{portal && (
					<Portal>
						<SelectContent
							testId={testId}
							collection={listCollection}
							renderItem={renderItem}
						/>
					</Portal>
				)}
				{!portal && (
					<SelectContent
						testId={testId}
						collection={listCollection}
						renderItem={renderItem}
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
