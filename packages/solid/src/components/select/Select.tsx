import { Combobox } from "@ark-ui/solid/combobox";
import type { SelectProps as CoreSelectProps } from "@temporal-ui/core/select";
import { mergeProps, splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { Field } from "../field";
import { SelectContent } from "./SelectContent";
import { SelectControl } from "./SelectControl";
import { cx } from "@temporal-ui/core/utils/cx";

export interface SelectProps<D = unknown, T = unknown> extends CoreSelectProps<D, T> {};

export const Select: Combobox.RootComponent<SelectProps<unknown, JSX.Element>> = (_props) => {
	const [fieldProps, controlProps, rootProps] = splitProps(
		mergeProps({ portal: true }, _props),
		["label", "hint", "error", "required", "readOnly", "disabled", "classes", "testId"],
		["portal", "icon", "renderItem", "maxDropdownHeight", "searchable", "className", "searchPlaceholder"]
	);

	return (
		<Field
			{...fieldProps}
			testId={fieldProps.testId ? `${fieldProps.testId}-field` : undefined}
		>
			<Combobox.Root
				disabled={fieldProps.disabled}
				invalid={!!fieldProps.error}
				required={fieldProps.required}
				readOnly={fieldProps.readOnly}
				{...rootProps}
				class={cx(controlProps.className, fieldProps.classes?.selectRoot)}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--root` : undefined}
			>
				<SelectControl
					icon={controlProps.icon}
					testId={fieldProps.testId}
					placeholder={rootProps.placeholder}
					renderItem={controlProps.renderItem}
					classes={{
						...fieldProps.classes,
						control: cx(controlProps.className, fieldProps.classes?.control),
					}}
				/>
				{controlProps.portal ? (
					<Portal>
						<SelectContent
							testId={fieldProps.testId}
							renderItem={controlProps.renderItem}
							maxHeight={controlProps.maxDropdownHeight}
							showSearch={controlProps.searchable}
							searchPlaceholder={controlProps.searchPlaceholder}
							classes={fieldProps.classes}
						/>
					</Portal>
				) : (
					<SelectContent
						testId={fieldProps.testId}
						renderItem={controlProps.renderItem}
						maxHeight={controlProps.maxDropdownHeight}
						showSearch={controlProps.searchable}
						searchPlaceholder={controlProps.searchPlaceholder}
						classes={fieldProps.classes}
					/>
				)}
			</Combobox.Root>
		</Field>
	);
};
